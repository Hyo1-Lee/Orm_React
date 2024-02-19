import React, { useState } from 'react';

const CounterFunctionComponent = () => {
    // 로직 표현 영역

    // 자동 증감되는 숫자 저장용 스테이트 값 정의 및 초기값 할당
    const [count, setCount] = useState(100);

    const [userName, setUserName] = useState('lee');

    // 상품정보 배열 데이터 정의 및 초기값 할당
    const [goods, setGoods] = useState([
        { id: 1, productName: 'item1', price: 5000 },
        { id: 2, productName: 'item2', price: 10000 },
    ]);

    const [isLoggedin, setIsLoggedin] = useState(true);

    const [user, setUser] = useState({ userId: 'user1', userName: 'kim' });

    const handleIncrease = () => {
        setCount(count + 1);
        // setCount((prevCount) => prevCount + 1)
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };

    return <div>
        <h1>Counter State Display: {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>;
};

export default CounterFunctionComponent;
