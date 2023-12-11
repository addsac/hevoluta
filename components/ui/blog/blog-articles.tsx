import BlogCardMax from 'components/ui/blog/blog-card-max';
import BlogCards from 'components/ui/blog/blog-cards';
import { getArticles } from 'lib/shopify';
import { ShopifyArticle } from 'lib/shopify/types';
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
        <p className="text-title-4 text-center">Ultime ricerche:</p>

        {/* first blog article */}
        <Suspense>
          <BlogCardMax article={firstArticle} />
        </Suspense>

        {/* rows blog articles */}
        <BlogCards 
          key={arrayOfArticlesdividedBy3.length}
          arrayOfArticlesdividedBy3={arrayOfArticlesdividedBy3}
        />

        {/* {articlesFetched.pageInfo.hasNextPage && (
          <Suspense>
            <LoadMoreButton fetchMoreArticles={fetchMoreArticles} />
          </Suspense>
        )} */}
      </div>
    </div>
  );
}

// Function to divide the remaining articles by 3 articles (after the first to be maxed)
function divideArrayIntoGroups(arr, groupSize) {
  const groups = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    groups.push(arr.slice(i, i + groupSize));
  }
  return groups;
}
