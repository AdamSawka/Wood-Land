import React from 'react'
import Carousel from 'react-bootstrap/cjs/Carousel'
import img1 from "../img/deer1.jpg"
import img2 from "../img/deers2.jpg"
import img3 from "../img/deers3.jpg"
import img4 from "../img/cutdesk1.jpg"
 const Carousel1 = () =>
 {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block h-25"
                        src={img1}
                        alt="deer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block h-25"
                        src={img2}
                        alt="deer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block h-25"
                        src={img3}
                        alt="deer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block h-25"
                        src={img4}
                        alt="deer"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export {Carousel1};