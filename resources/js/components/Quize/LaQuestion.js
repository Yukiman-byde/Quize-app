import React,{ useState, useEffect } from 'react';
import QuizeForm from './QuizeForm.js';
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
    
    
    return(
             <div className={classes.choice}>
               <h1>Choose a correct answer</h1>
               <QuizeForm />
             </div> 
        );
}