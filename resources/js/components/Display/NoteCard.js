import React from 'react';
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
        backgroundImage: 'url(./image/study.png)',
        backgroundSize: 'cover',
        backgroundRepeat:  'no-repeat', 
        backgroundPosition: 'center', 
        height: '400px',
    },
    card:{
        margin: '30px',
        textAlign: 'center',
    }
});

export default function NoteCard({ title }){
    const classes = useStyles();
    return(
         <Card elevation={2} className={classes.card}>
               <CardHeader
                title={title.name}
               />
              <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="categories"
                    src="https://i.ytimg.com/vi/ZqbZauXC9_Y/mqdefault.jpg"
                    >
                    </CardMedia>
              </CardActionArea>
           </Card>
        );
}