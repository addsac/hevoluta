'use client';

import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Gallery({ images, modalAddToCart = false }: { images: { src: string; altText: string }[], modalAddToCart?: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());
  const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());
  const previousUrl = createUrl(pathname, previousSearchParams);

  const buttonClassName =
    'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center';

  return (
    <>
      <div className="w-full">
        {/* main photo */}
        {images[imageIndex] && (
          <div className="flex items-center justify-center bg-gradient-gray p-10">
            <Image
              className="h-auto w-auto max-h-[500px] aspect-square"
              width={800}
              height={800}
              alt={images[imageIndex]?.altText as string}
              src={images[imageIndex]?.src as string}
              priority={true}
            />
          </div>
        )}
          
        {/* other photos */}
        {images.length > 1 ? (
          <ul className="grid grid-cols-4 lg:grid-cols-6 gap-2.5">
            {images.map((image, index) => {
              const isActive = index === imageIndex;
              const imageSearchParams = new URLSearchParams(searchParams.toString());

              imageSearchParams.set('image', index.toString());

              return (
                <li 
                  key={image.src} 
                  className={`col-span-1 aspect-square w-auto h-auto p-1 bg-gradient-gray cursor-pointer ${isActive ? 'ring-1 ring-black' : 'hover:ring-1 hover:ring-gray-200'}`}
                >
                  <Link
                    aria-label="Enlarge product image"
                    href={createUrl(pathname, imageSearchParams)}
                    scroll={false}
                    className="h-full w-full"
                  >
                    <Image 
                      alt={image.altText}
                      src={image.src}
                      priority={false}
                      width={80}
                      height={80}
                      className="h-auto w-full"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
}
