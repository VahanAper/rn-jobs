import {
    Permissions,
    Notifications,
} from 'expo';
import axios from 'axios';
import { AsyncStorage } from 'react-native'

// here is used a ready test server
const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    let previousPushToken = await AsyncStorage.getItem('push_token');
    
    console.log('push_token', previousPushToken);
    
    if (previousPushToken) {
        return;
    } else {
        let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
        
        if (status !== 'granted') {
            return;
        }
        
        try {
            let pushToken = await Notifications.getExpoPushTokenAsync();
            
            await axios.post(PUSH_ENDPOINT, {
                token: {
                    token: pushToken,
                },
            });
            
            AsyncStorage.setItem('push_token', pushToken);
        } catch (e) {
            console.error(e);
        }
    }
};
