import React, { Component } from 'react'

// 클래스형 컴포넌트는 기본적으로 react 패키지와 Component라는 클래스를 상속받아서 구현
// javascript에서 특정 클래스를 상속받을 때는 extends 예약어를 사용해 상속받아 새로운 클래서 정의
class ClassChild extends Component {
    render() {
        return (
            <div>
                <h1>부서소개</h1>
                <h2>{this.props.children}</h2>
                부서 이름: {this.props.deptName} <br />
                부서 역할: {this.props.deptRole} <br />
                부서원 수: {this.props.employee} 명<br />
            </div>
        )
    }
}

export default ClassChild;