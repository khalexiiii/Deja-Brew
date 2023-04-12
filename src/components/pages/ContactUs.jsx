import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Footer} from '../../components/Footer';

export default function ContactUs() {
  return (
  <div>
    <div className="contact-us">
      <Breadcrumb>
        <div className="container">
          <div className="category-page-title">Contact Us</div>
          <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active >Contact Us</Breadcrumb.Item>
        </div>
      </Breadcrumb>
      <div className="container about-us-content">
        <div id="content-wrapper">
          <div id="main">
            <header className="page-header page-header-title-wrapper">
              <h1 className="page-header-title">Contact Us</h1>
            </header>            
            <div id="content" className="page-content page-cms page-cms-4 sub-pages-inner-content">
              <h3>Need any more help? Please feel free to contact one of the Deja Brewers today, they just love talking all things coffee!</h3>
              <br />
              <h3>You can send us a message via:</h3>
              <br />
              <p>E-mail: inquiries@dejabrew.com.ph</p>
              <br />
              <p>You can send us a message via Facebook: facebook.com/dejabrewphilippines</p>
              <br />
              <p>Twitter: twitter.com/dejabrewph</p>
              <br />
              <p>Twitter: instagram.com/dejabrewph</p>
              <br />
              <h3>Opening Hours:</h3>
              <br />
              <p>Monday - Friday: 9AM -5PM</p>
              <br />
              <p>Saturday: Closed</p>
              <br />
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}
