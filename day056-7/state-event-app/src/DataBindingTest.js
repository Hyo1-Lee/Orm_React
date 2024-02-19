import React, { useState } from "react";

const DataBindingTest = () => {
	const [msg, setMsg] = useState("");

    const handleMessage = (e) => {
        setMsg(e.target.value);
    }

    // 데이터 바인딩 기법을 통해 ui를 개발하는 mvm 패턴에서 가장 중요한 점은
    // 데이터의 구조와 데이터의 값에 따라 ui가 제어되기 때문에
    // 화면에서 컴포넌트에서 사용하는 데이터의 구조를 먼저 정의하고 관련 ui 요소에 적절한 데이터 바인딩 기법을 적용해야 한다.

	return (
		<div>
            메세지 값: <p>{msg}</p>
            <hr></hr>

            {/* onchange 이벤트는 입력요소의 값이 바뀔때 마다 발생하는 이벤트 */}
            {/* 바뀔 때마다 바인딩 된 데이터 소스(해당 data state)를 변경해줘야 한다. - 양방향 데이터 바인딩 */}
			<input type="text" name="msg" placeholder="메시지를 입력해주세요" value={msg} onChange={handleMessage}></input>
            <button onClick={() => setMsg('')}>초기화</button>
		</div>
	);
};

export default DataBindingTest;
