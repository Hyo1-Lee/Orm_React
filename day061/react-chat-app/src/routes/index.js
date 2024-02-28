import React, { Suspense } from "react";
import { Routes as SwitchRoute, Route, Navigate } from "react-router-dom";

// suspense 객체, 화면 컴포넌트가 렌더링 작업이 끝날 때 까지 잠시 중단시키고
// 다른 컴포넌트를 먼저 렌더링하게 하는 기능 제공
// 주로 특정 컴포넌트에서 사용하는 데이터의 로딩지연 바인딩 지연시 특정 UI요소를 대체해서 보여주고
// 해당 컴포넌트가 렌더링이 완료되면 자동으로 원래의 UI요소로 교체하는 용도로 사용

//routes.js 모듈에서 정의한 화면별 라우팅규칙 참조

import { authProtectedRoutes, publicRoutes } from "./routes";

import NonAuthLayout from "../layouts/NonAuth";
import AuthLayout from "../layouts/Auth";

// 라우팅 규칙을 정의하는 함수
const AuthProtected = (props) => {
	// 로그인한 사용자 JWT 토큰이 없거나 페이지가 인증에 의한 보호되는 페이지인 경우
	if (props.isAuthProtected && !localStorage.getItem("authUser")) {
		return <Navigate to={{ pathname: "/login", state: { from: props.location } }} />;
	}
};

const Routes = () => {
	return (
		<React.Fragment>
			{/* Suspense를 이용해 해당 태그 내에 정의된 모든 라우팅 컴포넌트 렌더링 전 임시 UI요소 정의 */}
			<Suspense fallback={<div>로딩중...</div>}>
				{/* 여러 개의 라우터를 Routes로 감싸줌 */}
				<SwitchRoute>
					{/* 비인증 페이지 컴포넌트 라우팅 적용 */}
					{publicRoutes.map((route, idx) => (
						<Route
							path={route.path}
							layout={NonAuthLayout}
							element={<NonAuthLayout>{route.element}</NonAuthLayout>}
							key={idx}
							isAuthProtected={false}
						/>
					))}

					{/* 인증 페이지 컴포넌트 라우팅 적용 */}
					{authProtectedRoutes.map((route, idx) => (
						<Route
							path={route.path}
							layout={AuthLayout}
							element={
								<AuthProtected isAuthProtected={true}>
									<AuthLayout>{route.element}</AuthLayout>
								</AuthProtected>
							}
							key={idx}
							isAuthProtected={true}
						/>
					))}
				</SwitchRoute>
			</Suspense>
		</React.Fragment>
	);
};

export default Routes;
