import React from 'react'
import '../../styles/loginSignup.css'
import LoginHomeLeftCon from './LoginHomeLeftCon';

import homeBackgroundImg from '../../localImages/homeBackground.jpg'
import LoginAndSignupBlock from './LoginAndSignupBlock';

export default function LoginHome() {
  return (
    <div className='loginHomeMainContainer' style={{ backgroundImage: `url(${homeBackgroundImg})` }}>
        <LoginHomeLeftCon />
        <LoginAndSignupBlock />
    </div>
  )
}

