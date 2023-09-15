import axios from 'axios';

const url = 'http://localhost:1000/posts';
// const url = 'https://port-0-interactionauthoring-30yyr422almi9u466.sel5.cloudtype.app/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
