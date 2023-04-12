import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Footer } from '../Footer'

export default function LogIn() {
  return (
    <div>
      <div className="about-us">
        <Breadcrumb>
          <div className="container">
            <div className="category-page-title">Log In To Your Account</div>
            <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          </div>
        </Breadcrumb>
        <div className="container about-us-content">
          <div id="content-wrapper">
            <div id="main">
              <header className="page-header page-header-title-wrapper">
                <h1 className="page-header-title">Log In To Your Account</h1>
              </header>
              <div id="content" className="page-content card card-block">
                <div className="login-form">
                  <form id="login-form" action="" method="post">
                    <div>
                      <input type="hidden" name="back" value="identity"></input>
                      <div className="form-group row ">
                        <label className="col-md-3 form-control-label required">Email</label>
                        <div className="col-md-6">
                          <input className="form-control" name="email" type="email" value="" required=""></input>
                        </div>
                        <div className="col-md-3 form-control-comment"></div>
                      </div>
                      <div className="form-group row ">
                        <label className="col-md-3 form-control-label required">Password</label>
                        <div className="col-md-6">
                          <div className="input-group js-parent-focus">
                            <input className="form-control js-child-focus js-visible-password" name="password" type="password" value="" pattern=".{5,}" required=""></input>
                            <span className="input-group-btn">
                              <button className="btn" type="button" data-action="show-password" data-text-show="Show" data-text-hide="Hide">Show</button>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-3 form-control-comment"></div>
                      </div>
                      <div className="forgot-password">
                        <a href="" rel="nofollow">Forgot your password?</a>
                      </div>
                    </div>
                    <footer className="form-footer text-sm-center clearfix">
                      <input type="hidden" name="submitLogin" value="1"></input>
                      <button id="submit-login" className="btn btn-primary form-control-submit" data-link-action="sign-in" type="submit">Sign in</button>
                    </footer>
                  </form>
                </div>
                <hr />
                <div className="no-account">
                  <a href="" data-link-action="display-register-form">No account? Create one here</a>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>  
      <Footer />
    </div>
  );
}
