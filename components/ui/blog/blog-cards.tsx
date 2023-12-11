import BlogCard from "./blog-card";

export default function BlogCards({
    arrayOfArticlesdividedBy3
}: {
    arrayOfArticlesdividedBy3: any
}) {
  return arrayOfArticlesdividedBy3.map((articles, index) => (
    <div
      key={'blog-article-' + index}
      className="mt-10 flex w-full flex-col gap-16 lg:flex-row lg:gap-2.5"
    >
      {articles.map((article, index) => (
        <BlogCard key={'blog-article-' + index} article={article} />
      ))}
    </div>
  ));
}
