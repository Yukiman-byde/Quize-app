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
    const [data, setdata] = useState([]);
    // const [num, setNum ] = useState(1);
    let counter = 0;
    const maxCount = 3;
    
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
                <Card className={classes.default} elevation={5} key={i.id}>
                    <CardActionArea href={i.id} className={classes.root} id="display">
                        <CardMedia 
                        className={classes.root}
                        component="img"
                        alt="News Thumbnail"
                        src={i.thumbnail}
                        />
                    </CardActionArea>
                </Card>
                );
             }
         })
    );
}
  



