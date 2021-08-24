import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root:{
        width: 600,
        height: 400,
    },
    default: {
        width: 600,
        height: 400,
       marginLeft: 'auto',
　　  marginRight: 'auto'
    },
    dessus: {
      display: 'flex',  
    },
    third: {
        width: 800,
        height: 400,
        margin: '20px 20px',
        marginLeft: 'auto',
　　    marginRight: 'auto'
    },
    　centre:{
　　    marginLeft: 'auto',
　　    marginRight: 'auto'
　　}
});

export default function Display_card(){
//     const [data, setdata] = useState([]);
    
//     useEffect(() => {
//       axios.get('/displays/json').then(response =>{
//           setdata(response.data);
//       }).catch(error => {
//           console.log(error);
//       });
//   }, []);
 
   const classes = useStyles();
    return(
        // data.map((i) => {
         <div className={classes.centre}>
            <div className={classes.dessus}>
                <Card className={classes.default} elevation={5}>
                    <CardActionArea href="/1" className={classes.root}>
                        <CardMedia 
                        className={classes.root}
                        component="img"
                        alt="News Thumbnail"
                        src="https://i.ytimg.com/vi/ZqbZauXC9_Y/mqdefault.jpg"
                        />
                    </CardActionArea>
                </Card>
                <Card className={classes.default} elevation={5}>
                    <CardActionArea href="/2">
                        <CardMedia 
                        className={classes.root}
                        component="img"
                        alt="News Thumbnail"
                        src="https://i.ytimg.com/vi/iUs6jSJ0up8/mqdefault.jpg"
                        />
                    </CardActionArea>
                </Card>
            </div>
                <Card elevation={5} className={classes.third}>
                    <CardActionArea href="/5">
                        <CardMedia 
                        component="img"
                        alt="News Thumbnail"
                        src="https://i.ytimg.com/vi/s7aCgy_zXrk/mqdefault.jpg"
                        />
                    </CardActionArea>
                </Card>
        </div>
            // })
     );
  
}

