import Divider from 'components/ui/divider';
import { getArticle } from 'lib/shopify';
import { PublishedDateFormatted } from 'lib/utils';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Balancer from 'react-wrap-balancer';

// export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { 
    handle: string,
    id: string
  };
}): Promise<Metadata | JSX.Element> {
  const article = await getArticle(String('gid://shopify/Article/' + params.id));

  if (!article) return ErrorPage();

  const { title, exerp, image, authorV2, publishedAt, tags } = article;

  return {
    title: `Hevoluta – ${title}`,
    description: exerp,
    openGraph: {
      type: 'article',
      publishedTime: String(publishedAt),
      modifiedTime: String(publishedAt),
      expirationTime: String(Date.now() + 60 * 60 * 24 * 365 * 5),
      authors: [authorV2.name],
      tags: tags,
      images: [
        {
          url: image ? image.url : '/img/background/background-1.jpg',
          width: 980,
          height: 600,
          alt: title
        }
      ]
    }
  };
}

export default async function ArticlePage({ params }: { params: { handle: string, id: string } }) {
  const article = await getArticle(String('gid://shopify/Article/' + params.id));

  if (!article) return ErrorPage();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    image: article.image ? article.image.url : '/img/background/background-1.jpg',
    editor: article.authorV2.name,
    genre: article.tags,
    keywords: article.tags,
    wordcount: article.content.split(' ').length,
    publisher: {
      '@type': 'Hevoluta',
      name: 'Hevoluta',
      logo: {
        '@type': 'ImageObject',
        url: '/img/logo.png'
      }
    },
    url: 'https://hevoluta.com/blog/' + params.handle[0] + params.handle[1],
    datePublished: article.publishedAt,
    dateCreated: article.publishedAt,
    dateModified: article.publishedAt,
    description: article.exerp,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://hevoluta.com/blog/' + params.handle[0] + params.handle[1]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd)
        }}
      />
      
      <div className="w-screen flex lg:gap-2.5 px-8 xl:px-32 pt-20 pb-[120px]">
        <div className="hidden lg:block w-2/12"></div> {/* margin */}
        <div className="w-full lg:w-8/12 flex flex-col gap-20">
            {/* header text */}
            <div className="flex flex-col gap-8">
                <p className="text-body-1 opacity-50">
                    {article.tags.map((tag: string, index: number) => (
                      <span key={'blog-tag-'+index}>
                        {tag}
                        {(index < article.tags.length - 1) && <>&nbsp;&nbsp;-&nbsp;&nbsp;</>}
                      </span>
                    ))}
                </p>
                <h1 className="text-title-2">
                  <Balancer>
                    {article.title}
                  </Balancer>
                </h1>
            </div>

            {/* image */}
            <div className="w-full h-[320px] lg:h-[600px] flex flex-col items-start bg-black">
                <Image
                    src={article.image ? article.image.url : '/img/background/background-1.jpg'}
                    alt=""
                    width={980}
                    height={600}
                    className="w-full h-full object-cover opacity-80 select-none"
                    priority={true}
                    draggable={false}
                />
            </div>

            {/* author */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <p className="opacity-50">
                    <PublishedDateFormatted 
                        published={article.publishedAt}
                    />
                </p>
                <div className="shrink-0 flex items-center gap-5">
                    {article.authorV2.name === 'Moira Bonaldo' && (
                      <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center overflow-clip">
                        <Image 
                          src="/img/blog/author.jpg"
                          alt=""
                          width={80}
                          height={80}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    )}
                    <p className="opacity-50">
                        Scritto da: {article.authorV2.name}
                    </p>
                </div>
            </div>

            {/* divider */}
            <Divider />

            <div
                className="blog-content-wrapper"
                dangerouslySetInnerHTML={{ __html: article.contentHtml as any }}
            />

            <Link href="/blog">
                <button className="button-primary-base">
                    Torna a tutti gli articoli
                </button>
            </Link>
        </div>
        <div className="hidden lg:block w-2/12"></div> {/* margin */}
      </div>
      
      {/* divider */}
      <Divider />
    </>
  );
}

const ErrorPage = () => {
  return (
    <>
      <div className="mb-10 mt-24 flex w-screen flex-col items-center justify-center gap-8 px-5 text-center">
        <p className="text-title-4">Questo articolo non è più disponibile</p>
        <p>
          Ritorna alla lista di articoli per vedere quelli esistenti.
        </p>
      </div>
      <Suspense fallback={null}>
        <div className="flex w-screen justify-center">
          <Link href="/blog">
            <button className="button-primary-base">
              Torna al blog
            </button>
          </Link>
        </div>
      </Suspense>
    </>
  );
};
