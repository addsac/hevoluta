export default function ProductRowsSkeleton() {
  return (
    <>
      <div className="flex w-full flex-col gap-16 lg:flex-row lg:gap-2.5">
        <div className="relative h-[300px] w-full animate-pulse bg-gray-100 lg:h-[400px] lg:w-1/2"></div>
        <div className="relative h-[300px] w-full animate-pulse bg-gray-100 lg:h-[400px] lg:w-1/2"></div>
      </div>

      <div className="flex w-full flex-col gap-16 lg:flex-row lg:gap-2.5">
        <div className="relative h-[300px] w-full animate-pulse bg-gray-100 lg:h-[400px] lg:w-1/2"></div>
        <div className="relative h-[300px] w-full animate-pulse bg-gray-100 lg:h-[400px] lg:w-1/2"></div>
      </div>

      <div className="flex w-full flex-col gap-16 lg:flex-row lg:gap-2.5">
        <div className="relative h-[300px] w-full animate-pulse bg-gray-100 lg:h-[400px] lg:w-1/2"></div>
        <div className="relative h-[300px] w-full animate-pulse bg-gray-100 lg:h-[400px] lg:w-1/2"></div>
      </div>
    </>
  );
}
