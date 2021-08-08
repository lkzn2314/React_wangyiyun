import React, { memo } from 'react';

import { LoginWrapper } from './style';

export default memo(function Login() {

    const loginClick = () => {
        console.log('login');
    }

    return (
        <LoginWrapper>
            <div className="text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
            <div className="btn sprite_02" onClick={() => loginClick()}>用户登录</div>
        </LoginWrapper>
    )
})
