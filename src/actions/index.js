import axios from 'axios';

// Action Type
const FETCH_POSTS = 'FETCH_POSTS';
const CREATE_POST = 'CREATE_POST';
const FETCH_POST = 'FETCH_POST'; 
const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=remiel1';

const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

// Action Creators
const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

const createPost = (props) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request,
  }
}

const deletePost = (id) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}

export {
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST,
  DELETE_POST,
}

export {
  deletePost,
  fetchPost,
  fetchPosts,
  createPost,
}
