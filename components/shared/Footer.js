import React from 'react';
import Link from 'next/link'
const Footer= () => {
    return (
        <div>
            <div className="hk-footer-wrap container">
                <footer className="footer">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <p>Pampered by<a href="https://hencework.com/" className="text-dark" target="_blank">Hencework</a> © 2019</p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="d-inline-block">Follow us</p>
                            <a href="#" className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span className="btn-icon-wrap"><i className="fa fa-facebook"></i></span></a>
                            <a href="#" className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span className="btn-icon-wrap"><i className="fa fa-twitter"></i></span></a>
                            <a href="#" className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span className="btn-icon-wrap"><i className="fa fa-google-plus"></i></span></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer