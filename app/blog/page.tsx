import Footer from 'components/layout/footer';
import BlogCard from 'components/ui/blog/blog-card';
import BlogCardMax from 'components/ui/blog/blog-card-max';
import Divider from 'components/ui/divider';
import LastLink from 'components/ui/last-link';
import { getArticles } from 'lib/shopify';
import Image from 'next/image';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function BlogPage() {
  // const blogs = await getBlogs();
  const articles = await getArticles({
    'first': 100,
    'title': `title:${process.env.BLOG_TITLE}`,
    'sortKey': 'PUBLISHED_AT',
    'reverse': true
  });

  return (
    <>
      {/* Hero */}
      <div className="w-screen px-5 mt-5">
        <div className="relative w-full h-[400px] bg-black text-center flex flex-col items-center justify-center gap-6 overflow-clip">
            <h1 className="text-title-1 text-white z-[1]">
                Il Blog
            </h1>
            <p className="text-17 text-white z-[1]">
                Le ultime ricerche nel campo di cosmetici, benessere e salute.
            </p>

            {/* background img */}
            <Image 
                src="/img/background/background-2.jpg"
                alt=""
                width={1440}
                height={400}
                className="absolute h-full w-full object-cover opacity-[0.35] select-none z-[0]"
                draggable="false"
                style={{ userSelect: 'none' }}
            />
        </div>
      </div>

      <div className="flex flex-col gap-20 px-5 py-[120px]">
        <div className="w-full flex flex-col items-center justify-center gap-20">
            {/* title */}
            <p className="text-title-4 text-center">
                Ultime ricerche:
            </p>

          {/* first blog article */}
          <Suspense>
            <BlogCardMax article={articles.edges[0]} />
          </Suspense>
          
          {/* rows blog articles */}
          <div className="mt-10 w-full flex flex-col lg:flex-row gap-16 lg:gap-2.5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          <div className="mt-10 w-full flex flex-col lg:flex-row gap-16 lg:gap-2.5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          <div className="mt-10 w-full flex flex-col lg:flex-row gap-16 lg:gap-2.5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
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
