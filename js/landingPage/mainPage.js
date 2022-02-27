import React from "react";
import {Footer} from "./footer";
import {Carousel1} from "./carousel";
import * as url from "url";

const MainPage = () => {
    return (
        <>
            <header className=" bg-image py-5 text-center shadow-2-strong rounded mb-5 text-white header-mainPage">

                <div className="container px-4 px-lg-5 my-5 mainPage-opacity">
                    <div className="text-center text-white">
                        <h1 className="display-6 fw-bolder"> Twoje dekoracje w zgodzie z naturą </h1>
                    </div>
                </div>
            </header>
        <Carousel1/>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="../../img/deer1.jpg"
                                     alt="..."/>

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Popularne produkty</h5>

                                        PLN 40.00 - PLN 80.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Więcej </a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <div className="badge bg-dark text-white position-absolute"
                                     >Wyprzedaż
                                </div>

                                <img className="card-img-top" src="../../img/draw1.jpg"
                                     alt="..."/>

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Okolicznościowe</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                        </div>

                                        <span className="text-muted text-decoration-line-through">PLN 20.00</span>
                                         PLN 18.00
                                    </div>
                                </div>

                                <div className="card-footer ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Dodaj do koszyka</a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>

    )
}
export {MainPage};