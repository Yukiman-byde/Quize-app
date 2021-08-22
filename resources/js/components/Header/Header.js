import React from 'react';
import HeaderItem from './HeaderItem';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './Header.css';

export default function Header (){
  return(
      <div className="header">
         <Grid container className="container">
           <Grid item xs={3}>
             <a href="/displays"><h2 className="char">Learning Japanese</h2></a>
           </Grid>
           <Grid item xs={5}></Grid>
           <Grid className="header__right" item xs={4}>
             <HeaderItem Icon={HomeRoundedIcon} title="Home"/>
             <HeaderItem Icon={SearchRoundedIcon} title="Search"/>
             <HeaderItem Icon={MenuIcon} title="Menu" />
             <HeaderItem Icon={AccountCircleRoundedIcon} title="Account"/>
           </Grid>
          </Grid>
      </div>
    );
}
