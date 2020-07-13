import React from 'react';
import Link from 'next/link'
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'
const IndexPage= () => {
    return (
        <div className="IndexPage__container hk-wrapper hk-vertical-nav">
            <div className="preloader-it">
                <div className="loader-pendulums"></div>
            </div>
            <NavBar/>

            <div className="hk-settings-panel">
                <div className="nicescroll-bar position-relative">
                    <div className="settings-panel-wrap">
                        <div className="settings-panel-head">
                            <img className="brand-img d-inline-block align-top" src="/img/logo-light.png" alt="brand" />
                            <a href="javascript:void(0);" id="settings_panel_close" className="settings-panel-close">
                                <span className="feather-icon">
                                    <i data-feather="x"></i>
                                </span>
                            </a>
                        </div>
                        <hr/>
                        <h6 className="mb-5">Layout</h6>
                        <p className="font-14">Choose your preferred layout</p>
                        <div className="layout-img-wrap">
                        <div className="row">
                            <a href="javascript:void(0);" className="col-6 mb-30 active">
                                <img className="rounded opacity-70" src="/img/layout1.png" alt="layout"/>
                                <i className="zmdi zmdi-check"></i>
                            </a>
                            <a href="dashboard2.html" className="col-6 mb-30">
                                <img className="rounded opacity-70" src="/img/layout2.png" alt="layout"/>
                                <i className="zmdi zmdi-check"></i>
                            </a>
                            <a href="dashboard3.html" className="col-6">
                                <img className="rounded opacity-70" src="/img/layout3.png" alt="layout"/>
                                <i className="zmdi zmdi-check"></i>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <h6 className="mb-5">Navigation</h6>
                    <p className="font-14">Menu comes in two modes: dark & light</p>
                    <div className="button-list hk-nav-select mb-10">
                        <button type="button" id="nav_light_select" className="btn btn-outline-light btn-sm btn-wth-icon icon-wthot-bg"><span className="icon-label"><i className="fa fa-sun-o"></i> </span><span className="btn-text">Light Mode</span></button>
                        <button type="button" id="nav_dark_select" className="btn btn-outline-primary btn-sm btn-wth-icon icon-wthot-bg"><span className="icon-label"><i className="fa fa-moon-o"></i> </span><span className="btn-text">Dark Mode</span></button>
                    </div>
                    <hr/>
                    <h6 className="mb-5">Top Nav</h6>
                    <p className="font-14">Choose your liked color mode</p>
                    <div className="button-list hk-navbar-select mb-10">
                        <button type="button" id="navtop_light_select" className="btn btn-outline-primary btn-sm btn-wth-icon icon-wthot-bg"><span className="icon-label"><i className="fa fa-sun-o"></i> </span><span className="btn-text">Light Mode</span></button>
                        <button type="button" id="navtop_dark_select" className="btn btn-outline-light btn-sm btn-wth-icon icon-wthot-bg"><span className="icon-label"><i className="fa fa-moon-o"></i> </span><span className="btn-text">Dark Mode</span></button>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>Scrollable Header</h6>
                        <div className="toggle toggle-sm toggle-simple toggle-light toggle-bg-primary scroll-nav-switch"></div>
                    </div>
                    <button id="reset_settings" className="btn btn-primary btn-block btn-reset mt-30">Reset</button>
                </div>
            </div>
            <img className="d-none" src="/img/logo-light.png" alt="brand" />
            <img className="d-none" src="/img/logo-dark.png" alt="brand" />
        </div>

        <div className="hk-pg-wrapper">
            <div className="container mt-xl-50 mt-sm-30 mt-15">
                <div className="row">
					<div className="col-xl-12">
                        <section className="hk-sec-wrapper">
                            <h5 className="hk-sec-title">Introduction</h5>
                            <p>Pinkman is a Bootstrap 4.1.X & Sass based solid core framework that works well for all screen sizes and modern browsers.  HTML5 validated clean code is focused - keeping it simple and orderly. With Pinkman's UI components library, you can actually get more time on building stuff, rather than editing pixel ances. 

							Pinkman - HTML template and Admin UI kit can be used for any type of web application: CRM, Project Management, Statistics, Analytics or any custom admin dashboard.

							This documentation will guide you through installing the template and exploring the various components that are bundled with the template.</p>
						</section>
						<section className="hk-sec-wrapper">
                            <h5 className="hk-sec-title">File Structure</h5>
							<pre className="bg-violet-light-5 pt-25">
							HTML
							  ├── 
							  │   └── 
							  │     └── css
							  │     └── fonts
							  │     └── img
							  │     └── js
							  │   └── src
							  │     └──scss
							  │    	  └── colors.scss
							  │    	  └── mixins.scss
							  │    	  └── navbar.scss
							  │    	  └── style.scss
							  │   └── vendors
							  │       └── All Required plugins files
							  │   └── All Html Pages
							  │   └── .jshintrc
							  │   └── Gruntfile.js
							  │   └── package.json
							  │   └── package-lock.json
							  └── 
							</pre>							  
						</section>
						<section className="hk-sec-wrapper">
                            <h5 className="hk-sec-title">Installation (Install Node.js,Grunt)</h5>
							<p className="mb-20">Use of these tools are completely optional.</p>
									<ul className="list-ul mt-20 mb-20 pl-15">
										<li className="mb-10 txt-dark">Node.js and NPM. You can download Node.js from here <a href="https://nodejs.org." target="_blank">https://nodejs.org.</a> Npm comes bundled with Node.js</li>
										<li className="mb-10 txt-dark">Next you need to install bower.</li>
										<li className="txt-dark" >At last install grunt using <code>npm install -g grunt-cli</code> and <code>npm install grunt --save-dev</code></li>
									</ul>
									<p>After installing all the required frameworks, components and dependencies, go to the root folder of and run the following commands from the command line:</p>
									<ul className="list-ul mt-20 mb-20 pl-15">
										<li className="mb-10 txt-dark">npm install</li>
										<li className="mb-10 txt-dark">grunt </li>
										<li className="txt-dark" >grunt</li>
									</ul>
									<p>If everything was installed correctly, you should see the jQuery version of Pinkman running in <strong>http://localhost:9000/</strong></p>
									<br/>
									<p><strong>Above all procedures are optional you can directly use the compiled file which we provided you.</strong></p>
						</section>
						<section className="hk-sec-wrapper">
                            <h5 className="hk-sec-title">Menu Style</h5>
							<p className="mb-20">For vertical navigation you have to first add <code>hk-vertical-nav</code> className with <code>hk-wrapper</code>.</p>
							<p className="mb-20">For Horizontal navigation you have to first add <code>hk-horizontal-nav</code> className with <code>hk-wrapper</code>.</p>
							<p className="mb-20">For vertical alt navigation you have to first add <code>hk-alt-nav</code> className with <code>hk-wrapper</code>.</p>
							<p className="mb-20">For this menu style you have to add <code>hk-navbar-alt</code> className with <code>navbar</code></p>
							<p className="mb-20">For light & dark menu you can add <code>hk-nav-light</code> or <code>hk-nav-dark</code> with <code>hk-nav</code> className.</p>
							<p className="">For Scrollable Navigation please add <code>scrollable-nav</code> className with <code>hk-wrapper</code>.</p>
						</section>
					</div>
				</div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default IndexPage