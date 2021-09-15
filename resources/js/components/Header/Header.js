import React from 'react';
import HeaderItem from './HeaderItem';
import AppBar from '@material-ui/core/AppBar';
import { IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const useStyles = makeStyles({
    appBar: {
        background: 'linear-gradient(#00BAD8 0%,#018BF1 99%)',
        width: `calc(100%)`,
        height: 80,
        position: 'sticky',
    },
   whole: {
       padding: '20px 10px',
   },
    gauche: {
        flexGrow: 1,
    },
    droit: {
        display:'flex'
    }
    
});



export default function Header (){
    const classes = useStyles();
  return(
      <div className={classes.root}>
       <AppBar
        className={classes.appBar}
        elevation={1}
       >
         <Toolbar className={classes.whole}>
           <Typography
           variant="h4"
           className={classes.gauche}>
              Learning Japanese
           </Typography>
            <Typography className={classes.droit}>
             <Link href="/display">
                <HeaderItem Icon={HomeRoundedIcon}/>
             </Link>
             <HeaderItem Icon={SearchRoundedIcon}/>
             <Link href="/post">
                <HeaderItem Icon={EmailIcon} />
             </Link>
             <HeaderItem Icon={AccountCircleRoundedIcon} />
           </Typography>
           
         </Toolbar>
       </AppBar>
      </div>
      
    );
}
