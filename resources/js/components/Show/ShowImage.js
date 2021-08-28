import React from 'react';
import ShowComponent from './ShowComponent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    layout: {
        maxWidth: '1000px',
        display: 'flex',
    },
    pic: {
       width: '600px',
       height: '350px',
       borderRadius: '10px',
       flexGrow: 1
    },
     button: {
       flexDirection: 'column',
     }
})

export default function ShowImage( { src, title }){
    const classes = useStyles();
    return(
        <div className={classes.layout}>
         <img className={classes.pic} src={src.thumbnail} />
         <ShowComponent className={classes.button}/>
        </div>
        );
}