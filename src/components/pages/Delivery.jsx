import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Footer} from '../Footer';

export default function Delivery() {
  return (
  <div>
    <div className="about-us">
      <Breadcrumb>
        <div className="container">
          <div className="category-page-title">Delivery</div>
          <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active >Delivery</Breadcrumb.Item>
        </div>
      </Breadcrumb>
      <div className="container about-us-content">
        <div id="content-wrapper">
          <div id="main">
            <header className="page-header page-header-title-wrapper">
              <h1 className="page-header-title">Delivery</h1>
            </header>            
            <div id="content" className="page-content page-cms page-cms-4 sub-pages-inner-content">
              <h2>Shipments and returns</h2>
              <h3>Your pack shipment</h3>
              <p>Packages are generally dispatched within 2 days after receipt of payment and are shipped via UPS with tracking and drop-off without signature. If you prefer delivery by UPS Extra with required signature, an additional cost will be applied, so please contact us before choosing this method. Whichever shipment choice you make, we will provide you with a link to track your package online.</p>
              <p>Shipping fees include handling and packing fees as well as postage costs. Handling fees are fixed, whereas transport fees vary according to total weight of the shipment. We advise you to group your items in one order. We cannot group two distinct orders placed separately, and shipping fees will apply to each of them. Your package will be dispatched at your own risk, but special care is taken to protect fragile objects. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div> 
  );
}
