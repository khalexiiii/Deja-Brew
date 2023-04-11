import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Footer} from '../../components/Footer'

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
      <div className="container contact-us-content"></div>  
    </div>
    <Footer />
  </div>
  );
}
