// 각종 리덕스에서 사용하는 액션타임(액션이름)을 상수 값으로 정의하여 전역으로 사용하기 위함

// TodoList에 할 일이 추가되면 전역 데이터로 공유할 할 일 건수 관리 액션타입 정의
export const TODO_COUNT = "TODO_COUNT";

// 사용자 로그인 액션에 대한 액션 타입으로 로그인 후 로그인한 사용자 정보를 전역 데이터로 관리하기 위한 시나이로 구현
export const USER_LOGIN = "USER_LOGIN";

// 사용자 테마 색상 변경 시 전역 데이터로 현재 적용된 테마 색상 관리
export const THEME_COLOR = "THEME_COLOR";

export const API_FAILED = "API_FAILED";
