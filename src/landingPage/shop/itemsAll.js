import React from "react";
import {Item} from "./item";

const ItemsAll = () => {

    return <>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <Item name={'Poduszka'} img={'pillow1.jpg'} price={20} id={1}/>
                <Item name={'Ozdoba ścienna'} img={'wall1.jpg'} price={60} id={2}/>
                <Item name={'Ozdoba ścienna'} img={'deers2.jpg'} price={60} id={3}/>
                <Item name={'Ozdoba ścienna'} img={'wall2.jpg'} price={60} id={4}/>
                <Item name={'Podstawka'} img={'deer1.jpg'} price={15} id={5}/>
                <Item name={'Koszulka'} img={'t-shirt1.jpg'} price={80} id={6}/>
                <Item name={'Koszulka'} img={'t-shirt2.jpg'} price={80} id={7}/>
                <Item name={'Plakat'} img={'draw1.jpg'} price={20} id={8}/>
                <Item name={'Ozdoba scienna'} img={'deers4.jpg'} price={60} id={9}/>
                <Item name={'Ozdoba scienna'} img={'deers3.jpg'} price={60} id={10}/>
                </div>
            </>
            }
            export {ItemsAll};