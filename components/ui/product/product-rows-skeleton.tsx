export default function ProductRowsSkeleton({
  rows = 3,
  itemsPerRow = 2
}: {
  rows?: number;
  itemsPerRow?: number;
}) {
  return (
    <>
        {Array(rows).map((row, index) => (
            <div
                key={'product-row-skeleton-' + index}
                className="flex w-full flex-col gap-16 lg:flex-row lg:gap-2.5"
            >
                {Array(itemsPerRow).map((item, index2) => (
                    <div className="w-full h-[300px] lg:h-[400px] bg-gradient-gray"></div>
                ))}
            </div>
        ))}
    </>
  )
}
