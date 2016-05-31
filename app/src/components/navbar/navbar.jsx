import React from 'react';
import {Link} from 'react-router';

export default () => (
    <header id="navbar" className="navbar navbar-default" role="banner">
        <div className="navbar-container" id="navbar-container">
            <button id="menu-toggler" className="three-bars pull-left menu-toggler navbar-toggle fixed" type="button">
                <span className="sr-only">Toggle sidebar</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
            </button>
            <div className="pull-left">
                <Link to="/" className="navbar-brand">
                    <small>
                        <i className="fa fa-leaf" />
                        MusicYao
                    </small>
                </Link>
            </div>
            <div className="navbar-buttons pull-right" role="navigation">
                <ul className="nav ebp-nav">
                    <li className="grey" dropdown>
                        <a className="dropdown-toggle" dropdown-toggle href="javascript:void(0)">
                            <i className="ebp-icon fa fa-tasks" />
                            <span className="badge badge-gray">4</span>
                        </a>
                        <ul className="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close" role="menu">
                            <li className="dropdown-header">
                                <i className="ebp-icon fa fa-check" />
                                4 Tasks to complete
                            </li>
                            <li className="dropdown-content ebp-scroll" style={{position: 'relative'}}>
                                <ul className="dropdown-menu dropdown-navbar">
                                    <li>
                                        <a href="#">
                                            <div className="clearfix">
                                                <span className="pull-left">Software Update</span>
                                                <span className="pull-right">65%</span>
                                            </div>

                                            <progressbar className="progress-mini" value="65">
                                            </progressbar>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="clearfix">
                                                <span className="pull-left">Hardware Upgrade</span>
                                                <span className="pull-right">35%</span>
                                            </div>

                                            <progressbar className="progress-mini" type="danger" value="35">
                                            </progressbar>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="clearfix">
                                                <span className="pull-left">Unit Testing</span>
                                                <span className="pull-right">15%</span>
                                            </div>

                                            <progressbar className="progress-mini" type="warning" value="15">
                                            </progressbar>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="clearfix">
                                                <span className="pull-left">Bug Fixes</span>
                                                <span className="pull-right">90%</span>
                                            </div>

                                            <progressbar className="progress-mini progress-striped active" type="success" value="90">
                                            </progressbar>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown-footer">
                                <a href="#">
                                    See tasks with details
                                    <i className="ebp-icon fa fa-arrow-right" />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="purple" dropdown>
                        <a className="dropdown-toggle" dropdown-toggle href="javascript:void(0)">
                            <i className="ebp-icon fa fa-bell icon-animated-bell" />
                            <span className="badge badge-important">8</span>
                        </a>
                        <ul className="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
                            <li className="dropdown-header">
                                <i className="ebp-icon fa fa-exclamation-triangle" />
                                8 Notifications
                            </li>
                            <li className="dropdown-content ebp-scroll" scroll-options="{size: 'inherit'}" style={{position: 'relative'}}>
                                <ul className="dropdown-menu dropdown-navbar navbar-pink">
                                    <li>
                                        <a href="#">
                                            <div className="clearfix">
													<span className="pull-left">
														<i className="btn btn-xs no-hover btn-pink fa fa-comment" />
														New Comments
													</span>
                                                <span className="pull-right badge badge-info">+12</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="btn btn-xs btn-primary fa fa-user" />
                                            Bob just signed up as an editor ...
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="clearfix">
													<span className="pull-left">
														<i className="btn btn-xs no-hover btn-success fa fa-shopping-cart" />
														New Orders
													</span>
                                                <span className="pull-right badge badge-success">+8</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="clearfix">
													<span className="pull-left">
														<i className="btn btn-xs no-hover btn-info fa fa-twitter" />
														Followers
													</span>
                                                <span className="pull-right badge badge-info">+11</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown-footer">
                                <a href="#">
                                    See all notifications
                                    <i className="ebp-icon fa fa-arrow-right" />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="green" dropdown>
                        <a dropdown-toggle className="dropdown-toggle" href="javascript:void(0)">
                            <i className="ebp-icon fa fa-envelope icon-animated-vertical" />
                            <span className="badge badge-success">5</span>
                        </a>
                        <ul className="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                            <li className="dropdown-header">
                                <i className="ebp-icon fa fa-envelope-o" />
                                5 Messages
                            </li>
                            <li className="dropdown-content ebp-scroll" style={{position: 'relative'}}>
                                <ul className="dropdown-menu dropdown-navbar">
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="images/avatars/avatar.png" className="msg-photo" alt="Alex's Avatar" />
                                            <span className="msg-body">
                                                <span className="msg-title">
                                                    <span className="blue">Alex:</span>
                                                    Ciao sociis natoque penatibus et auctor ...
                                                </span>

                                                <span className="msg-time">
                                                    <i className="ebp-icon fa fa-clock-o" />
                                                    <span>a moment ago</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="images/avatars/avatar3.png" className="msg-photo" alt="Susan's Avatar" />
                                            <span className="msg-body">
                                                <span className="msg-title">
                                                    <span className="blue">Susan:</span>
                                                    Vestibulum id ligula porta felis euismod ...
                                                </span>

                                                <span className="msg-time">
                                                    <i className="ebp-icon fa fa-clock-o" />
                                                    <span>20 minutes ago</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="images/avatars/avatar4.png" className="msg-photo" alt="Bob's Avatar" />
                                            <span className="msg-body">
                                                <span className="msg-title">
                                                    <span className="blue">Bob:</span>
                                                    Nullam quis risus eget urna mollis ornare ...
                                                </span>

                                                <span className="msg-time">
                                                    <i className="ebp-icon fa fa-clock-o" />
                                                    <span>3:15 pm</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="images/avatars/avatar2.png" className="msg-photo" alt="Kate's Avatar" />
                                            <span className="msg-body">
                                                <span className="msg-title">
                                                    <span className="blue">Kate:</span>
                                                    Ciao sociis natoque eget urna mollis ornare ...
                                                </span>

                                                <span className="msg-time">
                                                    <i className="ebp-icon fa fa-clock-o" />
                                                    <span>1:33 pm</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="images/avatars/avatar5.png" className="msg-photo" alt="Fred's Avatar" />
                                            <span className="msg-body">
                                                <span className="msg-title">
                                                    <span className="blue">Fred:</span>
                                                    Vestibulum id penatibus et auctor  ...
                                                </span>

                                                <span className="msg-time">
                                                    <i className="ebp-icon fa fa-clock-o" />
                                                    <span>10:09 am</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown-footer">
                                <a href="inbox.html">
                                    See all messages
                                    <i className="ebp-icon fa fa-arrow-right" />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="light-blue" dropdown>
                        <a dropdown-toggle className="dropdown-toggle" href="javascript:void(0)">
                            <img className="nav-user-photo" src="images/avatars/user.jpg" />
                            <span className="user-info">
                                <small>Welcome,</small>
                                Yao
                            </span>
                                <i className="ebp-icon fa fa-caret-down" />
                        </a>
                        <ul className="core-transition user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                            <li>
                                <a href="#">
                                    <i className="ebp-icon fa fa-cog" />
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="profile.html">
                                    <i className="ebp-icon fa fa-user" />
                                    Profile
                                </a>
                            </li>
                            <li className="divider" />
                            <li>
                                <a ui-sref="logout">
                                    <i className="ebp-icon fa fa-power-off" />
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </header>
)