import React from 'react';
import Learn from './Learn';
import { makeStyles } from '@material-ui/core/styles';
import Display_card from './Display_card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
　　back: {
　　  background: '#EBEFF3',
　　  padding: '50px 20px',
　　},
　　char: {
　　    marginBottom: '50px',
　　    textDecoration: 'underline',
　　    color: '#1E8C99',
　　}
});


export default function Display(){
    const classes = useStyles();
    return(
        <div>
           <div className={classes.back}>
                <Typography 
                      className={classes.char}
                      variant="h2"
                      align="center"
                     >
                  Access To Real Japan
                </Typography>
                <div>
                   <Display_card/>
                </div>
           </div>
           <div>
             <Learn />
           </div>
        </div>
        );
}





    


 