import { StackNavigator } from 'react-navigation';
import { SignIn } from './SignIn';
import { Chat } from './Chat';
import io from 'socket.io-client';

export const socket = io.connect('https://chat1203.herokuapp.com/');

export const Stack = StackNavigator(
    {
        SignIn: { screen: SignIn },
        Chat: { screen: Chat }
    },
    { headerMode: 'none' }
);
