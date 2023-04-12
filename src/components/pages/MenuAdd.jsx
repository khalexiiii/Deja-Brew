import React, { useState } from "react";
import { Navbar, Nav, Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../MenuSub.css";
import AddonBanner from "../../images/AddonSlide.png";
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';


const MenuAdd = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Navbar expand="md" variant="light" bg="light" className="my-navbar">
                <div id="basic-navbar-nav">
                    <Nav className="mx-auto d-flex justify-content-center flex-grow-1 flex-row">
                        <Nav.Link as={Link} to="/Deja-Brew/Coffee">Coffee</Nav.Link>
                        <Nav.Link as={Link} to="/Deja-Brew/Desserts">Desserts</Nav.Link>
                        <Nav.Link as={Link} to="/Deja-Brew/Add-ons">Addons</Nav.Link>
                    </Nav>
                </div>
            </Navbar>

            <div className="banner">
                <div className="banner-img" style={{ backgroundImage: `url(${AddonBanner})`, backgroundSize: "cover", backgroundPosition: "center center" }}></div>
                <div className="banner-text">
                    <h3 className="text-center" style={{ color: "#c69155" }}>Add-ons</h3>
                    <p className="text-center" style={{ color: "#c69155" }}>"If the saying "we are what we eat" is true, I must be impressively sweet."</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MenuAdd;