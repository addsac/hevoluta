import BlogCardMax from 'components/ui/blog/blog-card-max';
import BlogCards from 'components/ui/blog/blog-cards';
import { getArticles } from 'lib/shopify';
import { ShopifyArticle } from 'lib/shopify/types';
import { createUrl, divideArrayIntoGroups } from 'lib/utils';
import Link from 'next/link';
import { Suspense } from 'react';

const PAGE_SIZE = 100;

export default async function BlogArticles({
  after,
  before,
  page
}: {
  after?: string | string[];
  before?: string | string[];
  page?: string | string[];
}) {
  const afterCursor = Array.isArray(after) ? after[0] : after;
  const beforeCursor = Array.isArray(before) ? before[0] : before;
  const pageParam = Array.isArray(page) ? page[0] : page;
  const pageNumber = Math.max(1, Number(pageParam) || 1);
  const useBeforeCursor = Boolean(beforeCursor) && !afterCursor;

  let articlesFetched = await getArticles({
    first: useBeforeCursor ? undefined : PAGE_SIZE,
    last: useBeforeCursor ? PAGE_SIZE : undefined,
    title: `title:${process.env.BLOG_TITLE}`,
    sortKey: 'PUBLISHED_AT',
    reverse: true,
    after: useBeforeCursor ? undefined : afterCursor,
    before: useBeforeCursor ? beforeCursor : undefined
  });

  const isFirstPage = !afterCursor && !beforeCursor;
  const edges = articlesFetched.edges ?? [];
  const firstArticle: ShopifyArticle | null = isFirstPage ? edges[0] ?? null : null;

  // remove the first article to group the rest by 3
  const remainingEdges = isFirstPage ? edges.slice(1) : edges;
  let arrayOfArticlesdividedBy3: any = divideArrayIntoGroups(remainingEdges, 3);
  const nextCursor = articlesFetched.pageInfo.hasNextPage
    ? articlesFetched.pageInfo.endCursor
    : null;
  const prevCursor = articlesFetched.pageInfo.hasPreviousPage
    ? articlesFetched.pageInfo.startCursor
    : null;
  const nextUrl = nextCursor
    ? createUrl(
        '/blog',
        new URLSearchParams({ after: nextCursor, page: String(pageNumber + 1) })
      )
    : null;
  const prevUrl = prevCursor
    ? createUrl(
        '/blog',
        new URLSearchParams({ before: prevCursor, page: String(Math.max(1, pageNumber - 1)) })
      )
    : null;
  const showPrev = Boolean(prevUrl) && pageNumber > 1;
  const showNext = Boolean(nextUrl);

  return (
    <div className="flex flex-col gap-20 px-5 py-[120px]">
      <div className="flex w-full flex-col items-center justify-center gap-20">
        {/* title */}
        {/* <p className="text-title-4 text-center">Ultime ricerche:</p> */}

        {/* first blog article */}
        {firstArticle && (
          <Suspense fallback={null}>
            <BlogCardMax article={firstArticle} />
          </Suspense>
        )}

        {/* rows blog articles */}
        <BlogCards
          key={arrayOfArticlesdividedBy3.length}
          arrayOfArticlesdividedBy3={arrayOfArticlesdividedBy3}
        />

        <div className="mt-10 flex w-full items-center justify-center gap-2">
          {showPrev ? (
            <Link href={prevUrl}>
              <button className="button-secondary-base" aria-label="Pagina precedente">
                {'<'}
              </button>
            </Link>
          ) : (
            <span className="button-secondary-base cursor-not-allowed opacity-40">{'<'}</span>
          )}
          {showPrev && (
            <Link href={prevUrl}>
              <button className="button-secondary-base">{pageNumber - 1}</button>
            </Link>
          )}
          <span className="button-primary-base cursor-default">{pageNumber}</span>
          {showNext && (
            <Link href={nextUrl}>
              <button className="button-secondary-base">{pageNumber + 1}</button>
            </Link>
          )}
          {showNext ? (
            <Link href={nextUrl}>
              <button className="button-secondary-base" aria-label="Pagina successiva">
                {'>'}
              </button>
            </Link>
          ) : (
            <span className="button-secondary-base cursor-not-allowed opacity-40">{'>'}</span>
          )}
        </div>
      </div>
    </div>
  );
}
