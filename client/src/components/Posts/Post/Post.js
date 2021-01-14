import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import useStyles from './styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();


return(
    <Card className={classes.card}>
         <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
        <div className={classes.overlay}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="h6">Dog name: {post.dogname}</Typography>
            <Typography variant="h6">Breed: {post.breed}</Typography>
            <Typography variant="h6">{post.location}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
        </div>
        <CardContent><Typography variant="h5" gutterBottom>{post.message}</Typography><Typography variant="h6" gutterBottom>Phone Number:{post.phonenumber}</Typography><Typography variant="h6">Creator: {post.creator}</Typography></CardContent>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                <DeleteForeverIcon fontSize="small"/>
                Delete
             </Button>
        </CardActions>
        </Card> 
    );
;}

export default Post;