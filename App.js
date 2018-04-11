import React, { Component } from 'react';
import { StatusBar } from 'react-native';
// import { ListWord } from './components/ListWord';
// import { MainScreen } from './components/auth/MainScreen';
// import { Stack } from './components/realtime/Stack';
// import { Drawer } from './components/Drawer';
// import { Tab } from './components/Tab';
import { Camera } from './components/camera/Camera';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <Camera />;
  }
}