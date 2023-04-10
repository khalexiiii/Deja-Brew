import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function AboutUs() {
  return (
    <div className="about-us">     
        <Breadcrumb>
          <div className="container">
            <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active >About</Breadcrumb.Item>
          </div>
        </Breadcrumb>
    </div>
  )
}
