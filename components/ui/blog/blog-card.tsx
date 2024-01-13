import { ShopifyArticle } from 'lib/shopify/types'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

export default function BlogCard({ article } : { article: ShopifyArticle }){
    return (
        <Link 
            className="w-full lg:w-1/3 flex flex-col gap-6 cursor-pointer group"
            href={`/blog/${article?.handle}/${article?.id?.replace('gid://shopify/Article/', '')}`}
        >
            {/* image */}
            <div className="w-full h-[300px] flex flex-col items-start">
                <Image
                    src={article?.image ? article?.image?.url : '/img/background/background-1.jpg'}
                    alt=""
                    width={400}
                    height={400}
                    className="w-full h-full object-cover opacity-90 select-none"
                    draggable={false}
                />
            </div>

            {/* texts */}
            <div className="flex flex-col items-start gap-5">
                <p className="opacity-50">
                    {article?.tags.map((tag: string) => `${tag} `)}
                </p>
                <p className="text-title-5 group-hover:underline">
                    <Balancer>
                        {article?.title}
                    </Balancer>
                </p>
                <button className="button-primary-base">
                    Leggi l'articolo
                </button>
            </div>
        </Link>
    )
}