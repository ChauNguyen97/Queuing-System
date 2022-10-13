import Images from 'constants/images';
import './reset.css';
import React from 'react';

const ResetPass = () => {
  return (
    <div className="reset">
      <div className="rForm">
        <img src={Images.LOGO} alt="" className="rLogo" />
        <div className="rContainer">
          <h2 className="rTitle">Đặt lại mật khẩu mới</h2>
          <div className="rInput">
            Mật khẩu
            <div className="rPassword">
              <input type="password" placeholder="Password" />
              <img src={Images.EYE_ICON} alt="" />
            </div>
          </div>
          <div className="rInput">
            Nhập lại mật khẩu
            <div className="rPassword">
              <input type="password" placeholder="Password" />
              <img src={Images.EYE_ICON} alt="" />
            </div>
          </div>
          <div className="rButton">
            <button>Xác nhận</button>
          </div>
        </div>
      </div>
      <div className="rBanner">
        <img src={Images.BANNER02} alt="" />
      </div>
    </div>
  );
};

export default ResetPass;
