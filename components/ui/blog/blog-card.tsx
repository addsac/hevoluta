import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard(){
    return (
        <Link 
            className="w-full flex flex-col gap-6 cursor-pointer group"
            href="/blog/1"
        >
            {/* image */}
            <div className="w-full h-[240px] flex flex-col items-start bg-black">
                <Image
                    src={'/img/blog/background-1.jpg'}
                    alt=""
                    width={400}
                    height={400}
                    className="w-full h-full object-cover opacity-80 select-none"
                    draggable={false}
                />
            </div>

            {/* texts */}
            <div className="flex flex-col items-start gap-5">
                <p className="opacity-50">
                    Bellezza
                </p>
                <p className="text-title-5 group-hover:underline">
                    Occhiali a maschera, Il trend inaspettato dell’autunno/inverno 2023
                </p>
                <button className="button-primary-base">
                    Leggi di più
                </button>
            </div>
        </Link>
    )
}