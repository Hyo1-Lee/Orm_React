import React, {useReducer} from 'react';
import countReducer from './countReducer';

const UseReduceHook = () => {
    const [count, dispatchCount] = useReducer(countReducer, 0);

    return (
        <div>
            <h1>UseReduceHook</h1>
            <h3>카운터: {count}</h3>
            <button onClick={()=>dispatchCount({type:"INCREASE"})}>증가</button>
            <button onClick={()=>dispatchCount({type:"DECREASE"})}>감소</button>
            <button onClick={()=>dispatchCount({type:"INIT"})}>초기화</button>
        </div>
    );
};

export default UseReduceHook;