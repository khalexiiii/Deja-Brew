import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function AboutUs() {
  return (
    <div className="about-us">
      <Breadcrumb>
        <div className="container">
          <div class="category-page-title">About Us</div>
          <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active >About Us</Breadcrumb.Item>
        </div>
      </Breadcrumb>
      <div className="container about-us-content"></div>  
    </div>
  )
}
