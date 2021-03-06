import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    jspark : {
        name: '박지성',
        description: '축구선수 박지성'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    // path에 설정한 파라미터 값에 username 정의
    const profile = data[username];
    if (!profile){
        return (<div>존재하지 않는 사용자 입니다.</div>);
    }
    return (
        <div>
            <h3>
                {username}({[profile.name]})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
};

export default Profile;