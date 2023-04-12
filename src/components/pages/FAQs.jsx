import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Footer} from '../Footer';

export default function FAQs() {
  return (
  <div>
    <div className="about-us">
      <Breadcrumb>
        <div className="container">
          <div className="category-page-title">Frequently Asked Questions</div>
          <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active >FAQs</Breadcrumb.Item>
        </div>
      </Breadcrumb>
      <div className="container about-us-content">
        <div id="content-wrapper">
          <div id="main">
            <header className="page-header page-header-title-wrapper">
              <h1 className="page-header-title">Frequently Asked Questions</h1>
            </header>            
            <div id="content" className="page-content page-cms page-cms-4 sub-pages-inner-content">
              <h3>I would like to apply as a Team Member. Where can I send my resume?</h3>
              <br />
              <p>You can send your resume to careers@dejabrew.com.ph</p>
              <br />
              <h3>Where can I check the available positions?</h3>
              <br />
              <p>You may go to https://www.dejabrew.com.ph/our-story/careers/ for a list of our openings</p>
              <br />
              <h3>I have a proposal. Where can I send it?</h3>
              <br />
              <p>Please send your proposals to inquiries@dejabrew.com.ph</p>
              <br />
              <h3>Do you have part-time work?</h3>
              <br />
              <p>As of the moment, we do not have any opening for part-time work.</p>
              <br />
              <h3>Where is your store located?</h3>
              <br />
              <p>You can view the full list of our stores by visiting https://www.dejabrew.com.ph/store-locator/</p>
              <br />
              <h3>I have an inquiry, concern or feedback. Who should I contact?</h3>
              <br />
              <p>You can send us a message via:</p>
              <p>E-mail: inquiries@dejabrew.com.ph</p>
              <p>You can send us a message via Facebook: facebook.com/dejabrewphilippines</p>
              <p>Twitter: twitter.com/dejabrewph</p>
              <p>Twitter: instagram.com/dejabrewph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div> 
  );
}
