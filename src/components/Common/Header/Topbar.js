import React from 'react';

const Topbar = () => {
  return (

<nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light bg-info navbar-shadow">
<div className="navbar-wrapper">
  <div className="navbar-header">
    <ul className="nav navbar-nav flex-row">
      <li className="nav-item mobile-menu d-md-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ft-menu font-large-1"></i></a></li>
      <li className="nav-item">
        <a className="navbar-brand" href="#">
          <img className="brand-logo" alt="modern admin logo" src="../../../app-assets/images/logo/logo.png"/>
          <h3 className="brand-text">NASCO Employees</h3>
        </a>
      </li>
      <li className="nav-item d-md-none">
        <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="la la-ellipsis-v"></i></a>
      </li>
    </ul>
  </div>
  <div className="navbar-container content">
    <div className="collapse navbar-collapse" id="navbar-mobile">
      <ul className="nav navbar-nav mr-auto float-left">
      </ul>
      <ul className="nav navbar-nav float-right">
        <li className="dropdown dropdown-user nav-item">
          <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
            <span className="mr-1">Mr,
              <span className="user-name text-bold-700">Wissam AL HAJJ</span>
            </span>
            <span className="avatar avatar-online">
              <img src="../../../app-assets/images/logo/person.png" alt="avatar"/><i></i></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="#"><i className="ft-user"></i> Edit Profile</a>
            <a className="dropdown-item" href="#"><i className="ft-mail"></i> My Inbox</a>
            <a className="dropdown-item" href="#"><i className="ft-check-square"></i> Task</a>
            <a className="dropdown-item" href="#"><i className="ft-message-square"></i> Chats</a>
            <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="ft-power"></i> Logout</a>
          </div>
        </li>
        <li className="dropdown dropdown-language nav-item"><a className="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-gb"></i><span className="selected-language"></span></a>
          <div className="dropdown-menu" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="#"><i className="flag-icon flag-icon-gb"></i> English</a>
          </div>
        </li>

      </ul>
    </div>
  </div>
</div>
</nav>

);
}

export default Topbar;