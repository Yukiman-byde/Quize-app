import React,{ useState, useEffect } from 'react';
import axios from 'axios';


export default function Category(){
    const[ category, setCategory ] = useState([]);
    let shadow = window.location.pathname;
    console.log(shadow);
    useEffect(() =>{
        axios.get('/categories/taggin/' + num).then(res=>{
            console.log(res.data);
        });
    },[]);
    return(
        <h1>category component</h1>
        );
}