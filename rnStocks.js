'use strict';
import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import MainWindow from './App/Views/Main';
import EditStocks from './App/Views/EditStocks';
import StockItemInfo from './App/Views/StockItemInfo';
import styles from './App/Styles/styles';

// var NavigationBarRoute = {
//     LeftButton(route, navigator, index, navState){
//         if(index > 0){
//             return(
//                 <TouchableHighlight
//                     underlayColor='transparent'
//                     onPress={() => {if(index > 0){navigator.pop() } }}
//                 >
//                 <Text style={styles.leftNavButton}> Back </Text>
//                 </TouchableHighlight>
//             )
//         }else{
//             return null;
//         }
//     },
//     RightButton(route, navigator, index, navState){
//         return null;
//     },
//     Title(route, navigator, index, navState){
//         return null;
//     }
// };
//
// class rnStocks extends React.Component {
//
//     renderScene(route, navigator){
//         return <route.component {...route.passProps} navigator = {navigator} />
//     }
//
//     render(){
//         return(
//             <Navigator
//                 initialRoute={{name: 'Main', component: MainWindow}}
//                 renderScene = {this.renderScene}
//                 navigationBar={
//                     <Navigator.NavigationBar
//                         routeMapper={NavigationBarRoute}
//                     />
//                 }
//             />
//         )
//     }
// }

class rnStocks extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
        <Scene key="root">
          <Scene key="Main" title="Your stocks" component={MainWindow} initial={true}/>
          <Scene key="AddSearch" component={EditStocks} hideNavBar={false}/>
          <Scene key="StockItemInfo" component={StockItemInfo} hideNavBar={false}/>
        </Scene>
      </Router>
    )
  }
}

var styles1 = StyleSheet.create({

});

module.exports = rnStocks;
