// 리액트 채팅앱의 모든 화면 컴포넌트의 라우팅 규칙을 정의
import React from 'react';
import { Navigate } from 'react-router-dom';

// React.lazy를 사용하여 페이지 컴포넌트를 동적으로 로딩

// 기정의된 페이지 컴포넌트 참조
const StarterPage = React.lazy(()=>import("../pages/Starter/Index"));
const Dashboard = React.lazy(()=>import("../pages/Dashboard/Index"));

const Login = React.lazy(()=>import("../pages/Auth/Login"));
const Register = React.lazy(()=>import("../pages/Auth/Register"));

const authProtectedRoutes = [
    { path:"/starter", element:<StarterPage/> },
    { path:"/dashboard", element:<Dashboard/> },
    { path:"/", exact:true, element:<Navigate to="/Dashboard"/> }
];

const publicRoutes = [
    { path:"/login", element:<Login/> },
    { path:"/register", element:<Register/> },
];