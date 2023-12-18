import Divider from 'components/ui/divider';
import LastLink from 'components/ui/last-link';
import ProfileSettings from 'components/ui/profile/profile-settings';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – Profilo',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function ProfilePage() {
  // const blogs = await getBlogs();

  return (
    <>
      {/* Hero */}
      <div className="flex w-screen px-5 pb-[120px] pt-20 lg:gap-2.5">
        <div className="hidden w-1/12 lg:block"></div> {/* margin */}
        <div className="flex w-full flex-col gap-20 lg:w-10/12">
          {/* header text */}
          <div className="flex flex-col gap-6 text-center">
            <h1 className="text-title-4">
                Bentornato Leonardo
            </h1>
            <p className="opacity-70">
                Nel tuo profilo puoi gestire al meglio la tua Shopping Experience su Hevoluta.com.
            </p>
          </div>

          {/* data */}
          <Suspense>
            <ProfileSettings />
          </Suspense>
        </div>
      </div>

      <Suspense>{/* <BlogArticles /> */}</Suspense>

      {/* divider */}
      <Divider />
    </>
  );
}
