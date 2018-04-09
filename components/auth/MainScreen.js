import { StackNavigator } from 'react-navigation';
import { SignIn } from './SignIn';
import { Account } from './Account';
import { Loading } from './Loading';

export const MainScreen = StackNavigator(
    {
        Loading: { screen: Loading },
        Account: { screen: Account, path: '/account/:name/:email' },
        SignIn: { screen: SignIn },
    },
    { headerMode: 'none' }
);
