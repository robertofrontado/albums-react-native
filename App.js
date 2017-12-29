/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () =>  (
  // Gotcha scroll view
  <View style={{ flex: 1 }}>
    <Header headerText={'Album!'}/>
    <AlbumList></AlbumList>
  </View>
);


export default App;
