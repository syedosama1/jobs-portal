import React from "react";
import "../styles/header.css";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <nav>
        <div className="navbar container">
          <div className="nav-left">
            <div className="nav-img">
              <a href="/">
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <div className="nav-search">
              <AiOutlineSearch />
              <input
                type="text"
                placeholder="Search Opportunities"
              />
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-tabs">
              <div className="learn-tab">
                <a href="/courses">
                  <span className="tab-icon"></span>
                  <span className="tab-name">learn</span>
                </a>
              </div>
              <div className="practice-tab">
                <a href="/practice">
                  <span className="tab-icon"></span>
                  <span className="tab-name">practice</span>
                </a>
              </div>
              <div className="compete-tab">
                <a href="/compete">
                  <span className="tab-icon"></span>
                  <span className="tab-name">compete</span>
                </a>
              </div>
              <div className="mentorship-tab">
                <a href="/mentor">
                  <span className="tab-icon"></span>
                  <span className="tab-name">mentorship</span>
                </a>
              </div>
              <div className="jobs-tab">
                <a href="/job-portal">
                  <span className="tab-icon"></span>
                  <span className="tab-name">jobs</span>
                </a>
              </div>
            </div>
            <div className="nav-btns">
              <button className="btn host-btn">
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
                  alt="host btn"
                />
                <span className="tab-name">Host</span>
              </button>
              <button className="for-business-btn">
                {/* Add your button content here */}
                <span>For Business</span>
              </button>
              <button className="btn login-btn">
                <span>Login</span>
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg"
                  alt="host btn"
                />
              </button>
              <button className="menu-btn">
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/hamburger_icon.svg"
                  alt="menu"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
