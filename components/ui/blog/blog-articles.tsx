import BlogCardMax from 'components/ui/blog/blog-card-max';
import BlogCards from 'components/ui/blog/blog-cards';
import { getArticles } from 'lib/shopify';
import { ShopifyArticle } from 'lib/shopify/types';
import { divideArrayIntoGroups } from 'lib/utils';
import { Suspense } from 'react';

export default async function BlogArticles() {
  let articlesFetched = await getArticles({
    first: 50,
    title: `title:${process.env.BLOG_TITLE}`,
    sortKey: 'PUBLISHED_AT',
    reverse: true,
  });

  const firstArticle: ShopifyArticle = articlesFetched.edges[0];

  // remove the first article to group the rest by 3
  articlesFetched.edges.shift();
  let arrayOfArticlesdividedBy3: any = divideArrayIntoGroups(articlesFetched.edges, 3);

  return (
    <div className="flex flex-col gap-20 px-5 py-[120px]">
      <div className="flex w-full flex-col items-center justify-center gap-20">
        {/* title */}
        {/* <p className="text-title-4 text-center">Ultime ricerche:</p> */}

        {/* first blog article */}
        <Suspense fallback={null}>
          <BlogCardMax article={firstArticle} />
        </Suspense>

        {/* rows blog articles */}
        <BlogCards 
          key={arrayOfArticlesdividedBy3.length}
          arrayOfArticlesdividedBy3={arrayOfArticlesdividedBy3}
        />

        {/* {articlesFetched.pageInfo.hasNextPage && (
          <Suspense fallback={null}>
            <LoadMoreButton fetchMoreArticles={fetchMoreArticles} />
          </Suspense>
        )} */}
      </div>
    </div>
  );
}
