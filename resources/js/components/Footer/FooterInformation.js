import React from 'react';
import FooterDot from './FooterDot';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';


const useStyles = makeStyles({
    information: {
        flexDirection: 'column',
        display: 'flex',
        flex : '0.5',
        alignItems: 'center',
        flexDirection: 'column',
        justify: 'center',
        color: '#fefefe',
        marginTop: 10,
    },
})

export default function FooterInformation(){
    const classes = useStyles();
    return(
            <Typography className={classes.information}>
             <FooterDot Icon={HomeRoundedIcon} title="Home"/>
             <FooterDot Icon={SearchRoundedIcon}  title="Search"/>
             <FooterDot Icon={MenuIcon} title="Menu"/>
             <FooterDot Icon={AccountCircleRoundedIcon}  title="Account"/>
           </Typography>
        )
}