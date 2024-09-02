import React from 'react';
import { Link , useLocation } from 'react-router-dom';

const Navbar = () => {
    const currentLocation = useLocation();

  return (

<div className="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true">
    <div className="main-menu-content">
        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li className={currentLocation.pathname === '/' ? 'active nav-item' : 'nav-item'}><Link to="/"><i className="ft-home"></i><span className="menu-title" data-i18n="nav.dash.main">Dashboard</span></Link></li>
            <li className={currentLocation.pathname === '/list-employees' ? 'active nav-item' : 'nav-item'}><Link to="list-employees"><i className="ft-user"></i><span className="menu-title" data-i18n="nav.dash.main">List of Employees</span></Link></li>
            <li className={currentLocation.pathname === '/add-employees' ? 'active nav-item' : 'nav-item'}><Link to="add-employees"><i className="ft-plus"></i><span className="menu-title" data-i18n="nav.templates.main">Add New Employee</span></Link> </li>
            <li className={currentLocation.pathname === '/bonus' ? 'active nav-item' : 'nav-item'}><Link to="bonus"><i className="ft-box"></i><span className="menu-title" data-i18n="nav.dash.main">Bonus</span></Link></li>
        </ul>
    </div>
</div>

);
}

export default Navbar;