import Images from 'constants/images';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <img src={Images.LOGO} alt="" className="navLogo" />
      <div className="navOption">
        <NavLink
          className={(navData) => (navData.isActive ? 'navOptionItem active' : 'navOptionItem')}
          to="/"
        >
          <img src={Images.DASHBOARD_ICON} alt="" />
          <p className="navText">Dashboard</p>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'navOptionItem active' : 'navOptionItem')}
          to="/"
        >
          <img src={Images.MONITOR_ICON} alt="" />
          <p className="navText">Thiết bị</p>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'navOptionItem active' : 'navOptionItem')}
          to="/"
        >
          <img src={Images.SERVICE_ICON} alt="" />
          <p className="navText">Dịch vụ</p>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'navOptionItem active' : 'navOptionItem')}
          to="/"
        >
          <img src={Images.LAYER_ICON} alt="" />
          <p className="navText">Cấp số</p>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'navOptionItem active' : 'navOptionItem')}
          to="/"
        >
          <img src={Images.REPORT_ICON} alt="" />
          <p className="navText">Báo cáo</p>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'navOptionItem active' : 'navOptionItem')}
          to="/"
        >
          <img src={Images.SETTING_ICON} alt="" />
          <p className="navText">Cài đặt hệ thống</p>
          <img src={Images.MORE_ICON} alt="" />
        </NavLink>
      </div>
      <div className="navButton">
        <img src={Images.LOGOUT_ICON} alt="" />
        <button>Đăng xuất</button>
      </div>
    </div>
  );
};

export default NavBar;
