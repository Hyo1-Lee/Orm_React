import "./App.css";
import React, { useState } from "react";
import ArticleManager from "./ArticleManager";
import ArticleList from "./ArticleList";

function App() {
  const [articles, setArticles] = useState([]);

  const onInsert = (title, content, writer, selected) => {
    setArticles(articles.concat({ id: articles.length + 1, title, content, writer, selected}));
  }

  const onSelect = (id) => {
    setArticles(
      articles.map((article) => (article.id === id ? { ...article, selected: !article.selected } : article))
    );
  }

  const onDelete = () => {
    setArticles(articles.filter((article) => !article.selected));
  }

  const onEdit = (title, content, writer) => {
    setArticles(
      articles.map((article) => (article.selected ? { ...article, title, content, writer } : article))
    );
  }

	return <div className="App">
    <ArticleManager onInsert={onInsert} onDelete={onDelete} onEdit={onEdit}></ArticleManager>
    <ArticleList articles={articles} onSelect={onSelect}></ArticleList>
  </div>;
}

export default App;
