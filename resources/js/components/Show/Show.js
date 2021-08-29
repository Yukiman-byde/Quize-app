import React, { useState, useEffect } from 'react';
import ShowComponent from './ShowComponent';
import ShowName from './ShowName';
import ShowImage from './ShowImage';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

//cssスタイル（全体）
const useStyles = makeStyles({
    centre: {
        marginRight: 'auto',
        marginLeft: 'auto',
        alignItems: 'center',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
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
          <ShowName title={data}/>
          <ShowImage className={classes.img} src={data}/>
          <a href="">Genre: {category.name}</a>
          <ShowComponent className={classes.button}/>
       </div>
   );
    
}