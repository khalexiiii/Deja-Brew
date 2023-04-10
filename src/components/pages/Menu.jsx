import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function Menu() {
  return (
    <div className="menu">     
      <Breadcrumb>
        <div className="container">
          <div class="category-page-title">Menu</div>
          <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active >Menu</Breadcrumb.Item>
        </div>
      </Breadcrumb>
      <div className="container menu-content"></div>
    </div>
  )
}
