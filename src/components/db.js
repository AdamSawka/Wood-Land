import pillow1 from "../img/pillow1.jpg";
import wall1 from "../img/wall1.jpg";
import deers2 from "../img/deers2.jpg";
import wall2 from "../img/wall2.jpg";
import deer1 from "../img/deer1.jpg";
import tshirt1 from "../img/t-shirt1.jpg";
import tshirt2 from "../img/t-shirt2.jpg";
import draw1 from "../img/draw1.jpg";
import deers4 from "../img/deers4.jpg";
import deers3 from "../img/deers3.jpg";

const products = [
    {
        id: 1,
        name: 'Poduszka',
        type: 'pillow',
        price: 20,
        img: pillow1,
        popular: true,
        new:true

    }, {
        id: 2,
        name: 'Ozdoba ścienna',
        type: 'decoration',
        price: 60,
        img: wall1,
        popular: true,
        new:true


    }, {
        id: 3,
        name: 'Ozdoba ścienna',
        type: 'decoration',
        price: 60,
        img: wall2,
        new:true

    }, {
        id: 4,
        name: 'Ozdoba ścienna',
        type: 'decoration',
        price: 60,
        img: deers2,
        popular: true,
        new:false

    }, {
        id: 5,
        name: 'Ozdoba ścienna',
        type: 'decoration',
        price: 60,
        img: deers3,
        popular: true,
        new:false

    }, {
        id: 6,
        name: 'Ozdoba ścienna',
        type: 'decoration',
        price: 60,
        img: deers4,
        popular: false,
        new:false

    }, {
        id: 7,
        name: 'Koszulka',
        type: 'shirt',
        price: 80,
        img: tshirt1,
        popular: false,
        new:true
    },{
        id: 8,
        name: 'Koszulka',
        type: 'shirt',
        price: 80,
        img: tshirt2,
        popular: false,
        new: true
    },{
        id: 9,
        name: 'Plakat',
        type: 'poster',
        price: 30,
        img: draw1,
        popular: false,
        new:false
    },{
        id: 10,
        name: 'Podstawka',
        type: 'stand',
        price: 30,
        img: deer1,
        popular: false,
        new:false
    },

]
export {products}
