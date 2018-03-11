import {
    persistCombineReducers,
} from 'redux-persist';
import {
    AsyncStorage,
} from 'react-native';


import auth from './auth_reducer';
import jobs from './jobs_reducer';
import likedJobs from './likes_reducer';

const config = {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: [ 'likedJobs' ],
}

export default persistCombineReducers(config, {
    auth,
    jobs,
    likedJobs,
});
