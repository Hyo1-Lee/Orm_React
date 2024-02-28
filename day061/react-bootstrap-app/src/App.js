import React, { useState } from "react";
// Sass 파일 참조
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import GNB from "./components/GNB";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Community from "./pages/community/Community";
import ArticleCreate from "./pages/community/ArticleCreate";

// Create a new component that will render the footer conditionally
function LayoutWithConditionalFooter() {
	const location = useLocation();
	const routeStyle = location.pathname === "/community" ? {} : { height: "100vh" };

	const [articles, setArticles] = useState([]);

	const onInsert = (title, content, category, date) => {
		setArticles(articles.concat({ id: articles.length + 1, title, content, category, date }));
	};

	const onSelect = (id) => {
		setArticles(
			articles.map((article) =>
				article.id === id ? { ...article, selected: !article.selected } : article
			)
		);
	};

	const onDelete = () => {
		setArticles(articles.filter((article) => !article.selected));
	};

	const onEdit = (title, content, category) => {
		setArticles(
			articles.map((article) =>
				article.selected ? { ...article, title, content, category } : article
			)
		);
	};

	return (
		<>
			<GNB />
			<div className="App">
				<div className="auth-wrapper" style={routeStyle}>
					<div className="auth-inner">
						<Routes>
							{/* Use `element` instead of `Component` */}
							<Route path="/" element={<Main />} />
							<Route path="/signin" element={<Login />} />
							<Route path="/signup" element={<Register />} />
							<Route path="/community" element={<Community onEdit={onEdit} />} />
							<Route path="/article/create" element={<ArticleCreate onInsert={onInsert} />} />
						</Routes>
					</div>
				</div>
			</div>
			{!(
				location.pathname === "/signin" ||
				location.pathname === "/signup" ||
				location.pathname === "/article/create"
			) && <Footer />}
		</>
	);
}

// Your main App component now returns the Router with the new component inside
function App() {
	return (
		<Router>
			<LayoutWithConditionalFooter />
		</Router>
	);
}

export default App;
