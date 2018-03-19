import _ from 'lodash';
import { FETCH_POSTS } from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
        // fetch initial list of all posts
        return _.mapKeys(action.response.payload.data, 'id');
        
    }
}