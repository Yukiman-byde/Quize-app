import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
     '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(70),
    },
  },
  procedure: {
      textAlign: 'center',
  }
}));

export default function Progress(){
    const classes = useStyles();
    return (
       <div className={classes.root}>
         <Paper 
         className={classes.procedure}
         elevation={2}
         component='div'>
         <h1>~Procedure~</h1>
         </Paper>
       </div> 
        );
}