import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    couloir: {
        color: '#fefefe',
        flex: '0.2',
        textDecoration: 'underline',
        marginTop: '30px',
        textShadow: '0 0 10px #fefefe,0 0 15px #fefefe',
        flexGrow: 1,
    },
})


export default function FooterItem(){
    const classes = useStyles();
    return (
        <div>
          <h3 className={classes.couloir}>Learning Japanese</h3>
        </div>
        
        );
}