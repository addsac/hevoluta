import Image from 'next/image';
import Link from 'next/link';
import { ShopifyArticle } from '../../../lib/shopify/types';

export default function BlogCardMax({
    article
} : {
    article: ShopifyArticle
}){
    return (
        <Link 
            className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-2.5 cursor-pointer group"
            href={`/blog/${article?.handle}/${article?.id?.replace('gid://shopify/Article/', '')}`}
        >
            {/* texts */}
            <div className="flex flex-col items-start gap-6 lg:pr-20">
                <p className="text-body-2 opacity-50">
                    {article?.tags.map((tag: string) => `${tag} `)}
                </p>
                <p className="text-title-3 group-hover:underline">
                    {article?.title}
                </p>
                <button className="button-primary-base">
                    Leggi l'articolo
                </button>
            </div>

            {/* image */}
            <div className="w-full h-[500px] flex flex-col items-start bg-black">
                <Image
                    src={article?.image ? article?.image?.url : '/img/background/background-1.jpg'}
                    alt=""
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover opacity-90 select-none"
                    draggable={false}
                />
            </div>
        </Link>
    )
}