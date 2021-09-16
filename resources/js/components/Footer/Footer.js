import React from 'react';
import FooterInformation from './FooterInformation';
import FooterIcon from './FooterIcon';
import FooterItem from './FooterItem';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Avatar from '@material-ui/core/Avatar';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const useStyles = makeStyles({
    cancel: {
        margin: 0,
        padding: 30,
        width: '100%',
        height: '50vh',
        background: 'linear-gradient(60deg, rgba(9,119,121,1) 3%, rgba(0,161,255,1) 52%)',
        display: 'flex',
    },
    foot: {
        maxWidth: '1440px',
        width: '100%',
        height: '8vh',
        background: '#fefefe',
        display: 'flex',
    },
})

export default function Footer(){
    const classes = useStyles();
    return(
     <div>
        <div className={classes.cancel}>
             <div 
               className={classes.footer}
               >
                 <FooterItem />
               </div>
               <FooterInformation />
        </div>
        <Container className={classes.foot} fixed>
              <FooterIcon Icon={YouTubeIcon} />
              <FooterIcon Icon={InstagramIcon} />
              <FooterIcon Icon={RssFeedIcon} />
        </Container>
    </div>
        );
}