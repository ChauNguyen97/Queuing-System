import Images from 'constants/images';
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="headerTitle">Thông tin cá nhân</h1>
      <div className="headerTool">
        <div className="headerNotion">
          <img src={Images.NOTION_ICON} alt="" className="headerIcon" />
        </div>
        <img src={Images.USER_PICTURE} alt="" className="headerImage" />

        <div className="headerInfo">
          <p className="headerText">Xin chào</p>
          <h2 className="headerName">Lê Quỳnh Ái Vân</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
