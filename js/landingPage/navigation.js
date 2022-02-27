import React, {useState} from "react";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
     const toggleOpen = () => setIsOpen( (prev) => prev = !isOpen );
    const menuClass = `dropdown-menu${isOpen ? "-show" : ""}`;
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                     <a className="navbar-brand" href="../../index.html"><img src="../../img/logo.png" alt="logo" className="mx-2 bg-light"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"> <span
                        className="navbar-toggler-icon"> </span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page"
                                                        href="#">Strona główna</a></li>
                            <li className="nav-item mx-4"><a className="nav-link" href="#">O nas</a></li>
                            <li className="nav-item mx-4"><a className="nav-link" href="#">Kontakt</a></li>
                            <li className="nav-item mx-4 dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleOpen}>Sklep</a>
                                <ul className={menuClass}  aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Wszystkie produkty</a></li>
                                    <li><a className="dropdown-item" href="#">Popularne</a></li>
                                    <li><a className="dropdown-item" href="#">Nowości</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item mx-4"><a className="nav-link" href="#">Zarejestruj się</a></li>
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


