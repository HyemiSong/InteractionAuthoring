import React, { useState, useEffect } from 'react';
import {IconButton, TextField, Button, Typography, Paper, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { AuthIntents, Intents, Components } from '../../constants/framework';

const FormModal = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ authintent: '', intent: '', technique: '', component: [], message: '', tags: '', selectedFile: '', uri: '', creator: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [availableIntents, setAvailableIntents] = useState([]);
  const [availableTechniques, setAvailableTechniques] = useState([]);
  const [open, setOpen] = useState(false);  // 추가
  
  const handleClose = () => {  // 추가
    setOpen(false);
  };
  
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  useEffect(() => {
    if (postData.authintent in AuthIntents) {
      setAvailableIntents(AuthIntents[postData.authintent]);
    } else {
      setAvailableIntents([]);
    }

    if (postData.intent in Intents) {
      setAvailableTechniques(Intents[postData.intent]);
    } else {
      setAvailableTechniques([]);
    }
  }, [postData.authintent, postData.intent]);

  useEffect(() => {
    const areRequiredFieldsFilled = postData.authintent && postData.intent && postData.technique && postData.component.length > 0;
    setSubmitDisabled(!areRequiredFieldsFilled);
  }, [postData.authintent, postData.intent, postData.technique, postData.component]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ authintent: '', intent: '', technique: '', component: [], message: '', tags: '', selectedFile: '', uri: '', creator: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Add Post
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
      <Paper className={classes.paper}>
        <IconButton 
          edge="end" 
          color="inherit" 
          onClick={handleClose} 
          aria-label="close"
          style={{ position: 'absolute', top: '10px', right: '10px' }}  // 버튼 위치 조절
        >
          <CloseIcon />
        </IconButton>

        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? `Editing ${post.creator}'s post` : 'Adding an example'}</Typography>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Authoring Intent</InputLabel>
            <Select value={postData.authintent} onChange={(e) => setPostData({ ...postData, authintent: e.target.value })}>
              {Object.keys(AuthIntents).map((authintent) => (
                <MenuItem key={authintent} value={authintent}>{authintent}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>User Intent</InputLabel>
            <Select value={postData.intent} onChange={(e) => setPostData({ ...postData, intent: e.target.value })}>
              {availableIntents.map((intent) => (
                <MenuItem key={intent} value={intent}>{intent}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Technique</InputLabel>
            <Select value={postData.technique} onChange={(e) => setPostData({ ...postData, technique: e.target.value })}>
              {availableTechniques.map((technique) => (
                <MenuItem key={technique} value={technique}>{technique}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Component</InputLabel>
            <Select multiple value={postData.component} onChange={(e) => setPostData({ ...postData, component: e.target.value })}>
              {Components.map((component) => (
                <MenuItem key={component} value={component}>{component}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          <TextField name="uri" variant="outlined" label="Add example website" fullWidth value={postData.uri} onChange={(e) => setPostData({ ...postData, uri: e.target.value })} />
          <TextField name="creator" variant="outlined" label="Add your nickname" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth disabled={isSubmitDisabled}>Submit</Button>
          <Button variant="contained" style={{backgroundColor: '#000', color: '#fff'}} size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    </Modal>
    </div>
  );
};

export default FormModal;


// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';

// import useStyles from './styles';
// import { createPost, updatePost } from '../../actions/posts';
// import { AuthIntents, Intents, Components } from '../../constants/framework';

// const Form = ({ currentId, setCurrentId }) => {
//   const [postData, setPostData] = useState({ authintent: '', intent: '', technique: '', component: [], message: '', tags: '', selectedFile: '', uri:'', creator:''});
//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   const [isSubmitDisabled, setSubmitDisabled] = useState(true);
//   const [availableIntents, setAvailableIntents] = useState([]);
//   const [availableTechniques, setAvailableTechniques] = useState([]);

//   useEffect(() => {
//     if (post) setPostData(post);
//   }, [post]);

//   useEffect(() => {
//     if (postData.authintent in AuthIntents) {
//       setAvailableIntents(AuthIntents[postData.authintent]);
//     } else {
//       setAvailableIntents([]);
//     }

//     if (postData.intent in Intents) {
//       setAvailableTechniques(Intents[postData.intent]);
//     } else {
//       setAvailableTechniques([]);
//     }
//   }, [postData.authintent, postData.intent]);

//   useEffect(() => {
//     const areRequiredFieldsFilled = postData.authintent && postData.intent && postData.technique && postData.component.length > 0;
//     setSubmitDisabled(!areRequiredFieldsFilled);
//   }, [postData.authintent, postData.intent, postData.technique, postData.component]);

//   const clear = () => {
//     setCurrentId(0);
//     setPostData({ authintent: '', intent: '', technique: '', component: [], message: '', tags: '', selectedFile: '', uri:'', creator:'' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (currentId === 0) {
//       dispatch(createPost(postData));
//     } else {
//       dispatch(updatePost(currentId, postData));
//     }
//     clear();
//   };

//   return (
//     <Paper className={classes.paper}>
//       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
//         <Typography variant="h6">{currentId ? `Editing ${post.creator}'s post` : 'Adding an example'}</Typography>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel>Authoring Intent</InputLabel>
//           <Select value={postData.authintent} onChange={(e) => setPostData({ ...postData, authintent: e.target.value })}>
//             {Object.keys(AuthIntents).map((authintent) => (
//               <MenuItem key={authintent} value={authintent}>{authintent}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <FormControl variant="outlined" fullWidth>
//           <InputLabel>User Intent</InputLabel>
//           <Select value={postData.intent} onChange={(e) => setPostData({ ...postData, intent: e.target.value })}>
//             {availableIntents.map((intent) => (
//               <MenuItem key={intent} value={intent}>{intent}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <FormControl variant="outlined" fullWidth>
//           <InputLabel>Technique</InputLabel>
//           <Select value={postData.technique} onChange={(e) => setPostData({ ...postData, technique: e.target.value })}>
//             {availableTechniques.map((technique) => (
//               <MenuItem key={technique} value={technique}>{technique}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <FormControl variant="outlined" fullWidth>
//           <InputLabel>Component</InputLabel>
//           <Select multiple value={postData.component} onChange={(e) => setPostData({ ...postData, component: e.target.value })}>
//             {Components.map((component) => (
//               <MenuItem key={component} value={component}>{component}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
//         <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
//         <TextField name="uri" variant="outlined" label="Add example website" fullWidth value={postData.uri} onChange={(e) => setPostData({ ...postData, uri: e.target.value })} />
//         <TextField name="creator" variant="outlined" label="Add your nickname" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

//         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
//         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth disabled={isSubmitDisabled}>Submit</Button>
//         <Button variant="contained" style={{backgroundColor: '#000', color: '#fff'}} size="small" onClick={clear} fullWidth>Clear</Button>
//       </form>
//     </Paper>
//   );
// };

// export default Form;


// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';

// import useStyles from './styles';
// import { createPost, updatePost } from '../../actions/posts';
// import { Intents, AuthIntents, Components } from '../../constants/framework'

// const Form = ({ currentId, setCurrentId }) => {
//   const [postData, setPostData] = useState({ authintent: '', intent: '', technique: '', component: [], message: '', tags: '', selectedFile: '', uri:'', creator:''});
//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   const [isSubmitDisabled, setSubmitDisabled] = useState(true);
//   const [availableTechniques, setAvailableTechniques] = useState([]);

//   useEffect(() => {
//     if (post) {
//       if (!Array.isArray(post.component)){
//         post.component = post.component ? [post.component] : [];
//       }
//       setPostData(post);
//     }
//   }, [post]);

//   // Add this useEffect to handle the enable/disable of submit button
//   useEffect(() => {
//     setSubmitDisabled(!(postData.authintent && postData.intent && postData.technique && postData.component));
//   }, [postData.authintent, postData.intent, postData.technique, postData.component]);

//   useEffect(() => {
//     // Whenever the intent changes, update the available techniques
//     const techniques = Intents[postData.intent];
//     if(techniques){
//       setAvailableTechniques(Intents[postData.intent] || []);
//       // If the selected technique is not in the new list of available techniques, clear it
//       if (!Intents[postData.intent].includes(postData.technique)) {
//         setPostData({ ...postData, technique: '' });
//       }
//     }else{
//       setAvailableTechniques([])
//     }
//   }, [postData.intent]);

//   const clear = () => {
//     setCurrentId(0);
//     setPostData({ authintent: '', intent: '', technique: '', component: [], message: '', tags: '', selectedFile: '', uri:'', creator:''});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (currentId === 0) {
//       dispatch(createPost(postData));
//       clear();
//     } else {
//       dispatch(updatePost(currentId, postData));
//       clear();
//     }
//   };

//   return (
//     <Paper className={classes.paper}>
//       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
//             <Typography variant="h6">{currentId ? `Editing ${post.creator}'s post` : 'Adding an example'}</Typography>

//             {/* Authoring intent */}
//             <FormControl variant="outlined" fullWidth>
//               <InputLabel>Authoring Intent</InputLabel>
//               <Select value={postData.authintent} onChange={(e) => setPostData({ ...postData, authintent: e.target.value })}>
//                 {Object.keys(AuthIntents).map((authintent) => (
//                   <MenuItem key={authintent} value={authintent}>{authintent}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* User intent */}
//             <FormControl variant="outlined" fullWidth>
//               <InputLabel>User Intent</InputLabel>
//               <Select value={postData.intent} onChange={(e) => setPostData({ ...postData, intent: e.target.value })}>
//                 {Object.keys(Intents).map((intent) => (
//                   <MenuItem key={intent} value={intent}>{intent}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* technique */}
//             <FormControl variant="outlined" fullWidth>
//               <InputLabel>Technique</InputLabel>
//               <Select value={postData.technique} onChange={(e) => setPostData({ ...postData, technique: e.target.value })}>
//                 {/* Dynamically generate the options based on the available techniques */}
//                 {availableTechniques.map((technique) => (
//                   <MenuItem key={technique} value={technique}>{technique}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* compoenent */}
//             <FormControl variant="outlined" fullWidth>
//               <InputLabel>Component</InputLabel>
//               <Select 
//                 multiple
//                 value={postData.component} 
//                 onChange={(e) => setPostData({ ...postData, component: e.target.value })}>
//                 {Components.map((component) => (
//                   <MenuItem key={component} value={component}>{component}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//         {/* message, tags */}
//         <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
//         <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
//         <TextField name="uri" variant="outlined" label="Add example website" fullWidth value={postData.uri} onChange={(e) => setPostData({ ...postData, uri: e.target.value })} />
//         <TextField name="creator" variant="outlined" label="Add your nickname" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

//         {/* file */}
//         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
//         {/* submit/clear */}
//         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth disabled={isSubmitDisabled}>Submit</Button>
//         <Button variant="contained" style={{backgroundColor: '#000', color: '#fff'}} size="small" onClick={clear} fullWidth>Clear</Button>
//       </form>
//     </Paper>
//   );
// };

// export default Form;
