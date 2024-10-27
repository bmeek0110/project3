import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const news = await fetchNews();
      setArticles(news);
    };
    loadNews();
  }, []);

  return (
    <div>
      <h1>WWE News</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
