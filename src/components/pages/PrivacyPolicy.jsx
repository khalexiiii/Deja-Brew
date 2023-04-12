import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Footer} from '../Footer';

export default function PrivacyPolicy() {
  return (
  <div>
    <div className="about-us">
      <Breadcrumb>
        <div className="container">
          <div className="category-page-title">Privacy Policy</div>
          <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active >Privacy Policy</Breadcrumb.Item>
        </div>
      </Breadcrumb>
      <div className="container about-us-content">
        <div id="content-wrapper">
          <div id="main">
            <header className="page-header page-header-title-wrapper">
              <h1 className="page-header-title">Privacy Policy</h1>
            </header>            
            <div id="content" className="page-content page-cms page-cms-4 sub-pages-inner-content">
              <p>To provide you with outstanding user experience, Deja Brew (“We” or “Us”) is committed to ensuring that all your information is safe and we are transparent about how we collect, store and process them in adherence to the general principles of transparency, legitimate purpose, and proportionality. We created this policy to help you understand our data protection and security measures, in compliance with Republic Act No. 10173 or the Data Privacy Act of 2012 (DPA), its Implementing Rules and Regulations, and other relevant policies, including issuances of the National Privacy Commission.</p>
              <h3>Information</h3>
              <p>We collect the following personal information when you submit general inquiries, concerns and job applications on our contact form pages found here: https://www.dejabrew.com.ph/contact-us</p>
              <br />
              <p>Personal Information we collect so we can contact you:</p>
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Contact Number</li>
              <br />
              Files we require so we can immediately process your job applications:
                <li>Curriculum Vitae</li>
              <br />
              <h3>Usage</h3>
              <p>The collected information is utilized solely to:</p>
              <br />
                <li>Respond and contact you regarding your inquiries and/or concerns</li>
                <li>Reserve slots you’ve booked for our Caring Cup Events</li>
                <li>Compile and forward your Job Applications to our Human Resources Department</li>
              <br />
              <h3>Security</h3>
              <br />
              <p>To ensure the confidentiality, integrity and security of your personal information, we strictly enforce security measures and safeguards such as:</p>
                <li>Digitally saving and storing form submissions and Job Applications in a secured server that uses strong firewall with the latest encryption technology</li>
                <li>Restricting backend access only to qualified personnel</li>
                <li>Performing regular audits and code-level scanning to ensure your data is protected around the clock</li>  
              <br />
              <h3>Storage</h3>
              <br />
              <p>Contact requests are internally forwarded only to:</p>
                <li>Store Feedback & General Suggestions : wecare@dejabrew.com.ph</li>
                <li>Interested Caring Cup Volunteers : caringcup@dejabrew.com.ph</li>
                <li>Careers : careers@dejabrew.com.ph</li>  
              <br />
              <p>For Job Applications, your curriculum vitae and resumes are digitally stored in our mailbox and secured server. We do not keep them in any other place or use them for purposes other than our own recruitment process. Hard copies may be reprinted or requested with your consent on or before your scheduled interviews, and will be securely stored for up to a maximum of five (5) years.</p>
              <br />
              <h3>Sharing</h3>
              <br />
              <p>We will never share, sell, or reproduce your information externally.</p>
              <br />
              <h3>Access</h3>
              <br />
              <p>If you wish to have access to your personal information in our records, or you think that such personal information we have of you is incomplete, not up-to-date, or otherwise inaccurate, you may get in touch with us via wecare@dejabrew.com.ph</p>
              <br />
              <h3>More Information</h3>
              <br />
              <p>If you have more questions or inquiries with regards to this policy,  or have any concerns related to the Data Privacy Act of 2012, feel free to contact us through one of the following:</p>
              <br />
              <p>Email: wecare@dejabrew.com.ph</p>
              <p>By visiting this link: https://www.dejabrew.com.ph/contact-us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div> 
  );
}
