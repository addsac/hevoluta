import Divider from 'components/ui/divider';
import ProductRows from 'components/ui/product/product-rows';
import { getProducts } from 'lib/shopify';
import { defaultSort, sorting } from 'lib/constants';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import FilterItemDropdown from 'components/layout/search/filter/dropdown';
import Collections from 'components/layout/search/collections';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – Prodotti',
  description: 'Tutti i prodotti progettati e formulati da Hvoluta.',
  openGraph: {
    type: 'website'
  }
};

export default async function ProductsPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  // Fetch the products
  const collections = await getProducts({ sortKey, reverse, query: searchValue });

  return (
    <>
      {/* Hero */}
      <div className="w-screen px-5 mt-5">
        <div className="relative w-full h-[320px] lg:h-[400px] bg-black text-center flex flex-col items-center justify-center gap-6 overflow-clip">
            <h1 className="text-title-1 text-white z-[1]">
                I Prodotti
            </h1>
            <p className="text-17 text-white z-[1]">
              <Balancer>
                Progettati con standard superiori di formulazion ed efficacia
              </Balancer>
            </p>

            {/* background img */}
            <Image 
                src="/img/background/background-5.jpg"
                alt=""
                width={1440}
                height={400}
                className="absolute h-full w-full object-cover opacity-[0.35] select-none z-[0]"
                draggable="false"
                style={{ userSelect: 'none' }}
            />
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-20 px-5 py-[120px]">
        <div className="w-full flex flex-col items-center justify-center gap-20">
          {/* title */}
          <div className="flex flex-col gap-6 text-center">
            <p className="text-title-4">
              Tutti i prodotti:
            </p>
            <p className="opacity-70">
              Acquista i nostri prodotti più amati
            </p>
          </div>

          {/* filters */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="w-full lg:w-auto flex flex-col gap-2.5">
              <p>
                Filtra per:
              </p>
              <Collections />
            </div>

            <div className="w-full lg:w-auto flex flex-col gap-2.5">
              <p>
                Ordina per:
              </p>
              <FilterItemDropdown list={sorting} />
            </div>
          </div>

          {/* rows prodcucts */}
          <ProductRows items={collections} />
        </div>
      </div>

      {/* divider */}
      <Divider />
    </>
  );
}
