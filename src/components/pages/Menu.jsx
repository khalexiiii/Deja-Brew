import React, { useState } from "react";
import { Navbar, Nav, Carousel, Card, Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Menu.css";
import CoffeeSlide from "../../images/CoffeeSlide.png";
import DessertSlide from "../../images/DessertSlide.png";
import AddonSlide from "../../images/AddonSlide.png";
import CappCard from "../../images/CappCard.png";
import CheeseCard from "../../images/CheeseCard.png";
import ApplepieCard from "../../images/ApplepieCard.png";
import IcedCard from "../../images/IcedCard.png";
import FrapCard from "../../images/FrapCard.png";
import "../Greeting";
import Greeting from "../Greeting";
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';




const Menu = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Breadcrumb>
        <div className="container">
          <div className="category-page-title">Menu</div>
          <Breadcrumb.Item href="/Deja-Brew/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active >Menu</Breadcrumb.Item>
        </div>
      </Breadcrumb>
    
      <Navbar expand="md" variant="light" bg="light" className="my-navbar">
        <div id="basic-navbar-nav">
          <Nav className="mx-auto d-flex justify-content-center flex-grow-1 flex-row">
            <Nav.Link as={Link} to="/Deja-Brew/Coffee">Coffee</Nav.Link>
            <Nav.Link as={Link} to="/Deja-Brew/Desserts">Desserts</Nav.Link>
            <Nav.Link as={Link} to="/Deja-Brew/Add-ons">Addons</Nav.Link>
          </Nav>
        </div>
      </Navbar>

      <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} className="my-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CoffeeSlide}
            alt="Coffee"
            style={{ objectFit: "cover", height: "400px" }}
          />
          <Carousel.Caption className="text-center">
            <h3 style={{ color: "#c69155" }}>Coffee</h3>
            <p style={{ color: "#c69155" }}>Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={DessertSlide}
            alt="Second slide"
            style={{ objectFit: "cover", height: "400px" }}
          />
          <Carousel.Caption className="text-center">
            <h3 style={{ color: "#B30000" }}>Desserts</h3>
            <p style={{ color: "#B30000" }}>Desserts can be defined as a usually sweeter course that concludes a meal.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={AddonSlide}
            alt="Third slide"
            style={{ objectFit: "cover", height: "400px" }}
          />
          <Carousel.Caption className="text-center">
            <h3>Addons</h3>
            <p>
              Things to put in your dessert and coffee to make them extra delicious!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Greeting />

      <h6>Welcome to Deja Brew! Look at our best sellers!</h6>
      <div className="card-group custom-card-group">
        <Card style={{ width: "18rem", border: "2px solid black", borderRadius: "5px" }}>
          <Card.Img variant="top" src={CappCard} style={{ height: "300px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Cappucino</Card.Title>
            <Card.Text>Price</Card.Text>
            <div className="text-center">
              <Link to="/Deja-Brew/Coffee" className="btn btn-dark">Go to Coffee</Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "2px solid black", borderRadius: "5px" }}>
          <Card.Img variant="top" src={CheeseCard} style={{ height: "300px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Cheese Cake</Card.Title>
            <Card.Text>Price</Card.Text>
            <div className="text-center">
              <Link to="/Deja-Brew/Desserts" className="btn btn-dark">Go to Desserts</Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "2px solid black", borderRadius: "5px" }}>
          <Card.Img variant="top" src={ApplepieCard} style={{ height: "300px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Apple Pie</Card.Title>
            <Card.Text>Price</Card.Text>
            <div className="text-center">
              <Link to="/Deja-Brew/Desserts" className="btn btn-dark">Go to Desserts</Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "2px solid black", borderRadius: "5px" }}>
          <Card.Img variant="top" src={IcedCard} style={{ height: "300px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Cold Brew</Card.Title>
            <Card.Text>Price</Card.Text>
            <div className="text-center">
              <Link to="/Deja-Brew/Coffee" className="btn btn-dark">Go to Coffee</Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "2px solid black", borderRadius: "5px" }}>
          <Card.Img variant="top" src={FrapCard} style={{ height: "300px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Frappucino</Card.Title>
            <Card.Text>Price</Card.Text>
            <div className="text-center">
              <Link to="/Deja-Brew/Coffee" className="btn btn-dark">Go to Coffee</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer />


    </>

  );
};

export default Menu;