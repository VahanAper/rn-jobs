import uniqBy from 'lodash/uniqBy';

import {
    LIKE_JOB,
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case LIKE_JOB:
            // Add only jobs not in liked list 
            return uniqBy([
                ...state,
                action.payload,
            ], 'jobkey');

        default:
            return state;
    }
};
