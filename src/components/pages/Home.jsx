import React from 'react';
import '../../App.css';
import Carousel from 'react-bootstrap/Carousel'
import hero1 from '../../images/hero1.png'
import hero2 from '../../images/hero2.png'
import hero3 from '../../images/hero3.png'
import hero4 from '../../images/hero4.png'
import { Footer } from '../../components/Footer';

export default function Home() {
  return (
    <div>
        <Carousel  interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={hero1}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={hero2}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={hero3}
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={hero4}
                  alt="Fourth slide"
                />

              </Carousel.Item>

        </Carousel>
        <Footer />
    </div>
 
  );
}
