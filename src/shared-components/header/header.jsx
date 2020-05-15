import React, { useState, useEffect } from 'react';

import './header.scss';
import logo from 'src/common/assets/images/icons/n_square.svg';

const Header = () => {
    return (
        <div>
            <div className="bg-white border-bottom fixed-top">
                <div className="col-sm-12 col-lg12 col-md-12 header-block">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            {/* side bar */}

                            <span className="logo">
                                <a id="nielsen-logo" className="navbar-brand" href="/"> <img src={logo} alt="logo" /></a>
                            </span>
                            <span className="title">Nielsen React-redux boilerplate</span>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="form-inline mt-2 mt-md-0 user-block  pull-right">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        {/* <NavLink id="logged_in_user_account" className="nav-link" to={'/asdasd'}>
                                            <i className="fa fa-user-circle-o"></i> abc@nielsen.com <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </NavLink> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;


