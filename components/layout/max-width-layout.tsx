import { ReactNode } from 'react'

export default function MaxWidthLayout ({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto w-full max-w-[1440px]">
            {children}
        </div>  
    )
}
