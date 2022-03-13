import React from "react";
import {Link} from "react-router-dom"
import logo from '../img/logo.png'
import {Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Baskets} from "../components/Baskets";

const Navigation = ({basket}) => {
    const items = basket
    console.log(items.length);
    return (
        <>
            <Navbar className="position-fixed top-0 w-100 navigation " bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/main" className="navbar-brand">
                            <img src={logo} alt='logo' className="mx-2 bg-light"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/main" className="nav-link active" aria-current="page">Strona główna</Nav.Link>
                            <Nav.Link className="nav-item mx-4 d-lg-block" href="/about">O nas</Nav.Link>
                            <NavDropdown title="Sklep" id="basic-nav-dropdown" className="nav-item mx-4 d-lg-block">
                                <NavDropdown.Item href="/itemsAll">Wszystkie produkty</NavDropdown.Item>
                                <NavDropdown.Item href="/popular">Popularne</NavDropdown.Item>
                                <NavDropdown.Item href="/news">Nowości</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/login" className="nav-item mx-4 d-lg-block">Logowanie/Rejestracja</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <i className="fa fa-shopping-basket mx-2" aria-hidden="true"/>
                    <Button href="/basket"  className="btn btn-light btn-outline-dark px-3 nav-button" >Koszyk {items.length} </Button>
                </Container>
            </Navbar>

        </>
    )
}
export {Navigation};


