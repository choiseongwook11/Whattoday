import React from 'react';
import './loginmain.css';
import SocialLogin from './login';


function LoginMain() {
  return (
      <section className="all">
        <div className="main-box">
          <div className="main-login-box">
            <div className="back-text"><a href="/" className="click"><i className="fa-solid fa-angle-left"></i></a></div>
            <div className="main-login-text-box-left">
              <div className="main-login-title">
                반가워요!
              </div>
              <div className="main-login-text">
                로그인해서 저희 서비스를 이용해보세요
              </div>
            </div>
              <SocialLogin />
          </div>
        </div>
      </section>
  );
}

export default LoginMain;
