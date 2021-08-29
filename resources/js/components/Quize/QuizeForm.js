import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function QuizeForm({ quize }){
    const[value, setValue] = useState('');
    const handleChange =(event)=>{
        setValue(event.target.value);
    }
    return(
        <FormControl component="fieldset">
          <FormLabel><h3>{quize.question}</h3></FormLabel>
          <RadioGroup aria-label="quize" name="quize1" value={value} onChange={handleChange}>
          <FormControlLabel value="1" control={<Radio />} label={quize.choice1}/>
          <FormControlLabel value="2" control={<Radio />} label={quize.choice2}/>
          <FormControlLabel value="3" control={<Radio />} label={quize.choice3}/>
          </RadioGroup>
        </FormControl>
        )
}