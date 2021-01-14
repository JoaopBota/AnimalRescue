import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts'





const Form = ({ currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({title:'', dogname:'', breed:'', location:'', message: '', creator: '', selectedFile:'' , phonenumber:''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id = currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
            clear();
        } else {
            dispatch(createPost(postData));
            clear();
        }
    }
    
    const clear = () => {
        setCurrentId(null);
        setPostData({title:'', dogname:'', breed:'', location:'', message: '', creator: '', selectedFile:'' , phonenumber:''});
    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>{currentId ? 'Editing a Post' : 'Adding a Dog'}</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ... postData, title: e.target.value })}/>
            <TextField name="dogname" variant="outlined" label="Dog Name" fullWidth value={postData.dogname} onChange={(e) => setPostData({ ... postData, dogname: e.target.value })}/>
            <TextField name="breed" variant="outlined" label="Breed" fullWidth value={postData.breed} onChange={(e) => setPostData({ ... postData, breed: e.target.value })}/>
            <TextField name="location" variant="outlined" label="Location" fullWidth value={postData.location} onChange={(e) => setPostData({ ... postData, location: e.target.value })}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ... postData, message: e.target.value })}/>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ... postData, creator: e.target.value })}/>
            <TextField name="phonenumber" variant="outlined" label="Phone number" fullWidth value={postData.phonenumber} onChange={(e) => setPostData({ ... postData, phonenumber: e.target.value })}/>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
    );
}

export default Form;