export default function Loading() {
  return (
    Array(4).map(() => (
      <div className='w-full flex flex-col lg:flex-row gap-5 lg:gap-16'>
        {Array(2).map(() => (
          <div className="w-full lg:w-1/2 h-[400px] bg-gray-100"></div>
        ))}
      </div>
    ))
  )
}
