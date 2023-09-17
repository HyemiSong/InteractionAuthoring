import React, { useState } from 'react';
import { Modal, Backdrop, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { Link } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { toggleIsOpen } from '../../../actions/posts';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  if (!post) {
    return null;  // 아무 것도 렌더링하지 않습니다.
  }

  // const handleToggleIsOpen = (id) => {
  //   dispatch(toggleIsOpen(id));
  // };


//   const handleButtonClick = () => {
//     setCurrentId(post._id);
//     // setOpenModal(true);  // 이 부분을 추가하면 Form.js에서의 동작과 동일하게 됩니다.
//     setOpens(true)
//     sendDataToParent(post);
//     // console.log("Data received from Post:");
//     // console.log("sendDataToParent prop:", sendDataToParent);
//     // console.log(post);
// };

// 편집 버튼 클릭 시 모달 열기
const handleEditClick = () => {
      setCurrentId(post._id);
      dispatch(toggleIsOpen(true)); // TOGGLE_ISOPEN 액션을 디스패치하여 isOpen 상태를 토글
    };

// console.log('post.isOpen', post.isOpen)
// console.log('post._id', post._id)

  return (
    <div>
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
      <Button size="small" onClick={() => handleEditClick()}>
      Edit
      </Button>
      </div>

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
            <Typography variant="body2" color="textSecondary" component="h2">
                {Array.isArray(post.tags) ? post.tags.map((tag) => `#${tag} `) : ''}
            </Typography>
        </div>

      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button> */}
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
    {/* <div className={classes.margin}></div> */}
    </div>
  );
};

export default Post;

// import React, { useState } from 'react';
// import { Modal, Backdrop, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import { Link } from '@material-ui/core';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
// import { useDispatch } from 'react-redux';
// // import Form from '../../Form/Form';

// import { likePost, deletePost } from '../../../actions/posts';
// import useStyles from './styles';

// const Post = ({ post, setCurrentId, sendDataToParent= () => {}, setOpenModal = () => {} }) => {
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const [opens, setOpens] = useState(false);

//   if (!post) {
//     return null;  // 아무 것도 렌더링하지 않습니다.
//   }

//   const handleButtonClick = () => {
//     setCurrentId(post._id);
//     // setOpenModal(true);  // 이 부분을 추가하면 Form.js에서의 동작과 동일하게 됩니다.
//     setOpens(true)
//     sendDataToParent(post);
//     // console.log("Data received from Post:");
//     // console.log("sendDataToParent prop:", sendDataToParent);
//     // console.log(post);
// };

// console.log(opens)

//   return (
//     <Card className={classes.card}>
//       <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
//       <div className={classes.overlay}>
//         <Typography variant="h6">{post.creator}</Typography>
//         <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
//       </div>
//       <div className={classes.overlay2}>
//       <Button style={{ color: 'white' }} size="small" onClick={() => {
//           console.log("Button directly clicked");
//           handleButtonClick();
//       }}>
//           <MoreHorizIcon fontSize="medium" />
//       </Button>
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
