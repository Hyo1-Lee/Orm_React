import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

// 자식 컴포넌트 참조

// 함수형 자식 컴포넌트 참조
import FChild from './FunctionChild';

// 클래스형 자식 컴포넌트 참조
import CChild from './ClassChild';

import MyProfile from './Profile';

// 함수형 컴포넌트
// 리액트 UI 컴포넌트는 반환값으로 JSX UI 요소 정보를 반환하여 최종 웹브라우저에 UI 표현
// JSX UI 요소를 제어하기 위해 함수 내에 기능구현 영역에서 필요한 데이터와 이벤트를 처리
function App() {
    // 기능 구현 코드
    // 이벤트 기능 구현
    // 해당 컴포넌트의 State(로컬데이터) 값과 JSX 영역 내 UI 요소간 데이터 바인딩을 통해
    // 데이터 바인딩 기법(MVM)으로 UI 요소와 데이터를 관리

    // 샘플용 로컬 문자열 테스트 데이터(스테이트 데이터) 정의 및 초기화
    const [sample, setSample] = useState('Sample Data');

    // 사용자 정보 JSON 데이터 상태값 정의 및 할당
    const [user, setUser] = useState({
        userId: '2',
        userName: 'lee',
        userEmail: 'nextplay@test.com',
        userPhone: '010-1234-1212',
        address: '인천시 연수구 송도동',
    });

    // JSX 코드
    return (
        <div>
            <h1>메인 컴포넌트 {sample}</h1>

            {/* 각종 UI 컴포넌트의 반환 결과 값이 결국 JSX 요소들이기 때문에 참조한UI는 결국 부모 컴포넌트에 JSX 영역에서 사용 */}

            <FChild companyName="NextPlay" telephone="010-1234-5678" address="인천시 연수구 송도동" sampleData={sample}>
                회사소개
            </FChild>

            <CChild deptName="개발1팀" deptRole="협업툴솔루션 개발" employee={10}>
                개발팀소개
            </CChild>

            {/* 내 프로필 자식 컴포넌트 표시 */}
            <MyProfile userId="1" userName="홍길동" userEmail="test@test.com" userPhone="010-1234-5678">
                내 소개 페이지
            </MyProfile>

            <MyProfile userId={user.userId} userName={user.userName} userEmail={user.userEmail} userPhone={user.userPhone}>
                내 소개 페이지
            </MyProfile>
        </div>
    );
}

export default App;
