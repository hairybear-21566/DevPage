
import React from 'react';

import { Card, CardActions, CardMedia, Button, CardContent, Typography } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

//import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import {  deletePost } from '../../../actions/posts';

/*title: String,
desc: String,
    creator: String,
    selectedFile: String,
    supply: {
        type: Number,
        default: 0,
    },
    listedDate: {
        type: Date,
        default: new Date(),
    },
    mintInfo: String
}*/

const Post = ({ setCurrentId, post }) => {
    const classes = useStyles()
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia 
            className={classes.media} 
            image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
            title={post.title} />
            <div 
            className={classes.overlay}>
                <Typography 
                variant="h6">{post.creator}
                </Typography>

                <Typography 
                variant="body2">listed {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                style={{ color: 'white' }} 
                onClick={() => setCurrentId(post._id)} 
                size="small"><MoreHorizIcon 
                fontSize="medium" /></Button>
            </div>
            <div className={classes.details}>
                
            </div>
            <Typography 
            className={classes.title} 
            gutterBottom 
            variant="h5" 
            component="h1">title{post.title} , &nbsp; supply:{post.supply}, &nbsp; price:{post.price}</Typography>
    
            
            <CardContent>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p">{post.desc}desc</Typography>
            </CardContent>
            <CardContent>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p">{post.mintInfo}mintInfo</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button 
                size="small" 
                color="primary" 
                fontSize="small" 
                onClick={() => dispatch(deletePost(post._id))}> <DeleteIcon></DeleteIcon> &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;
//onClick={() => dispatch(likePost(post._id))}
//onClick={() => dispatch(deletePost(post._id))}
//onClick={() => setCurrentId(post._id)}
/*<Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))} >
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
*/

/*<Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>*/