import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({location, match, history}) => {
    return(
        <div>
            <h4> location </h4>
            <textarea
            value={JSON.stringify(location, null, 2)}
            //두 번째 세 번째 파라미터 설정을 통해 json에 들여쓰기 적용된 상태로 문자열이 만들어짐.
            rows={7}
            readOnly={true}
            />
            <h4> match </h4>
            <textarea
            value={JSON.stringify(match, null, 2)}
            rows={7}
            readOnly={true}
            />
            <button onClick={()=>history.push('/')}>홈으로</button>
        </div>
    );
};

export default withRouter(WithRouterSample);