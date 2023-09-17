import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, TOGGLE_ISOPEN } from '../constants/actionTypes';

const initialState = {
  posts: [],
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, posts: action.payload };
    case LIKE:
      return { 
        ...state, 
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) 
      };
    case TOGGLE_ISOPEN:
      return { ...state, isOpen: action.payload };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return { 
        ...state, 
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) 
      };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};


// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, TOGGLE_ISOPEN } from '../constants/actionTypes';

// export default (posts = [], action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return action.payload.map(post => ({ ...post, isOpen: false }));
//     case LIKE:
//       return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
//     case TOGGLE_ISOPEN:
//       return { ...posts, isOpen: action.payload };
//     case CREATE:
//       return [...posts, action.payload];
//     case UPDATE:
//       return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
//     case DELETE:
//       return posts.filter((post) => post._id !== action.payload);
//     default:
//       return posts;
//   }
// };

