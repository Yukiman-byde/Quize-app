import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    text: {
        borderBottom: '3px solid #D9E5FF',
        marginTop: '50px'
    }
})

export default function QuizeForm({ quize }){
    const classes = useStyles();
    const [value, setValue] = useState();
    const[question, setQuestion] = useState([]);
    const [ answer, setAnswer ] = useState([]);
    
    const handleChange =(event)=>{
         setValue(event.target.value);
    }
    
     const checkAnswer = (e) => {
        for(let i =0; i< 3; i++){
            console.log(e)
        }
     }
    
     let num = window.location.pathname;
     let nombre = num.match(/\d+/);
     
    useEffect(() =>{
        axios.get('/question/quize/json/' + nombre).then(res =>{
            setQuestion(res.data.quize);
        });
    }, [0]);
    
    
    return(
        question.map((i) => {
            return(
               <FormControl component="fieldset" key={i.id}>
                  <FormLabel className={classes.text}><h3>{i.question}</h3></FormLabel>
                      <RadioGroup aria-label="quize" value={value} onChange={handleChange} onClick={checkAnswer(i.id)}>
                      <FormControlLabel value="1" control={<Radio />} label={i.choice1}/>
                      <FormControlLabel value="2" control={<Radio />} label={i.choice2}/>
                      <FormControlLabel value="3" control={<Radio />} label={i.choice3}/>
                  </RadioGroup>
        </FormControl>   
                );
           })
        );
}