import React, { useState } from 'react';
import './login.css';
import Images from 'constants/images';

const Login = () => {
  const [user, setUser] = useState(true);

  return (
    <div className="login">
      <div className={user ? 'lForm' : 'lForm warning'}>
        <img src={Images.LOGO} alt="" />
        <div className="lContainer">
          <div className="lInput">
            Tên đăng nhập *
            <input type="text" placeholder="User name" />
          </div>
          <div className="lInput">
            Mật khẩu *
            <div className="lPassword">
              <input type="password" placeholder="Password" />
              <img src={Images.EYE_ICON} alt="" />
            </div>
          </div>
          <div className="lNotion">
            <img src={Images.WARNING_ICON} alt="" />
            <p>Sai mật khẩu hoặc tên đăng nhập</p>
          </div>
          <div className="lButton">
            <a href="">Quên mật khẩu?</a>
            <button>Đăng nhập</button>
          </div>
        </div>
      </div>
      <div className="lBanner">
        <img src={Images.BANNER01} alt="" />
        <div className="lTitle">
          <h2 className="lSubtitle">Hệ thống</h2>
          <h1 className="lName">QUẢN LÝ XẾP HÀNG</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
