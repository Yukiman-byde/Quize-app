import React, { useState, useEffect } from 'react';
import './Display_card.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root:{
        maxWidth: 500,
    },
});

export default function Display_card(){
    const [data, setdata] = useState([]);
    useEffect(() => {
      axios.get('/displays/json').then(response =>{
          setdata(response.data);
      }).catch(error => {
          console.log(error);
      });
  }, [])
    const classes = useStyles();
    
    return(
        data.map((i) => {
        return(
            <div item className="card" key={i.id}>
                <Card className={classes.root} elevation={5}>
                    <CardActionArea href={i.id} >
                        <CardMedia 
                        component="img"
                        alt="News Thumbnail"
                        height="300"
                        src={i.thumbnail}
                        />
                    </CardActionArea>
                </Card>
            </div>
               );
             })
          );
}

