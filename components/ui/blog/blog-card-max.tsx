import Image from 'next/image';
import Link from 'next/link';
import { ShopifyArticle } from '../../../lib/shopify/types';

export default function BlogCardMax({
    article = null
} : {
    article: ShopifyArticle
}){

    console.log(article)

    return (
        <Link 
            className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-2.5 cursor-pointer group"
            href={`/blog/${article.handle}`}
        >
            {/* texts */}
            <div className="flex flex-col items-start gap-6 lg:pr-20">
                <p className="opacity-50">
                    {article.tags.map((tag: string) => `${tag} `)}
                </p>
                <p className="text-title-3 group-hover:underline">
                    {article.title}
                </p>
                <button className="button-primary-base">
                    Leggi l'articolo
                </button>
            </div>

            {/* image */}
            <div className="w-full h-[400px] flex flex-col items-start bg-black">
                <Image
                    src={article.image ? article.image.url : '/img/background/background-1.jpg'}
                    alt=""
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover opacity-80 select-none"
                    draggable={false}
                />
            </div>
        </Link>
    )
}