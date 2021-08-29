import React,{ useState, useEffect } from 'react';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    choice: {
        paddingTop: '30px',
        margin: 0,
    }
})

export default function LaQuestion(){
    const classes = useStyles();
    const[quize, setQuize] = useState([]);
    useEffect(() =>{
        let num = window.location.pathname;
        let nombre = num.match(/\d+/);
        axios.get('quize/json/' + nombre).then(res =>{
            setQuize(res.data);
        });
    }, []);
    return(
        <div className={classes.choice}>
       <h1>Choose a correct answer</h1>
       <p>{quize.question}</p>
        </div>
        );
}