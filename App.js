import React, { Component } from 'react';
import { StatusBar } from 'react-native';
// import { ListWord } from './components/ListWord';
import { Stack } from './components/Stack';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <Stack />;
  }
}
