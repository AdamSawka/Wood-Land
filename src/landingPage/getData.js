import './App.css';
import db from 'firebase';
import React,{useEffect} from 'react';
import config from "../firebase";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs} from '/firebase/firestore/lite';

function GetData() {

    useEffect(async ()=>{
        const app = initializeApp(config);
        const db = getFirestore(app);
        const userCollection = collection(db,"articles");
        const users = await getDocs(userCollection)

        users.docs.forEach((doc) => {
            console.log(doc);
        })},[])
}

export default GetData;