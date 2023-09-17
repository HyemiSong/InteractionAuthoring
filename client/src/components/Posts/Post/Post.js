import React, { useState } from 'react';
import { Modal, Backdrop, Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@material-ui/core/';
import { Link } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { toggleIsOpen } from '../../../actions/posts';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false); // 모달을 열고 닫는 상태를 관리하는 state
  const [showDetailModal, setShowDetailModal] = useState(false); // 상세 페이지 모달의 표시 여부를 관리하는 상태

  if (!post) {
    return null;
  }

  const handleEditClick = () => {
    setCurrentId(post._id);
    dispatch(toggleIsOpen(true));
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile || 'preview.png'} title={post.title} />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            {/* <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography> */}
          </div>
          <div className={classes.overlay2}>
          {/* <Button size="small" color="default" style={{ color: 'black', backgroundColor: 'white', marginRight: '5px'}} onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete
          </Button> */}
          <IconButton size="small" color="default" style={{ color: 'black', backgroundColor: 'white', marginRight: '5px'}} onClick={() =>  setShowDetailModal(true)}>
            <MoreHorizIcon />
          </IconButton>
          <IconButton size="small" color="default" style={{ color: 'black', backgroundColor: 'white' }} onClick={() => handleEditClick()}>
            <EditIcon />
          </IconButton>
          </div>
        
          <CardContent className={classes.cardContent}>
            {/* <Typography className={classes.authintent} gutterBottom variant="body2" component="h2">{post.authintent}</Typography>
            <Typography className={classes.intent} gutterBottom variant="body2" component="h2">{post.intent}</Typography> */}
            {/* {'/ ' + authintent + ' [AI]'} */}
            <Typography className={classes.technique} gutterBottom variant="body2" component="h2">{'[TE] ' + post.technique}</Typography>
            <Typography className={classes.component} gutterBottom variant="body2" component="h2">{'[CO] ' + post.component.join(', ')}</Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography> */}
            <Typography variant="body2" color="textSecondary" component="p" style={{ width: '95%', overflowWrap: 'break-word' }}>
                <Link href={post.uri} target='_blank'>{post.uri}</Link>
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">{post.creator}</Typography> */}
        </CardContent>
      </Card>

    {/* 상세 정보 모달 */}
      <Modal
        open={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
      <Card className={classes.largeModalCard}>
              {/* <IconButton edge="end" className={classes.closeButton} onClick={() => setOpenModal(false)}>
                <CloseIcon fontSize="large"/>
              </IconButton> */}
              <CardMedia className={classes.largeMedia} image={post.selectedFile || 'preview.png'} title={post.title} />
              <CardContent className={classes.cardContent}>
                  {/* <div className={classes.message}>Authoring Intent:</div> */}
                  <Typography className={classes.authintent} gutterBottom variant="body2" component="h2">{'Authoring Intent: ' + post.authintent}</Typography>
                  {/* <div className={classes.message}>User Intent</div>     */}
                  <Typography className={classes.intent} gutterBottom variant="body2" component="h2">{'User Intent: ' + post.intent}</Typography>
                  {/* <div className={classes.message}>Technique</div> */}
                  <Typography className={classes.technique} gutterBottom variant="body2" component="h2">{'Technique: ' + post.technique}</Typography>
                  {/* <div className={classes.message}>Component(s)</div> */}
                  <Typography className={classes.component} gutterBottom variant="body2" component="h2">{'Component(s): ' + post.component.join(', ')}</Typography>
                  {/* website */}
                  <Typography variant="body2" color="textSecondary" component="p"><Link href={post.uri} target='_blank'>{'Example URI: ' + post.uri}</Link></Typography>
                  {/* message */}
                  <div className={classes.apple}>---</div>
                  <div className={classes.message}>Analysis & Description</div>
                  <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
             
                  {/* <Typography variant="body2" color="textSecondary" component="p">{post.creator}</Typography> */}
              </CardContent>
          </Card>
      </Modal>
      {/* <IconButton edge="end" className={classes.closeButton} onClick={() => setOpenModal(false)}>
        <CloseIcon fontSize="large"/>
      </IconButton> */}


      {/* 상세 모달 */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Card className={classes.largeModalCard}>
          <CardMedia className={classes.largeMedia} image={post.selectedFile || 'preview.png'} title={post.title} />
          <IconButton edge="end" color="inherit" onClick={() => setOpenModal(false)} style={{ position: 'absolute', right: 0 }}>
            <CloseIcon />
          </IconButton>
          <CardContent className={classes.cardContent}>
              <Typography className={classes.authintent} gutterBottom variant="body2" component="h2">{'[AI] ' + post.authintent}</Typography>
              <Typography className={classes.intent} gutterBottom variant="body2" component="h2">{'[UI] ' + post.intent}</Typography>
              <Typography className={classes.technique} gutterBottom variant="body2" component="h2">{'[TE] ' + post.technique}</Typography>
              <Typography className={classes.component} gutterBottom variant="body2" component="h2">{'[CO] ' + post.component.join(', ')}</Typography>
              {/* message */}
              <Typography className={classes.wrapText} variant="body2" color="textSecondary" component="p">{post.message}</Typography>
              {/* website */}
              <Typography variant="body2" color="textSecondary" component="p"><Link href={post.uri} target='_blank'>{post.uri}</Link></Typography>
              <Typography variant="body2" color="textSecondary" component="p">{post.creator}</Typography>
          </CardContent>
        </Card>
      </Modal>
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
// import { toggleIsOpen } from '../../../actions/posts';
// // import Preview from '../../../image/preview';

// import { likePost, deletePost } from '../../../actions/posts';
// import useStyles from './styles';

// const Post = ({ post, setCurrentId }) => {
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   if (!post) {
//     return null;  // 아무 것도 렌더링하지 않습니다.
//   }

// // 편집 버튼 클릭 시 모달 열기
// const handleEditClick = () => {
//       setCurrentId(post._id);
//       dispatch(toggleIsOpen(true)); // TOGGLE_ISOPEN 액션을 디스패치하여 isOpen 상태를 토글
//     };

//   return (
//     <div>
//     <Card className={classes.card}>
//       <CardMedia className={classes.media} image={post.selectedFile || 'preview.png'} title={post.title} />
//       <div className={classes.overlay}>
//         <Typography variant="h6">{post.creator}</Typography>
//         {/* <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography> */}
//       </div>
//       <div className={classes.overlay2}>
//       <Button size="small" onClick={() => handleEditClick()}>
//       Edit
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
//         <div className={classes.details}>
//             <Typography variant="body2" color="textSecondary" component="h2">
//                 {Array.isArray(post.tags) ? post.tags.map((tag) => `#${tag} `) : ''}
//             </Typography>
//         </div>

//       <CardActions className={classes.cardActions}>
//         {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button> */}
//         <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
//       </CardActions>
//     </Card>
//     {/* <div className={classes.margin}></div> */}
//     </div>
//   );
// };

// export default Post;

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
