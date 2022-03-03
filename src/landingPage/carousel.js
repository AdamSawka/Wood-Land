import React from 'react';
import Carousel from 'react-bootstrap/cjs/Carousel';

 const Carousel1 = () =>
 {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block h-25"
                        src="../img/deer1.jpg"
                        alt="deer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block h-25"
                        src="../img/deers2.jpg"
                        alt="deer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block h-25"
                        src="../img/deers3.jpg"
                        alt="deer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block h-25"
                        src="../img/cutdesk1.jpg"
                        alt="deer"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export {Carousel1};