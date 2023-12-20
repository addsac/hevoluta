import clsx from 'clsx';
import { Suspense } from 'react';

import { getCollections } from 'lib/shopify';
import FilterList from './filter';

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title="Collections" />;
}

export default function Collections() {
  return (
    <Suspense>
      <CollectionList />
    </Suspense>
  );
}
