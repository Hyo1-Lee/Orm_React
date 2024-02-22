import './App.css';
import UseStateHook from './UseStateHook';
import UseReduceHook from './UseReduceHook';
import UseEffectHook from './UseEffectHook';

function App() {
  return (
    <div className="App">
      <UseStateHook></UseStateHook>
      <hr></hr>
      <UseReduceHook></UseReduceHook>
      <hr></hr>
      <UseEffectHook></UseEffectHook>
    </div>
  );
}

export default App;
