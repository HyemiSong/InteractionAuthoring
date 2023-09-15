import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { Link } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
// import FormModal from '../FormModal/FormModal'; // 경로는 실제 프로젝트의 구조에 맞게 조정해야 합니다.

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

const [open, setOpen] = useState(false); // 모달의 상태를 관리하는 state

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" 
                  onClick={() => {
                    setCurrentId(post._id);
                    setOpen(true); // 모달을 열어줍니다.
                  }}>
            <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      {/* <FormModal 
        currentId={currentId} 
        setCurrentId={setCurrentId} 
        open={open} // FormModal 컴포넌트에 open 상태를 전달
        setOpen={setOpen} // FormModal 컴포넌트에 setOpen 함수를 전달
      /> */}

      {/* framework */}
      <CardContent>
        <Typography className={classes.authintent} gutterBottom variant="body2" component="h2">{post.authintent}</Typography>
        <Typography className={classes.intent} gutterBottom variant="body2" component="h2">{post.intent}</Typography>
        <Typography className={classes.technique} gutterBottom variant="body2" component="h2">{post.technique}</Typography>
        <Typography className={classes.component} gutterBottom variant="body2" component="h2">{post.component}</Typography>
        {/* message */}
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        {/* website */}
        <Typography variant="body2" color="textSecondary" component="p"><Link href={post.uri} target='_blank'>{post.uri}</Link></Typography>
        <Typography variant="body2" color="textSecondary" component="p">{post.creator}</Typography>
      </CardContent>

      {/* tags */}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>

      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button> */}
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;


// import React from 'react';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import { Link } from '@material-ui/core';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
// import { useDispatch } from 'react-redux';

// import { likePost, deletePost } from '../../../actions/posts';
// import useStyles from './styles';

// const Post = ({ post, setCurrentId }) => {
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   console.log(post)

//   return (
//     <Card className={classes.card}>
//       <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
//       <div className={classes.overlay}>
//         <Typography variant="h6">{post.creator}</Typography>
//         <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
//       </div>
//       <div className={classes.overlay2}>
//         <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
//       </div>
//       {/* framework */}
//       <CardContent>
//         <Typography className={classes.authintent} gutterBottom variant="body2" component="h2">{post.authintent}</Typography>
//         <Typography className={classes.intent} gutterBottom variant="body2" component="h2">{post.intent}</Typography>
//         <Typography className={classes.technique} gutterBottom variant="body2" component="h2">{post.technique}</Typography>
//         <Typography className={classes.component} gutterBottom variant="body2" component="h2">{post.component}</Typography>
//         {/* message */}
//         <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
//         {/* website */}
//         <Typography variant="body2" color="textSecondary" component="p"><Link href={post.uri} target='_blank'>{post.uri}</Link></Typography>
//         <Typography variant="body2" color="textSecondary" component="p">{post.creator}</Typography>
//       </CardContent>

//       {/* tags */}
//       <div className={classes.details}>
//         <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
//       </div>

//       <CardActions className={classes.cardActions}>
//         {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button> */}
//         <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;
