import BlogArticles from 'components/ui/blog/blog-articles';
import Divider from 'components/ui/divider';
import Image from 'next/image';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – Blog',
  description: 'Le ultime ricerche nel campo di cosmetici, benessere e salute.',
  openGraph: {
    type: 'website'
  }
};

export default async function BlogPage() {
  // const blogs = await getBlogs();

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
                className="absolute h-full w-full object-cover opacity-[0.35] z-[0]"
                draggable="false"
                style={{ userSelect: 'none' }}
            />
        </div>
      </div>

      <Suspense fallback={null}>
        <BlogArticles />
      </Suspense>

      {/* divider */}
      <Divider />
    </>
  );
}
