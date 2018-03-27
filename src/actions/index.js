import axios from "axios";

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FARTCLIP1234';

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    export function fetchPosts() {
        return {
            type: FETCH_POSTS,
            payload: request
        };
}