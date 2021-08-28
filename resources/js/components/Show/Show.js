import React, { useState, useEffect } from 'react';
import ShowName from './ShowName';
import ShowImage from './ShowImage';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

//cssスタイル（全体）
const useStyles = makeStyles({
    centre: {
        height: '75vh',
        margin: '50px 100px',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        textAlign: 'right',
    },
})


export default function Show(){
    const classes = useStyles();
    
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    let num =  window.location.pathname;
    
    useEffect(() => {
        axios.get('/categories/json' + num).then(res => {
            setCategory(res.data);
        });
    },[]);
    
    
    useEffect(() =>{
        axios.get('/displays/json/' + num).then(res => {
            setData(res.data);
        });
    }, []);
   return(
       <div className={classes.centre}>
          <ShowName className={classes.text} title={data}/>
          <ShowImage src={data}/>
          <a href="" style={{ marginTop: 30 }}>Genre: {category.name}</a>
       </div>
   );
    
}