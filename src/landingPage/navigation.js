import React from "react";
import {Link} from "react-router-dom"
import logo from '../img/logo.png'
import {Button, Navbar, Container, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import {Offcanvas} from "bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt='logo' className="mx-2 bg-light"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="nav-link active" aria-current="page">Strona główna</Nav.Link>
                            <Nav.Link className="nav-item mx-4 d-lg-block" href="/about">O nas</Nav.Link>
                            <NavDropdown title="Sklep" id="basic-nav-dropdown" className="nav-item mx-4 d-lg-block">
                                <NavDropdown.Item href="/itemsAll">Wszystkie produkty</NavDropdown.Item>
                                <NavDropdown.Item href="/popular">Popularne</NavDropdown.Item>
                                <NavDropdown.Item href="/news">Nowości</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/login" className="nav-item mx-4 d-lg-block">Logowanie/Rejestracja</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button className="btn btn-outline-dark px-3 nav-button" type="submit">
                        <i className="bi-cart-fill me-1"> </i>
                        Koszyk
                        <span className="badge bg-dark text-white ms-1 rounded-pill mx-2">0</span>
                    </Button>
                </Container>
            </Navbar>

        </>
    )
}
export {Navigation};


