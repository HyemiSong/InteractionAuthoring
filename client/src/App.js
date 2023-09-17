import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h5" align="center">
          Intents, Techniques, and Components: a Unified Analysis of Interaction Authoring Tasks in Data Visualization
        </Typography>
      </AppBar>
      <div>
        <Typography className={classes.intro} variant="h2" align="center">
          this website Enumerating objects: 39, done. Counting objects: 100% (39/39), done. Delta compression using up to 10 threads Compressing objects: 100% (18/18), done. Writing objects: 100% (20/20), 9.25 KiB | 9.25 MiB/s, done. Total 20 (delta 9), reused 0 (delta 0), pack-reused 0 remote: Resolving deltas: 100% (9/9), completed with 9 local objects. remote: remote: GitHub found 10 vulnerabilities on 
        </Typography>
        </div>
      <div className='addExample button'>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            {/* <Grid item xs={12} sm={7}> */}
              <Posts setCurrentId={setCurrentId} />
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={4}> */}
              {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
              {/* {isOpen && <Form currentId={currentId} setCurrentId={setCurrentId} />}  */}
            {/* </Grid> */}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
