import ArticleList from './_components/ArticleList';
import ArticleProvider from './_components/ArticleProvider';
import FilterList from './_components/FilterList';

const Article = () => (
  <ArticleProvider>
    <div className="content-wrapper mt-10 mb-10">
      <FilterList />
      <ArticleList />
    </div>
  </ArticleProvider>

);

export default Article;
