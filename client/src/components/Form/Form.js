import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { Framework, Components } from '../../constants/framework'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ intent: '', technique: '', component: [], message: '', tags: '', selectedFile: '', uri:'', creator:''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [availableTechniques, setAvailableTechniques] = useState([]);

  useEffect(() => {
    if (post) {
      if (!Array.isArray(post.component)){
        post.component = post.component ? [post.component] : [];
      }
      setPostData(post);
    }
  }, [post]);

  // Add this useEffect to handle the enable/disable of submit button
  useEffect(() => {
    setSubmitDisabled(!(postData.intent && postData.technique && postData.component));
  }, [postData.intent, postData.technique, postData.component]);

  useEffect(() => {
    // Whenever the intent changes, update the available techniques
    const techniques = Framework[postData.intent];
    if(techniques){
      setAvailableTechniques(Framework[postData.intent] || []);
      // If the selected technique is not in the new list of available techniques, clear it
      if (!Framework[postData.intent].includes(postData.technique)) {
        setPostData({ ...postData, technique: '' });
      }
    }else{
      setAvailableTechniques([])
    }
  }, [postData.intent]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ intent: '', technique: '', component: [], message: '', tags: '', selectedFile: '', uri:'', creator:''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Editing ${post.creator}'s post` : 'Adding an example'}</Typography>

            {/* intent */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Intent</InputLabel>
              <Select value={postData.intent} onChange={(e) => setPostData({ ...postData, intent: e.target.value })}>
                {Object.keys(Framework).map((intent) => (
                  <MenuItem key={intent} value={intent}>{intent}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* technique */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Technique</InputLabel>
              <Select value={postData.technique} onChange={(e) => setPostData({ ...postData, technique: e.target.value })}>
                {/* Dynamically generate the options based on the available techniques */}
                {availableTechniques.map((technique) => (
                  <MenuItem key={technique} value={technique}>{technique}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* compoenent */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Component</InputLabel>
              <Select 
                multiple
                value={postData.component} 
                onChange={(e) => setPostData({ ...postData, component: e.target.value })}>
                {Components.map((component) => (
                  <MenuItem key={component} value={component}>{component}</MenuItem>
                ))}
              </Select>
            </FormControl>

        {/* message, tags */}
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <TextField name="uri" variant="outlined" label="Add example website" fullWidth value={postData.uri} onChange={(e) => setPostData({ ...postData, uri: e.target.value })} />
        <TextField name="creator" variant="outlined" label="Add your nickname" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

        {/* file */}
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        {/* submit/clear */}
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth disabled={isSubmitDisabled}>Submit</Button>
        <Button variant="contained" style={{backgroundColor: '#000', color: '#fff'}} size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
