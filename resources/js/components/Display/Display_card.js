import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    default: {
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        width: 500,
        height: 350,
        flexWrap: 'wrap',
        marginRight: 'auto',
        marginLeft: 'auto',
        '& > *': {
            margin: 7,
        },
    },
    root: {
        width: 430,
        height: 240,
    },
    media: {
        backgroundSize: 'center',
    }
});

export default function Display_card(){
    const [data, setdata] = useState([]);
    
    let counter = 0;
    const maxCount = 3;
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        axios.get('/categories/json').then(res => {
            setCategory(res.data);
        });
    },[]);
    useEffect(() => {
      axios.get('/displays/json/').then(response =>{
          setdata(response.data);
      }).catch(error => {
          console.log(error);
      });
  }, []);
  
  const classes = useStyles();
    return(
        data.map((i) => {
             if(counter < maxCount){
                 counter++;
            return(
             <div className={classes.default}>
                <Card elevation={5} key={i.id} className={classes.card}>
                    <CardActionArea href={i.id} className={classes.root} id="display">
                        <CardMedia 
                        className={classes.media}
                        component="img"
                        alt="News Thumbnail"
                        src={i.thumbnail}
                        />
                    </CardActionArea>
                </Card>
             </div>
                );
             }
         })
    );
}
  



