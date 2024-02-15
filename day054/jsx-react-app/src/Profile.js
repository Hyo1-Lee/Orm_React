import React from 'react';
import Child1 from './ThirdComponent';

// const Profile = (props) => {
//     return (
//         <div>
//             <h1>{props.children}</h1>
//             아이디: {props.userId} <br />
//             이름: {props.userName} <br />
//             이메일: {props.userEmail} <br />
//             전화번호: {props.userPhone} <br />
//         </div>
//     )
// }

const Profile = ({ children, userId, userName, userEmail, userPhone, address }) => {
    return (
        <div>
            <h1>{children}</h1>
            아이디: {userId} <br />
            이름: {userName} <br />
            메일주소: {userEmail} <br />
            전화번호: {userPhone} <br />
            <Child1 userName={userName} />
            거주지: {address} <br />
        </div>
    );
};

Profile.defaultProps = {
    address: "101 Main St., San Fernando, CA 91340"
}

export default Profile;
