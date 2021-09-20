import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
   box: {
      paddingTop: 30,
      background: '#EBEFF3',
      marginBottom: 0,
   },
   userbox:{
      width: 1000,
      height: 550,
      textAlign: 'center',
      margin: '0 auto',
      padding: 30,
      backgroundColor: '#fff',
      borderRadius: '10px',
   },
   user: {
      marginBottom: 0,
   },
})


export default function UserPage({ users, id, name, picture, email }){
   const classes = useStyles();
   const [user, setUser] = useState([]);
   const [post, setPost] = useState('');
   const [pic, setPic] = useState('');
   const [token, setToken] = useState();
   
  const handleChange=(e)=>{
      const files = e.target.value;

    if(files.length > 0) {

        var file = files[0];
        var reader = new FileReader();
        reader.onload = (e) => {
            setPost([e.target.result]);
        };
          reader.readAsDataURL(file);
   } else {

        setPost(null);

    }

  };

    useEffect(()=>{
        let csrf = document.head.querySelector('meta[name="csrf-token"]').content;
        setToken(csrf);
    },[]);
    
    console.log(post);

  

    let url = `/user/image/`;
//  const update =()=>{
//     axios.put('/user/json/',{
//       picture: post,
//     }).then(res=>{
//       setPic(res.data.picture);
//     }).catch(error=>{
//       console.log(error);
//     })
//  }
   

   return (
      <div className={classes.box}>
       <div className={classes.userbox}>
        <img src="https://cdn.pixabay.com/photo/2017/05/09/10/59/mount-fuji-2297961_1280.jpg&w=1000&q=80" style={{width: '100%', marginBottom: '-20px', height: '200px'}}/>
          <Avatar sx={{ width: 65, height: 65, margin: '0 auto', fontSize: 30}} >{name[0]}</Avatar>
          <h3 style={{marginBottom: 0}}>{name}</h3>
          <p style={{color: 'gray'}}>{email}</p>
        <Box
            sx={{
              width: 400,
              height: 30,
              maxWidth: '100%',
              margin: '0 auto',
            }}
         >
         <form action={url} method="post" id="send" style={{display: 'flex'}}>
          　<input className={classes.inputPicture} name="image"  value={post} onChange={(e)=>handleChange(e)}  placeholder="Set placeholder"  type="file"　/>
           <input type="hidden" name="token" value={token} />
         </form>
           <button form="send">Set up</button>
       </Box>
       </div>
      </div>
      );
};
//   <TextField
//             className={classes.inputPicture}
//             name="image"
//             value={post}
//             onChange={(e)=>setPost(e.target.value)} 
//             placeholder="Set Picture"
//             type="file"
//             />

