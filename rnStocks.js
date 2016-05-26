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

var NavigationBarRoute = {
    LeftButton(route, navigator, index, navState){
        if(index > 0){
            return(
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => {if(index > 0){navigator.pop() } }}
                >
                <Text> Back </Text>
                </TouchableHighlight>
            )
        }else{
            return null;
        }
    },
    RightButton(route, navigator, index, navState){
        return null;
    },
    Title(route, navigator, index, navState){
        return null;
    }
};

class rnStocks extends React.Component {

    renderScene(route, navigator){
        return <route.component {...route.passProps} navigator = {navigator} />
    }

    render(){
        return(
            <Navigator
                initialRoute={{name: 'Main', component: MainWindow}}
                renderScene = {this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarRoute}
                    />
                }
            />
        )
    }
}

module.exports = rnStocks;
