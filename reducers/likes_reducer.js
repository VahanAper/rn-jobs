import uniqBy from 'lodash/uniqBy';

import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS,
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case LIKE_JOB:
            // Add only jobs not in liked list 
            return uniqBy([
                ...state,
                action.payload,
            ], 'jobkey');
            
        case CLEAR_LIKED_JOBS:
            return action.payload;

        default:
            return state;
    }
};
