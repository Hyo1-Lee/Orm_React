import logo from './logo.svg'
import './App.css'

function App() {
    // 해당 컴포넌트의 로직 구현 영역
    console.log('App component is rendering...')

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to my React App. This is Day 53 of #100DaysOfCode. I am learning React.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
