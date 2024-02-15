import logo from './logo.svg'
import './App.css'
import { Fragment } from 'react'

function App() {
    // jsx 영역 요소에 대한 로직을 구현하는 영역
    //
    const userName = 'lee'
    let userRole = 'Developer'

    const myStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: '16px',
    }

    return (
        // 화면 요소를 jsx 문법으로 작성
        <Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* jsx 요소에 인라인 스타일링 */}
                    <p style={{ backgroundColor: 'blue', color: 'red' }}>
                        {userRole}: {userName}님 방문을 환영합니다.
                    </p>
                    {userName === 'lee' ? <h4>{userName}님 반갑습니다.</h4> : <h4>게스트님 반갑습니다.</h4>}
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>

                    <p className="Sample">클래스 적용 샘플입니다.</p>
                </header>
            </div>

            {/* 객체로 정의된 스타일 적용 */}
            <div style={myStyle}>안녕하세요.</div>
        </Fragment>
    )
}

export default App
