import Images from 'constants/images';
import './forgot.css';
import React from 'react';

const ForgotPass = () => {
  return (
    <div className="forgot">
      <div className="fForm">
        <img src={Images.LOGO} alt="" className="fLogo" />
        <div className="fInput">
          <h2 className="fTitle">Đặt lại mật khẩu</h2>
          <p className="fText">Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
          <input type="text" />
        </div>

        <div className="fButton">
          <button className="fCancel">Hủy</button>
          <button className="fContinue">Tiếp tục</button>
        </div>
      </div>
      <div className="fBanner">
        <img src={Images.BANNER02} alt="" />
      </div>
    </div>
  );
};

export default ForgotPass;
