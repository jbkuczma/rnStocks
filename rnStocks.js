'use strict';
import React, {
  Component,
} from 'react';

import {
  Alert,
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  RefreshControl,
  TouchableWithoutFeedback,
  ScrollView,
  Navigator,
} from 'react-native';

import MainWindow from './App/Views/Main';

class rnStocks extends React.Component {

    renderScene(route, navigator){
        return <route.component {...route.passProps} navigator = {navigator} />
    }
    render(){
        return(
            <Navigator
                initialRoute={{name: 'Main', component: MainWindow}}
                renderScene = {this.renderScene}
            />
        )
    }
}

module.exports = rnStocks;
