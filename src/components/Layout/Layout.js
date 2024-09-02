// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import "../../assets/assets/css/style.css";
import "../../assets/app-assets/css/vendors.css";
import "../../assets/app-assets/css/app.css";
import "../../assets/app-assets/css/core/menu/menu-types/vertical-menu.css";
import "../../assets/app-assets/css/core/colors/palette-gradient.css";

// import "../../assets/app-assets/vendors/js/vendors.min.js";
// import "../../assets/app-assets/js/core/app-menu.js";
// import "../../assets/app-assets/js/core/app.js";


const Layout = ({ children }) => {
  return (
    <body className="vertical-layout vertical-menu 2-columns   menu-expanded fixed-navbar" data-open="click" data-menu="vertical-menu" data-col="2-columns">
        <Header/>
          <main >
            <div className="app-content content">
                {children}
            </div>
          </main>
        <Footer/>
    </body>
  );
}

export default Layout;