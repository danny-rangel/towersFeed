// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import SongList from './src/components/SongList';

const App = () => (
        <View style={{ flex: 1 }}>
            <Header headerText='towers' />
            <SongList />
        </View>
    );

AppRegistry.registerComponent('albums', () => App);
