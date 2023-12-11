import Footer from 'components/layout/footer';
import Divider from 'components/ui/divider';
import LastLink from 'components/ui/last-link';
import { format, parseISO } from 'date-fns';
import { it } from 'date-fns/locale';
import { getArticle } from 'lib/shopify';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string[] };
}): Promise<Metadata> {
  const article = await getArticle(String('gid://shopify/Article/' + params.handle[1]));

  if (!article) return notFound();

  const { title, exerp, image, authorV2, publishedAt, tags } = article;

  return {
    title,
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

export default async function ArticlePage({ params }: { params: { handle: string[] } }) {
  const article = await getArticle(String('gid://shopify/Article/' + params.handle[1]));

  if (!article) return notFound();

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
      
      <div className="w-screen grid grid-cols-12 gap-16 lg:gap-2.5 px-5 pt-20 pb-[120px]">
        <div className="hidden lg:block col-span-1"></div> {/* margin */}
        <div className="col-span-12 lg:col-span-10 flex flex-col gap-20">
            {/* header text */}
            <div className="flex flex-col gap-8">
                <p className="text-body-2 opacity-50">
                    {article.tags.map((tag: string) => `${tag} `)}
                </p>
                <h1 className="text-title-2">
                    {article.title}
                </h1>
            </div>

            {/* image */}
            <div className="w-full h-[600px] flex flex-col items-start bg-black">
                <Image
                    src={article.image ? article.image.url : '/img/background/background-1.jpg'}
                    alt=""
                    width={980}
                    height={600}
                    className="w-full h-full object-cover opacity-80 select-none"
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
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
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
        <div className="hidden lg:block col-span-1"></div> {/* margin */}
      </div>
      
      {/* divider */}
      <Divider />

      {/* Last links */}
      <Suspense>
        <LastLink />
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

const PublishedDateFormatted = ({ published } : { published: Date }) => {
    // Parse the ISO string to a Date object
    const date = parseISO(String(published));
  
    // Format the date as '24 ottobre 2023'
    const formattedDate = format(date, 'd MMMM yyyy', { locale: it });
  
    return formattedDate;
};