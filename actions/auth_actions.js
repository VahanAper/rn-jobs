import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FB_LOGIN_FAIL,
    FB_LOGIN_SUCCESS,
} from './types';

import {
    FB_APP_ID,
} from '../config';

const doFacebookLogin = async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
        FB_APP_ID,
        permissions: [ 'public_profile' ],
    );
    
    if (type === 'cancel') {
        return dispatch({
            type: FB_LOGIN_FAIL,
        });
    }
    
    await AsyncStorage.setItem('fb_token', token);
    
    dispatch({
        type: FB_LOGIN_SUCCESS,
        payload: token,
    });
};

export const facebookLogin = () => async (dispatch) => {
    let token = await AsyncStorage.getItem('fb_token');
    
    if (token) {
        // Dispatch an action saying FB login is done
        dispatch({
            type: FB_LOGIN_SUCCESS,
            payload: token,
        })
    } else {
        // Start up FB login process
        doFacebookLogin(dispatch);
    }
};
