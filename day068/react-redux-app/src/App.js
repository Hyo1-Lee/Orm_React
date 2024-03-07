import "./App.css";

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GNB from "./components/GNB";

const Login = React.lazy(() => import("./auth/Login"));
const Entry = React.lazy(() => import("./auth/Register"));
const Profile = React.lazy(() => import("./auth/Profile"));
const Main = React.lazy(() => import("./auth/Main"));
const TodoList = React.lazy(() => import("./components/TodoList"));

function App() {
	return (
		<div className="App">
			<GNB />
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/entry" element={<Entry />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/todolist" element={<TodoList />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
