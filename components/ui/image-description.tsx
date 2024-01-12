import Image from "next/image"
import Link from "next/link"
import { Balancer } from "react-wrap-balancer"

export default function ImageDescription({ subtitle = '', title = '', description = '', src = '', href = '/' } : {
    subtitle?: string,
    title: string,
    description: string,
    src: string,
    href: string
}){
    return (
        <div className="w-screen px-5">
            <div className="relative w-full h-[500px] lg:h-[600px] bg-black">
                {/* image */}
                <Image
                    src={src}
                    alt=""
                    width={1440}
                    height={900}
                    className="w-full h-full object-cover opacity-40 select-none"
                    draggable={false}
                />
        
                {/* texts */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-col items-start gap-5">
                    <p className="text-body-1 text-white mb-2.5">
                        {subtitle}
                    </p>
                    <p className="text-title-3 text-white w-full lg:w-2/3">
                        <Balancer>
                            <span className="tiempos-font-italic">
                                {title}
                            </span>
                            &nbsp;
                            <span className="inline">
                                {description}
                            </span>
                        </Balancer>
                    </p>
                    <Link 
                        href={href}
                    >
                        <button className="button-secondary-base">
                            Vai a tutti i prodotti
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}