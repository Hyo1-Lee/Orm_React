import React, { Component } from 'react';

class CounterClassComponent extends Component {
    // 리엑트에서의 클래스 컴포넌트의 생성자 함수는 반드시 props를 인자로 전달받아야 한다.
    // 전달된 props는 생성되는 객체의 디폴트 props 값으로 전달된다.
    constructor(props) {
        super(props);

        // 클래스형 컴포넌트는 state 객체를 통해 모든 데디터 속성 정의
        // state 구조와 초기화를 반드시 this.state = {속성명: 초기값} 형태로 정의
        this.state = {
            count: 200,
            userName: 'lee',
            goods: [
                { id: 1, productName: 'item1', price: 5000 },
                { id: 2, productName: 'item2', price: 10000 },
            ],
        };
    }

    handleIncrease = () => {
        console.log('handleIncrease');
        this.setState({
            count: this.state.count + 1,
        })
    };

    handleDecrease = () => {
        console.log('handleDecrease');
        this.setState({
            count: this.state.count - 1,
        })
    };

    render() {
        return (
            <div>
                <h1>Counter State Display: {this.state.count}</h1>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button>
            </div>
        );
    }
}

export default CounterClassComponent;
