import React from 'react';
import '../../App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Footer} from '../../components/Footer';
import OurTeam from '../../images/our-team.jpg'

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
                      <strong className="dark">Deja Brew offers a unique coffee house environment. We are not only a place to drop in and get your morning cup of coffee, we are a place where you can sit down and enjoy that tailor-made cup of coffee. </strong>
                    </p>
                    <p>If you need to work, we have a seating area created specifically for you. If you need to rest, we have a soft-seating area in front of a stone fire place that is perfect for your weary mind and body. We offer a delicious variety of coffee made by our professionally trained baristas. We have everything from classic coffee to our house made specialty beverages.  All of our sauces & syrups are made in-house with all natural ingredients ensuring you the highest quality in taste & health. </p>
                    <p>You can complete your coffee with one of our delicious sweet treats made by our very own baker. We look forward to serving you at Deja Brew</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="cms-box">
                    <h3 className="page-subheading">Our team</h3>
                    <img title="cms-img" src={OurTeam} alt="cms-img" width="370" height="250"></img>
                    <p><strong className="dark">Lorem set sint occaecat cupidatat non </strong></p>
                    <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="cms-box">
                    <h3 className="page-subheading">Testimonials</h3>
                    <div className="testimonials">
                      <div className="inner">
                        <span className="before">“</span>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimI received this coffee for the first time through a coffee subscription, but after trying this coffee my world changed lol....I just kept putting this one back on my list. As much as I love trying new coffees, this is my absolute favorite, you can't go wrong with it. I particularly don't enjoy the super fruity coffees, so this is exactly my kind of coffee. I love the chocolaty/ nutty taste, it smells absolutely wonderful. LOVE IT!<span className="after">”</span>
                      </div>
                    </div>
                    <p><strong className="dark">~Klare Ty</strong></p>
                    <div className="testimonials">
                      <div className="inner">
                        <span className="before">“</span>I’ve been on a coffee search for the last 6 months. Over that time I have tried about 20 different Dark Roast coffees from across the U.S. From New York to San Francisco and Wisconsin to Florida. Diesel Dark Roast stands above all of them. I never realized how different regions like their coffees, maybe I’m an East coast person at heart. Any way I love this coffee.<span className="after">”</span>
                      </div>
                    </div>
                  <p><strong className="dark">~Harvey Specter</strong></p>
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
