import ArticleList from './_components/ArticleList';
import FilterList from './_components/FilterList';
import ArticlePagination from './_components/Pagination';

const Article = () => (
  <div className="content-wrapper mt-10 mb-10">
    <FilterList />
    <ArticleList />
    <ArticlePagination />
  </div>
);

export default Article;
