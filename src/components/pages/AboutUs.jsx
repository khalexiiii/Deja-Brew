import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Footer} from '../../components/Footer';

export default function AboutUs() {
  return (
  <div>
    <div className="about-us">
      <Breadcrumb>
        <div className="container">
          <div className="category-page-title">About Us</div>
          <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active >About Us</Breadcrumb.Item>
        </div>
      </Breadcrumb>
      <div className="container about-us-content">
        <div id="content-wrapper">
          <div id="main">
            <header className="page-header page-header-title-wrapper">
              <h1 className="page-header-title">About Us</h1>
            </header>
            <div id="content" className="page-content page-cms page-cms-4 sub-pages-inner-content">
              <h1 className="page-heading bottom-indent">About us</h1>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="cms-block">
                    <h3 className="page-subheading">Our company</h3>
                    <p>
                      <strong className="dark">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</strong>
                    </p>
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.</p>
                    <ul className="list-1">
                      <li><em className="icon-ok"></em>Top quality products</li>
                      <li><em className="icon-ok"></em>Best customer service</li>
                      <li><em className="icon-ok"></em>30-days money back guarantee</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="cms-box">
                    <h3 className="page-subheading">Our team</h3>
                    <img title="cms-img" src="" alt="cms-img" width="370" height="192"></img>
                    <p><strong className="dark">Lorem set sint occaecat cupidatat non </strong></p>
                    <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="cms-box">
                    <h3 className="page-subheading">Testimonials</h3>
                    <div className="testimonials">
                      <div className="inner">
                        <span className="before">“</span>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.<span className="after">”</span>
                      </div>
                    </div>
                    <p><strong className="dark">Lorem ipsum dolor sit</strong></p>
                    <div className="testimonials">
                      <div className="inner">
                        <span className="before">“</span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.<span className="after">”</span>
                      </div>
                    </div>
                    <p><strong className="dark">Ipsum dolor sit</strong></p>
                  </div>
                </div>
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
