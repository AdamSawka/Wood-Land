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
import image from "../img/image.jpg"
import image1 from "../img/image1.jpg"
import image2 from "../img/image2.jpg"
import image3 from "../img/image3.jpg"
import image4 from "../img/image4.jpg"

const products = [
    {
        img: pillow1,
    }, {
        id: 2,
        img: wall1,

    }, {
        id: 3,
        img: wall2,
    }, {
        id: 4,
        name: 'Ozdoba ścienna',
        type: 'decoration',
        price: 60,
        img: deers2,
        popular: true,
        isNew:false

    }, {
        id: 5,
        name: 'Ozdoba ścienna',
        type: 'decoration',
        price: 60,
        img: deers3,
        popular: true,
        isNew:false

    }, {
        id: 6,
        name: 'Ozdoba ścienna',
        type: 'decoration',
        price: 60,
        img: deers4,
        popular: false,
        isNew:false

    }, {
        id: 7,
        name: 'Koszulka',
        type: 'shirt',
        price: 80,
        img: tshirt1,
        popular: false,
        isNew:true
    },{
        id: 8,
        name: 'Koszulka',
        type: 'shirt',
        price: 80,
        img: tshirt2,
        popular: false,
        isNew: true
    },{
        id: 9,
        name: 'Plakat',
        type: 'poster',
        price: 30,
        img: draw1,
        popular: false,
        isNew:false
    },{
        id: 10,
        name: 'Podstawka',
        type: 'stand',
        price: 30,
        img: deer1,
        popular: false,
        isNew:false
    },{
        id: 11,
        name: 'Obraz',
        type: 'image',
        price: 130,
        img: image,
        popular: true,
        isNew:true
    },{
        id: 12,
        name: 'Obraz',
        type: 'image',
        price: 320,
        img: image1,
        popular: true,
        isNew:true
    },{
        id: 13,
        name: 'Obraz',
        type: 'image',
        price: 130,
        img: image2,
        popular: true,
        isNew:true
    },{
        id: 14,
        name: 'Obraz',
        type: 'image',
        price: 180,
        img: image3,
        popular: true,
        isNew:true
    },{
        id: 15,
        name: 'Obraz',
        type: 'image',
        price: 250,
        img: image4,
        popular: true,
        isNew:true
    },

]
export {products}
