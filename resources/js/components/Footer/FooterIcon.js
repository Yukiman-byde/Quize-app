import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    gauche: {
        flexGrow: 1,
        cursor: 'pointer',
        margin: '15px',
    },
    droit: {
        margin: '10px',
    }
})


export default function FooterItem({ Icon }){
    const classes = useStyles();
        return(
        <div>
             <div className={classes.gauche}>
                {Icon && <Icon style={{ fontSize: 40 }} />}
             </div>
        </div>
    );
}