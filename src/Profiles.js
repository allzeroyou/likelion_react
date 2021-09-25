import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';


const Profiles = () => {
    const activeStyle  = {
        background: 'black',
        color: 'white'
    };
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to = "/profiles/jspark">jspark</NavLink>
                </li>
                <li>
                <NavLink activeStyle={activeStyle} to = "/profiles/gildong">gildong</NavLink>
                </li>
            </ul>

            <Route
            path="/profiles"
            exact
            render = {()=> <div> 사용자를 선택해주세요. </div>} 
            />
            {/* // 리액트 라우터를 통해 렌더링되는 컴포넌트에 props 넘기기 */}
            <Route path="/profiles/:username" component={Profile}/>
            
        </div>
    );
};

export default Profiles;

