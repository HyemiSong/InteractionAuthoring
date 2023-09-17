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
        This website enables individuals to collect interactive data visualization examples collaboratively. This collection will be the extension of examples utilized in our research paper for everyone interested in interaction authoring for data visualization. By selecting "Add an example", you can contribute examples based on our established framework, encompassing intent, technique, and component. Moreover, you can provide your analysis or description of the example.
         Please note that this project is ongoing, and we will continue to refine and enhance its features. Currently, the "Delete a post" function is not available. However, editing a previously uploaded post is permissible. If you need to delete a post or any requests, please don't hesitate to contact us.        </Typography>
        </div>

        <div className={classes.unified}>
          Unified Accounts (Intent-Technique-Component)
          <div className={classes.intent}>INDEX: Authoring Intent [AI], User Intent [UI], Technique [TE], Component [CO]</div>
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
