import React, { useState } from "react";
import { Navbar, Nav, Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../MenuSub.css";
import { Link } from 'react-router-dom';
import http from '../../utils/Bev.js';
import http2 from '../../utils/BevC.js';
import axios from "axios";
import CoffeeBanner from '../../images/CoffeeSlide.png'
import { useEffect } from "react";


const MenuCoff = () => {
    const [index, setIndex] = useState(0);
    const [CCoffee, setCCoffee] = useState([]);
    const [HCoffee, setHCoffee] = useState([]);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios.request(http).then(function (response) {
            setHCoffee(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        axios.request(http2).then(function (response) {
            setCCoffee(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


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
                <div className="banner-img" style={{ backgroundImage: `url(${CoffeeBanner})`, backgroundSize: "cover", backgroundPosition: "center center" }}></div>
                <div className="banner-text">
                    <h3 className="text-center" style={{ color: "#c69155" }}>Coffee</h3>
                    <p className="text-center" style={{ color: "#c69155" }}>"Drinking a cup of coffee with your eyes closed isn't a sophisticated task for a person, but it's hard for a robot."
                        <br />~Vijjay Kumar</p>
                </div>
            </div>



            <Carousel activeIndex={index} onSelect={handleSelect} style={{ maxHeight: "1500px", maxWidth: "1500px", margin: "0 auto" }}>
                {CCoffee.some(item => item.image) && (
                    <Carousel.Item>
                        <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {CCoffee.map(item => (
                                item.image && (
                                    <div className="col-lg-3 col-md-6 col-sm-12" key={item.id} style={{ margin: "5px 0", maxWidth: "15rem" }}>
                                        <Card style={{ width: "100%", height: "100%", border: "2px solid black", borderRadius: "5px", margin: "5px", padding: "10px" }}>
                                            <Card.Img variant="top" src={item.image} style={{ height: "200px", objectFit: "cover" }} />
                                            <Card.Body style={{ padding: "0" }}>
                                                <Card.Title style={{ fontSize: "1.2rem", margin: "5px 0" }}>{item.title}</Card.Title>
                                                <Card.Text style={{ fontSize: "1rem", margin: "5px 0" }}>price</Card.Text>
                                                <Button variant="dark" style={{ fontSize: "1rem" }}>Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            ))}
                        </div>
                    </Carousel.Item>
                )}
                {HCoffee.some(item => item.image) && (
                    <Carousel.Item>
                        <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {HCoffee.map(item => (
                                item.image && (
                                    <div className="col-lg-3 col-md-6 col-sm-12" key={item.id} style={{ margin: "5px 0", maxWidth: "15rem" }}>
                                        <Card style={{ width: "100%", height: "100%", border: "2px solid black", borderRadius: "5px", margin: "5px", padding: "10px" }}>
                                            <Card.Img variant="top" src={item.image} style={{ height: "200px", objectFit: "cover" }} />
                                            <Card.Body style={{ padding: "0" }}>
                                                <Card.Title style={{ fontSize: "1.2rem", margin: "5px 0" }}>{item.title}</Card.Title>
                                                <Card.Text style={{ fontSize: "1rem", margin: "5px 0" }}>price</Card.Text>
                                                <Button variant="dark" style={{ fontSize: "1rem" }}>Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            ))}
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>

        </>
    );
};

export default MenuCoff;