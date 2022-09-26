import React from "react";
import Image from './CoreCard.png'
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Image} alt="corecard" className="logo-img"/>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink style={{textDecoration:'none'}}
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <span style={{color:'aliceblue'}}>{item.icon}</span>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span>
            <i class="ri-logout-circle-r-line"></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
