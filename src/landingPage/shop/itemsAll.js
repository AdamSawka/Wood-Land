import React from "react";
import {Item} from "./item";
import wall1 from "../../img/wall1.jpg";
import wall2 from "../../img/wall2.jpg";
import deers2 from "../../img/deers2.jpg";
import deers3 from "../../img/deers3.jpg";
import deers4 from "../../img/deers4.jpg";
import draw1 from "../../img/draw1.jpg";
import pillow1 from "../../img/pillow1.jpg";
import tshirt1 from "../../img/t-shirt1.jpg";
import tshirt2 from "../../img/t-shirt2.jpg";
import deer1 from "../../img/deer1.jpg";
const ItemsAll = () => {

    return <>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center">
                <Item name={'Poduszka'} img={pillow1} price={20} id={1}/>
                <Item name={'Ozdoba ścienna'} img={wall1} price={60} id={2}/>
                <Item name={'Ozdoba ścienna'} img={deers2} price={60} id={3}/>
                <Item name={'Ozdoba ścienna'} img={wall2} price={60} id={4}/>
                <Item name={'Podstawka'} img={deer1} price={15} id={5}/>
                <Item name={'Koszulka'} img={tshirt1} price={80} id={6}/>
                <Item name={'Koszulka'} img={tshirt2} price={80} id={7}/>
                <Item name={'Plakat'} img={draw1} price={20} id={8}/>
                <Item name={'Ozdoba scienna'} img={deers4} price={60} id={9}/>
                <Item name={'Ozdoba scienna'} img={deers3} price={60} id={10}/>
                </div>
            </>
            }
            export {ItemsAll};