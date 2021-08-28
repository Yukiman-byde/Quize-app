import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//ボタンの色や大きさなど具体的な実装
//ThemeProviderなどを使ってもっとカスタマイズできるようになったら面白いかも！
//liner-gradientのところは特定のページからカスタマイズ
//オススメ　https://cssgradient.io/
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      marginLeft: 300,
      padding: '15px',
      whiteSpace: 'noWrap',
      background: 'linear-gradient(60deg, rgba(9,119,121,1) 3%, rgba(0,161,255,1) 52%)',
      color: '#fff',
    },
  },
  　layout: {
　    textAlign: 'center',
  　}
}));


export default function ShowComponent(){
    let num = window.location.pathname;
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("quize").setAttribute("href", document.getElementById("quize").getAttribute("href") + num + "/quize");
    }, false);
    
    const classes = useStyles();
    
    return(
        <div className={classes.layout}>
            <div className={classes.root}>
               <Button variant="outlined" color="primary" href="/display" id="quize">
                Are You Ready ?
               </Button>
            </div>
             <div className={classes.root}>
               <Button variant="outlined" color="primary" href="/" id="quize">
                Back To Home
               </Button>
            </div>
        </div>
        );
}