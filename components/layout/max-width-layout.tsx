export default function MaxWidthLayout ({ children }) {
    return (
        <div className="mx-auto w-full max-w-[1440px]">
            {children}
        </div>  
    )
}
