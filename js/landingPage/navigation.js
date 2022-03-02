import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {ItemsAll} from "./shop/itemsAll";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => prev = !isOpen);
    const menuClass = ` dropdown-menu${isOpen ? "-show" : ""}`;
    return (
        <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <Link to="/" className="navbar-brand"><img src="../../img/logo.png" alt="logo"
                                                                   className="mx-2 bg-light"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"> <span
                            className="navbar-toggler-icon"> </span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><Link to="" className="nav-link active" aria-current="page"
                                                               href="#">Strona główna</Link></li>
                                <li className="nav-item mx-4"><Link to="" className="nav-link">O nas</Link></li>
                                <li className="nav-item mx-4"><Link to="" className="nav-link">Kontakt</Link></li>
                                <li className="nav-item mx-4 dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleOpen}>Sklep</a>
                                    <ul className={` bg-light position-absolute ${menuClass} `}
                                        aria-labelledby="navbarDropdown">
                                        <li><Link to="/shop/itemsAll" className="dropdown-item">Wszystkie
                                            produkty</Link></li>
                                        <li><a className="dropdown-item">Popularne</a></li>
                                        <li><a className="dropdown-item ">Nowości</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item mx-4"><a className="nav-link">Zarejestruj się</a></li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="submit">
                                    <i className="bi-cart-fill me-1"> </i>
                                    Koszyk
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>

        </>
    )
}
export {Navigation};


