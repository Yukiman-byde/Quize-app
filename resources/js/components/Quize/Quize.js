import React, { useState, useEffect } from 'react';
import LaQuestion from './LaQuestion.js';
import ButtonAction from './ButtonAction.js';
import Progress from './Progress.js'
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    all: {
        display : 'flex',
    },
    left: {
        flex: '0.5',
    },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  root: {
      '& > *': {
      margin: theme.spacing(5),
    },
  },
    procedure: {
     '& > *': {
     margin: theme.spacing(6)
    },
  },
  right: {
      flex: '0.5',
  }
}));

export default function Quize() {
    const [data, setData] = useState([]);
    const [button, setButton] = useState(true);
    const handleClose =()=>{
        setButton(false);
    }
    const buttonProcedure =()=>{
        setButton(true);
    }
    let num = window.location.pathname;
    let nombre = num.match(/\d+/);

//pathnameから特定の数字だけを抜き出してURIに追加。
   useEffect(() =>{
        axios.get('/displays/json/' + nombre).then(res => {
            setData(res.data);
        });
    }, []);
  
            const classes = useStyles();
        
    return (
    <div className={classes.all}>
        <div className={classes.left}>
         <Backdrop className={classes.backdrop} open={button} onClick={handleClose}>
            <Progress />
          </Backdrop>
          <div className={classes.root}>
                <h1>{data.name}</h1>
                <iframe width="560" height="315" src={data.video} 
                 >
                 </iframe>
          </div>
             <div className={classes.procedure}>
                 <ButtonAction
                 buttonProcedure={buttonProcedure}/>
             </div>
        </div>
        <div className={classes.right}>
            <LaQuestion />
        </div>
    </div>
        );
}