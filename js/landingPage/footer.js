import React from "react";
import {MDBFooter} from 'mdbreact';

const Footer = () => {
    return <>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Sprawdź nas również na:</span>
                </div>
                <div>
                    <a href='' className='me-4 text-reset'>
                        <i className='fa fa-facebook-official'> </i>
                    </a>

                    <a href='' className='me-4 text-reset'>
                        <i className='fa fa-google'> </i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fa fa-instagram'> </i>
                    </a>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Produkty</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Ozdoby ścienne
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Poduszki
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Kubki
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Koszulki
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Przydatne linki</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Sklep
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Twój koszyk
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Promocje
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Reklamacje
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Kontakt</h6>
                            <p>
                                <i className='fa fa-home me-3'> </i> 33-370 Muszyna
                            </p>
                            <p>
                                <i className='fa fa-envelope me-3'> </i>
                                woodland@store.com
                            </p>
                            <p>
                                <i className='fa fa-phone me-3'> </i> + 01 234 567 88
                            </p>
                            <p>
                                <i className='fa fa-print me-3'> </i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='#'>
                     Wood-Land
                </a>
            </div>
        </MDBFooter>
    </>
}
export {Footer};
