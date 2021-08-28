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
    card:{
        margin: '30px',
        marginTop: '100px',
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
    },
});

export default function NoteCard({ title, src }){
    const classes = useStyles();
    return(
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
                    src={src.picture}
                    >
                    </CardMedia>
              </CardActionArea>
           </Card>
        );
}