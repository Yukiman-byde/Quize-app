import React from 'react';
import Comedy from './Comedy';
import Song from './Song';
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
            <Typography 
              variant="h2"
              color="primary"
              align="center"
             >
              Japanese Comedy Show
             </Typography>
             <div className="dis__container">
              <Comedy />
             </div>
             <Typography 
              variant="h2"
              color="primary"
              align="center"
             >
              Japanses Song
             </Typography>
             <div className="dis__container">
              <Song />
             </div>
        </div>
        );
}

export default Display




    


 