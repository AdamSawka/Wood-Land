import React from "react";
import {Carousel1} from "./Carousel/Carousel";
import {Contact} from "./Contact/Contact";
import {AboutUs} from "./AboutUs/AboutUs";
import {Link} from "react-router-dom";
import deers4 from "../../assets/deers4.jpg"
import image from "../../assets/image3.jpg"

const MainPage = () => {
    return (
        <>
            <div className='pt-5'>
            <header className="  py-5 text-center shadow-2-strong rounded  header-mainPage ">
                    <div className=" d-flex justify-content-center  header-text">
                        <h1 className="display-6 d-block fw-bolder text-light"> Twoje dekoracje w zgodzie z naturą </h1>
                    </div>
            </header>
                <section className=" py-5 bg-light">
        <Carousel1/>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img  alt='deer' className="card-img-top" src={deers4}
                                    />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Popularne produkty</h5>

                                        PLN 40.00 - PLN 80.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to="/popular" className="btn btn-outline-dark mt-auto" >Więcej </Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <div className="badge bg-dark text-white position-absolute"
                                     >Nowość
                                </div>

                                <img alt='deer'  className="card-img-top" src={image}
                                    />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Nowa kolekcja</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                        </div>

                                        <span className="text-muted text-decoration-line-through">PLN 220.00</span>
                                         PLN 180.00
                                    </div>
                                </div>

                                <div className="card-footer ">
                                    <div className="text-center"><Link to="/news" className="btn btn-outline-dark mt-auto" >Sprawdź</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <AboutUs/>
            <Contact/>

        </>

    )
}
export {MainPage};