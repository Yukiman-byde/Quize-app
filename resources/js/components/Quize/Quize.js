import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import LaQuestion from './LaQuestion.js';
import ButtonAction from './ButtonAction.js';
import Procedure from './Procedure.js'
import Tip from './Tip.js';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Transcription from './Transcription.js';

const useStyles = makeStyles((theme) => ({
    all: {
        display : 'flex',
        background: '#C2EEFF',
    },
    left: {
        flex: '0.5',
        marginTop: 150,
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
  right: {
      flex: '0.5',
  }
}));

export default function Quize() {
    const [data, setData] = useState([]);
    const [button, setButton] = useState(false);
    const [tip, setTip] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [array, setArray] = useState([]);
    let value = 0;

    const handleClose =()=>{
        setButton(false);
    }
    
    const tipClose =()=>{
        setTip(false);
    };
    
    const buttonProcedure =()=>{
        setButton(true);
    };
    
    const buttonTips = ()=>{
        setTip(true);
    };
    
    const nextStep =(e)=>{
      if(array.includes(e.target.name)){
         return
      } else {
         //array.push(e.target.name);
         //setActiveStep(activeStep.push(e.target.name))
         setArray[array.push(e.target.name)]
         setActiveStep((i) => i + 1)
      }
    };
    
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
        <div>
         <Header
         nextStep={nextStep}
         activeStep={activeStep}
         />
            <div className={classes.all}>
                <div className={classes.left}>
                     <Backdrop className={classes.backdrop} open={button} onClick={handleClose}>
                        <Procedure />
                      </Backdrop>
                      <Backdrop className={classes.backdrop} open={tip} onClick={tipClose}>
                        <Tip />
                      </Backdrop>
                      <div className={classes.root}>
                            <h1>{data.name}</h1>
                            <iframe width="700" height="415" src={data.video} 
                             >
                             </iframe>
                             <div className={classes.transcription}>
                      　          <Transcription />
                            　</div>
                             <div>
                                 <ButtonAction
                                 buttonProcedure={buttonProcedure}
                                 buttonTips={buttonTips}/>
                             </div>
                      </div>　
                </div>
                <div className={classes.right}>
                    <LaQuestion 
                    nextStep={nextStep}
                    activeStep={activeStep}
                    />
                </div>
            </div>
        </div>
        );
}