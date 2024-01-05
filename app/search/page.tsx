import ProductRows from 'components/ui/product/product-rows'
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Hevoluta – Prodotti',
  description: 'Tutti i prodotti progettati e formulati da Hevoluta.'
};

export default async function SearchPage({ searchParams } : { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <ProductRows items={products} />
      ) : null}
    </>
  );
}
