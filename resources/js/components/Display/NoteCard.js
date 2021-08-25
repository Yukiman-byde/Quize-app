import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    back: {
        background: '#fefefe',
        borderRadius: '5px',
        marginTop: 50,
    },
    card:{
        margin: '30px',
        textAlign: 'center',
        height: 380,
        transition: '1s',
        cursor: 'pointer',
    '&:hover':{
          transform: 'translateY(-15px)',
       },
    },
    carte: {
        height: 300,
        maxWidth: 330,
    },
    couloir: {
        color: '#797171',
        fontSize: 'bold',
    }
});

export default function NoteCard({ title, src }){
     const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get('/categories/json')
        .then(res=> {
            setData(res.data);
        });
    }, []);
    const classes = useStyles();
    return(
        <div className={classes.back}>
         <Card elevation={2} className={classes.card}>
               <CardHeader
               className={classes.couloir}
                title={title.name}
               />
              <CardActionArea>
                    <CardMedia
                    className={classes.carte}
                    component="img"
                    alt="categories"
                    src={title.picture}
                    >
                    </CardMedia>
              </CardActionArea>
           </Card>
         </div>
        );
}