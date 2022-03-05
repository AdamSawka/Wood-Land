import './App.css';
import db from 'firebase';
import React,{useState,useEffect} from 'react';

function GetData() {
    const [data,setData]=useState([])
    const fetchData=async()=>{
        const response=db.collection('Blogs');
        const elements=await response.get();
        elements.docs.forEach(item=>{
            setData([...elements,item.data()])
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="App">
            {
                data && data.map(blog=>{
                    return(
                        <h1></h1>
                    )
                })
            }
        </div>
    );
}

export default GetData;