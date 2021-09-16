import React, {useState, useEffect } from 'react';
import HeaderItem from './HeaderItem';
import AppBar from '@material-ui/core/AppBar';
import { IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import EmailIcon from '@material-ui/icons/Email';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const useStyles = makeStyles((theme) => ({
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
    },
    chercher:{
      marginRight: '50px',
    },
    search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
     backgroundColor: '#FFFAF0',
    '&:hover': {
      backgroundColor: '#FFF5EE',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
  },
  inputRoot: {
    color: '#333',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function Header (){
    const classes = useStyles();
    const [value, setValue] = useState();
    const [answer, setAnswer] = useState("");
    
    let url = `/search/${value}`;
    
    //useEffect入力されるたびに動かす。
   //  useEffect(()=>{
   //     console.log(`${value}`);
   //  },[value]);
    
  return(
      <div className={classes.root}>
       <AppBar
        className={classes.appBar}
        elevation={1}
       >
         <Toolbar className={classes.whole}>
         <div className={classes.gauche}>
           <Typography
           variant="h4"
            >
              Learning Japanese
           </Typography>
         </div>
         <div className={classes.chercher}>
              <div className={classes.search}>
               <div className={classes.searchIcon}>
                 <SearchRoundedIcon />
               </div>
                 <form method="get" action={url}>
                     <InputBase
                       value={value}
                       onChange={(e)=> setValue(e.target.value)}
                       placeholder="Search…"
                       classes={{
                         root: classes.inputRoot,
                         input: classes.inputInput,
                       }}
                       inputProps={{ 'aria-label': 'search' }}
                     />
                      <input type="submit" type="hidden" onChange={answer}
                       onClick={value}/>
                </form>
              </div>
           </div>
            <div className={classes.droit}>
             <Link href="/display">
                <HeaderItem Icon={HomeRoundedIcon}/>
             </Link>
             <Link href="/post">
                <HeaderItem Icon={EmailIcon} />
             </Link>
             <HeaderItem Icon={AccountCircleRoundedIcon} />
           </div>
           
         </Toolbar>
       </AppBar>
      </div>
      
    );
}
