import Header from 'component/header/Header';
import NavBar from 'component/navBar/NavBar';
import Images from 'constants/images';
import React from 'react';
import './user.css';

const User = () => {
  return (
    <div className="user">
      <div className="userNav">
        <NavBar />
      </div>

      <div className="userView">
        <Header />
        <div className="userInfo">
          <div className="uiPicName">
            <div className="uiPicButton">
              <img src={Images.USER_PICTURE} alt="" className="uiPicture" />
              <button className="uiButton">
                <img src={Images.CAMERA_ICON} alt="" />
              </button>
            </div>

            <h1 className="uiName">Lê Quỳnh Ái Vân</h1>
          </div>
          <div className="uiForm">
            <div className="uiInput">
              Tên người dùng
              <input type="text" placeholder="Lê Quỳnh Ái Vân" />
            </div>
            <div className="uiInput">
              Tên đăng nhập
              <input type="text" placeholder="lequynhaivan01" />
            </div>
            <div className="uiInput">
              Số điện thoại
              <input type="text" placeholder="0767375921" />
            </div>
            <div className="uiInput">
              Mật khẩu
              <input type="text" placeholder="311940211" />
            </div>
            <div className="uiInput">
              Email:
              <input type="text" placeholder="adminSSO1@domain.com" />
            </div>
            <div className="uiInput">
              Vai trò:
              <input type="text" placeholder="Kế toán" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
