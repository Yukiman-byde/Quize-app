import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
   root:{
     '&>*':{
        margin: theme.spacing(3.5),
     },
   },
   huge: {
      height: theme.spacing(80),
   },
   children: {
      height: theme.spacing(38),
   },
}));

export default function DisplayBasic(){
   const classes = useStyles();
   const [tokyo, setTokyo] = useState([]);
   const [japan, setJapan] = useState([]);
   const [japanese, setJapanese] = useState([]);
   
    useEffect(()=>{
      axios.get('/category/json/Rudiment').then(res=>{
         setTokyo(res.data[0]);
         setJapan(res.data[1]);
         setJapanese(res.data[2]);
      });
   },[]);
   return (
      <div>
       <Grid container xs={12} className={classes.root}>
          <Grid item xs={6}>
      <a href="/display/Rudiment/10" style={{textDecoration: 'none'}}>
             <Card>
               <CardActionArea>
                    <CardMedia
                    className={classes.huge}
                    image={japan.thumbnail}
                    >
                     <CardContent>
                           <Typography variant="h3" component="h3" style={{color: '#fff'}}>
                             {japan.name} 
                           </Typography>
                     </CardContent>
                    </CardMedia>
               </CardActionArea>
             </Card>
      </a>
          </Grid>
          <Grid item xs={5}>
             <Grid>
               <a href="/display/Rudiment/11" style={{textDecoration: 'none'}}>
             <Card item xs={2.5} className={classes.children} style={{marginBottom: '30px'}} >
               <CardActionArea>
                    <CardMedia
                    className={classes.huge}
                    image={japanese.thumbnail}
                    >
                     <CardContent>
                           <Typography variant="h3" component="h3" style={{color: '#fff'}}>
                              {japanese.name}
                           </Typography>
                     </CardContent>
                    </CardMedia>
               </CardActionArea>
             </Card>
             </a>
             </Grid>
             <Grid>
               <a href="/display/Rudiment/9" style={{textDecoration: 'none'}}>
            <Card item xs={2.5} className={classes.children} >
               <CardActionArea>
                    <CardMedia
                    className={classes.huge}
                    image={tokyo.thumbnail}
                    >
                     <CardContent>
                           <Typography variant="h3" component="h3" style={{color: '#fff'}}>
                              {tokyo.name}
                           </Typography>
                     </CardContent>
                    </CardMedia>
               </CardActionArea>
             </Card>
             </a>
             </Grid>
          </Grid>
       </Grid>
      </div>)
}