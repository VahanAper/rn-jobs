import {
    compose,
    createStore,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {
    persistStore,
} from 'redux-persist';
import {
    AsyncStorage,
} from 'react-native';

import reducers from '../reducers';

const store = createStore(
    reducers,
    // Default state is empty object
    {},
    compose(
        applyMiddleware(thunk)
    ),
);

persistStore(
    store,
    null,
    () => {
        store.getState().likedJobs;
    }
);

export default store;
