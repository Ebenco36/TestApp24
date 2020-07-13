import React from 'react';
import Link from 'next/link'
const NavBar= () => {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-dark fixed-top hk-navbar">

            <a id="navbar_toggle_btn" className="navbar-toggle-btn nav-link-hover" href="javascript:void(0);">
                <i className="ion ion-ios-menu"></i>
            </a>
            <a className="navbar-brand" href="dashboard1.html">
                <img className="brand-img d-inline-block" src="/img/logo-dark.png" alt="brand" />
            </a>

            <ul className="navbar-nav hk-navbar-content">
                <li className="nav-item">
                    <a id="navbar_search_btn" className="nav-link nav-link-hover" href="javascript:void(0);"><i className="ion ion-ios-search"></i></a>
                </li>
                <li className="nav-item">
                    <a id="settings_toggle_btn" className="nav-link nav-link-hover" href="javascript:void(0);"><i className="ion ion-ios-settings"></i></a>
                </li>
                <li className="nav-item dropdown dropdown-notifications">
                    <a className="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ion ion-ios-notifications"></i>
                        <span className="badge-wrap">
                            <span className="badge badge-primary badge-indicator badge-indicator-sm badge-pill pulse"></span>
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <h6 className="dropdown-header">Notifications <a href="" className="">View all</a></h6>
                        <div className="notifications-nicescroll-bar">
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <img src="/img/avatar1.jpg" alt="user" className="avatar-img rounded-circle"/>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text"><span className="text-dark text-capitalize">Evie Ono</span> accepted your invitation to join the team</div>
                                            <div className="notifications-time">12m</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <img src="/img/avatar2.jpg" alt="user" className="avatar-img rounded-circle"/>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text">New message received from <span className="text-dark text-capitalize">Misuko Heid</span></div>
                                            <div className="notifications-time">1h</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <span className="avatar-text avatar-text-primary rounded-circle">
													<span className="initial-wrap"><span><i className="zmdi zmdi-account font-18"></i></span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text">You have a follow up with<span className="text-dark text-capitalize"> Pinkman head</span> on <span className="text-dark text-capitalize">friday, dec 19</span> at <span className="text-dark">10.00 am</span></div>
                                            <div className="notifications-time">2d</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <span className="avatar-text avatar-text-success rounded-circle">
													<span className="initial-wrap"><span>A</span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text">Application of <span className="text-dark text-capitalize">Sarah Williams</span> is waiting for your approval</div>
                                            <div className="notifications-time">1w</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <span className="avatar-text avatar-text-warning rounded-circle">
													<span className="initial-wrap"><span><i className="zmdi zmdi-notifications font-18"></i></span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text">Last 2 days left for the project</div>
                                            <div className="notifications-time">15d</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown dropdown-authentication">
                    <a className="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media">
                            <div className="media-img-wrap">
                                <div className="avatar">
                                    <img src="/img/avatar12.jpg" alt="user" className="avatar-img rounded-circle"/>
                                </div>
                                <span className="badge badge-success badge-indicator"></span>
                            </div>
                            <div className="media-body">
                                <span>Madelyn Shane<i className="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                        <a className="dropdown-item" href="profile.html"><i className="dropdown-icon zmdi zmdi-account"></i><span>Profile</span></a>
                        <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-card"></i><span>My balance</span></a>
                        <a className="dropdown-item" href="inbox.html"><i className="dropdown-icon zmdi zmdi-email"></i><span>Inbox</span></a>
                        <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-settings"></i><span>Settings</span></a>
                        <div className="dropdown-divider"></div>
                        <div className="sub-dropdown-menu show-on-hover">
                            <a href="#" className="dropdown-toggle dropdown-item no-caret"><i className="zmdi zmdi-check text-success"></i>Online</a>
                            <div className="dropdown-menu open-left-side">
                                <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-check text-success"></i><span>Online</span></a>
                                <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-circle-o text-warning"></i><span>Busy</span></a>
                                <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-minus-circle-outline text-danger"></i><span>Offline</span></a>
                            </div>
                        </div>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-power"></i><span>Log out</span></a>
                    </div>
                </li>
            </ul>
        </nav>
        <form role="search" className="navbar-search">
            <div className="position-relative">
                <a href="javascript:void(0);" className="navbar-search-icon">
                    <i className="ion ion-ios-search"></i>
                </a>
                <input type="text" name="example-input1-group2" className="form-control" placeholder="Type here to Search"/>
                <a id="navbar_search_close" className="navbar-search-close" href="#"><i className="ion ion-ios-close"></i></a>
            </div>
        </form>
        

        <nav className="hk-nav hk-nav-light">
            <a href="javascript:void(0);" id="hk_nav_close" className="hk-nav-close"><span className="feather-icon"><i data-feather="x"></i></span></a>
            <div className="nicescroll-bar">
                <div className="navbar-nav-wrap">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp">
                                <i className="ion ion-ios-keypad"></i>
                                <span className="nav-link-text">Dashboard</span>
                            </a>
                            <ul id="dash_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="dashboard1.html">CRM</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="dashboard2.html">Project</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="dashboard3.html">Statistics</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-with-badge" href="javascript:void(0);" data-toggle="collapse" data-target="#app_drp">
                                <i className="ion ion-ios-apps"></i>
                                <span className="nav-link-text">Application</span>
                                <span className="badge badge-primary badge-pill">4</span>
                            </a>
                            <ul id="app_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="chats.html">Chat</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="calendar.html">Calendar</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="email.html">Email</a>
                                        </li>
										<li className="nav-item">
                                            <a className="nav-link" href="file-manager.html">File Manager</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#auth_drp">
                                <i className="ion ion-ios-person-add"></i>
                                <span className="nav-link-text">Authentication</span>
                            </a>
                            <ul id="auth_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#signup_drp">
													Sign Up
												</a>
                                            <ul id="signup_drp" className="nav flex-column collapse collapse-level-2">
                                                <li className="nav-item">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="signup.html">Cover</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="signup-simple.html">Simple</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#signin_drp">
													Login
												</a>
                                            <ul id="signin_drp" className="nav flex-column collapse collapse-level-2">
                                                <li className="nav-item">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="login.html">Cover</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="login-simple.html">Simple</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#recover_drp">
													Recover Password
												</a>
                                            <ul id="recover_drp" className="nav flex-column collapse collapse-level-2">
                                                <li className="nav-item">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="forgot-password.html">Forgot Password</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="reset-password.html">Reset Password</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="lock-screen.html">Lock Screen</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="404.html">Error 404</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="maintenance.html">Maintenance</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#pages_drp">
                                <i className="ion ion-ios-copy"></i>
								<span className="nav-link-text">Pages</span>
                            </a>
                            <ul id="pages_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="profile.html">Profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="invoice.html">Invoice</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="gallery.html">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="activity.html">Activity</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="faq.html">Faq</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="nav-separator"/>
                    <div className="nav-header">
                        <span>User Interface</span>
                        <span>UI</span>
                    </div>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#Components_drp">
                                <i className="ion ion-ios-wallet"></i>
                                <span className="nav-link-text">Components</span>
                            </a>
                            <ul id="Components_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="alerts.html">Alerts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="avatar.html">Avatar</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="badge.html">Badge</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="buttons.html">Buttons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="cards.html">Cards</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="carousel.html">Carousel</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="collapse.html">Collapse</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="dropdowns.html">Dropdown</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="list-group.html">List Group</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="modal.html">Modal</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="nav.html">Nav</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="navbar.html">Navbar</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="nestable.html">Nestable</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pagination.html">Pagination</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="popovers.html">Popovers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="progress.html">Progress</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="tooltip.html">Tooltip</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#content_drp">
                                <i className="ion ion-ios-filing"></i>
                                <span className="nav-link-text">Content</span>
                            </a>
                            <ul id="content_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="typography.html">Typography</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="images.html">Images</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="media-object.html">Media Object</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#utilities_drp">
                                <i className="ion ion-ios-construct"></i>
                                <span className="nav-link-text">Utilities</span>
                            </a>
                            <ul id="utilities_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="background.html">Background</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="border.html">Border</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="colors.html">Colors</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="embeds.html">Embeds</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="icons.html">Icons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="shadow.html">Shadow</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="sizing.html">Sizing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="spacing.html">Spacing</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#forms_drp">
                                <i className="ion ion-ios-list-box"></i>
                                <span className="nav-link-text">Forms</span>
                            </a>
                            <ul id="forms_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="form-element.html">Form Elements</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="input-groups.html">Input Groups</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="form-layout.html">Form Layout</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="form-mask.html">Form Mask</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="form-validation.html">Form Validation</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="form-wizard.html">Form Wizard</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="file-upload.html">File Upload</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="editor.html">Editor</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#tables_drp">
                                <i className="ion ion-ios-today"></i>
                                <span className="nav-link-text">Tables</span>
                            </a>
                            <ul id="tables_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="basic-table.html">Basic Table</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="data-table.html">Data Table</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="responsive-table.html">Responsive Table</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="editable-table.html">Editable Table</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#charts_drp">
                                <i className="ion ion-ios-stats"></i>
                                <span className="nav-link-text">Charts</span>
                            </a>
                            <ul id="charts_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="line-charts.html">Line Chart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="area-charts.html">Area Chart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="bar-charts.html">Bar Chart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pie-charts.html">Pie Chart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="realtime-charts.html">Realtime Chart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="mini-charts.html">Mini Chart</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#maps_drp">
                                <i className="ion ion-ios-map"></i>
                                <span className="nav-link-text">Maps</span>
                            </a>
                            <ul id="maps_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="google-map.html">Google Map</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="vector-map.html">Vector Map</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="nav-separator"/>
                    <div className="nav-header">
                        <span>Getting Started</span>
                        <span>GS</span>
                    </div>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item active">
                            <a className="nav-link" href="documentation.html">
                                <i className="ion ion-ios-book"></i>
                                <span className="nav-link-text">Documentation</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="hk_nav_backdrop" className="hk-nav-backdrop"></div>

        </div>
    )
}

export default NavBar