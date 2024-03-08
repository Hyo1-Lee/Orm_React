import "./App.css";

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GNB from "./components/GNB";

const Login = React.lazy(() => import("./auth/Login"));
const Login2 = React.lazy(() => import("./auth/Login2"));
const Login3 = React.lazy(() => import("./auth/Login3"));
const Entry = React.lazy(() => import("./auth/Register"));
const Profile = React.lazy(() => import("./auth/Profile"));
const Profile2 = React.lazy(() => import("./auth/Profile2"));
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
					<Route path="/login2" element={<Login2 />} />
					<Route path="/login3" element={<Login3 />} />
					<Route path="/entry" element={<Entry />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/profile2" element={<Profile2 />} />
					<Route path="/todolist" element={<TodoList />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
