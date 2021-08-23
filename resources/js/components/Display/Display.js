import React from 'react';
import Display_card from './Display_card';
import Typography from '@material-ui/core/Typography';
import './Display.css';

function Display(){
    return(
        <div>
             <Typography 
              variant="h2"
              color="primary"
              align="center"
             >
              Access To Real Japan
             </Typography>
            <div className="dis__container">
              <Display_card />
            </div>
        </div>
        );
}

export default Display




    


 