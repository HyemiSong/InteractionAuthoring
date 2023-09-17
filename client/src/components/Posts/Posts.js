import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  // const posts = useSelector((state) => state.posts);
  const posts = useSelector((state) => state.posts.posts);
  const classes = useStyles();

  const groupByIntent = (posts) => {
    return posts.reduce((acc, post) => {
      if (!acc[post.intent]) acc[post.intent] = [];
      acc[post.intent].push(post);
      return acc;
    }, {});
  };

  const groupByAuthIntent = (posts) => {
    return posts.reduce((acc, post) => {
      if (!acc[post.authintent]) acc[post.authintent] = [];
      acc[post.authintent].push(post);
      return acc;
    }, {});
  };

  const groupedByAuthIntent = groupByAuthIntent(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <div className={classes.container}>
        {/* <div className={classes.unified}>
          Unified Accounts (Intent-Technique-Component)
          <div className={classes.intent}>Authoring Intent [AI], User Intent [UI], Technique [TE], Component [CO]</div>
        </div> */}
        {Object.keys(groupedByAuthIntent).map(authintent => {
          const groupedPosts = groupByIntent(groupedByAuthIntent[authintent]);

          return (
            <div key={authintent}>
              <Typography className={classes.authintent} gutterBottom color="textPrimary" style={{ color: '#FFFFFF' }}> {'[AI] ' + authintent}</Typography>
              {Object.keys(groupedPosts).map(intent => (
                <div key={intent}>
                  <Typography className={classes.userintent} gutterBottom color="textPrimary" style={{ color: '#FFFFFF' }}>{'[UI] ' + intent}</Typography>
                  <Grid container alignItems="stretch" spacing={3}>
                    {groupedPosts[intent].map((post) => (
                      <Grid key={post._id} item xs={12} sm={3}>
                        <Post post={post} setCurrentId={setCurrentId} />
                      </Grid>
                    ))}
                  </Grid>
                  <div className={classes.margin}></div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Posts;



// import React from 'react';
// import { Grid, CircularProgress, Typography } from '@material-ui/core';
// import { useSelector } from 'react-redux';

// import Post from './Post/Post';
// import useStyles from './styles';

// const Posts = ({ setCurrentId }) => {
//   const posts = useSelector((state) => state.posts);
//   const classes = useStyles();

//   // 인텐트별로 포스트를 분류하는 함수
//   const groupByIntent = (posts) => {
//     return posts.reduce((acc, post) => {
//       if (!acc[post.intent]) acc[post.intent] = [];
//       acc[post.intent].push(post);
//       return acc;
//     }, {});
//   };

//   const groupedPosts = groupByIntent(posts);

//   return (
//     !posts.length ? <CircularProgress /> : (
//       <div className={classes.container}>
//         {Object.keys(groupedPosts).map(intent => (
//           <div key={intent}>
//             <Typography variant="h5" gutterBottom color="textPrimary" style={{ color: '#FFFFFF' }}>{intent}</Typography>
//             <Grid container alignItems="stretch" spacing={3}>
//               {groupedPosts[intent].map((post) => (
//                 <Grid key={post._id} item xs={12} sm={6} md={6}>
//                   <Post post={post} setCurrentId={setCurrentId} />
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//         ))}
//       </div>
//     )
//   );
// };

// export default Posts;



// import React from 'react';
// import { Grid, CircularProgress } from '@material-ui/core';
// import { useSelector } from 'react-redux';

// import Post from './Post/Post';
// import useStyles from './styles';

// const Posts = ({ setCurrentId }) => {
//   const posts = useSelector((state) => state.posts);
//   const classes = useStyles();

//   return (
//     !posts.length ? <CircularProgress /> : (
//       <Grid className={classes.container} container alignItems="stretch" spacing={3}>
//         {posts.map((post) => (
//           <Grid key={post._id} item xs={12} sm={6} md={6}>
//             <Post post={post} setCurrentId={setCurrentId} />
//           </Grid>
//         ))}
//       </Grid>
//     )
//   );
// };

// export default Posts;
