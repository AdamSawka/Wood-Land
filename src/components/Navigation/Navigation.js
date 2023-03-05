import React from "react";
import {Link} from "react-router-dom"
import logo from '../../assets/logo.png'
import {Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

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
                            <Nav.Link className="nav-link active" aria-current="page"> <Link className='text-reset' to='/main' >Strona główna</Link></Nav.Link>
                            <Nav.Link className="nav-item mx-4 d-lg-block"><Link className='text-reset' to='/about' >O nas</Link></Nav.Link>
                            <NavDropdown title="Sklep" id="basic-nav-dropdown" className="nav-item mx-4 d-lg-block">
                                <NavDropdown.Item> <Link className='text-reset' to='/itemsAll' >Wszystkie produkty</Link></NavDropdown.Item>
                                <NavDropdown.Item> <Link className='text-reset' to='/popular' >Popularne</Link></NavDropdown.Item>
                                <NavDropdown.Item> <Link className='text-reset' to='/news' >Nowości</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-item mx-4 d-lg-block"><Link className='text-reset' to='/login' >Logowanie/Rejestracja</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <i className="fa fa-shopping-basket mx-2" aria-hidden="true"/>
                    <Button className="btn btn-light btn-outline-dark px-3 nav-button" > <Link className='text-reset' to='/basket' >Koszyk {items.length}</Link> </Button>
                </Container>
            </Navbar>

        </>
    )
}
export {Navigation};


