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
import AddStockItem from './App/Views/AddStockItem';
import styles from './App/Styles/styles';

class rnStocks extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
        <Scene key="root">
          <Scene key="Main" title="The Market" component={MainWindow} initial={true}/>
          <Scene key="AddSearch" component={EditStocks} hideNavBar={false}/>
          <Scene key="StockItemInfo" component={StockItemInfo} hideNavBar={false}/>
          <Scene key="AddStockItem" component={AddStockItem} hideNavBar={false}/>
        </Scene>
      </Router>
    )
  }
}

var styles1 = StyleSheet.create({

});

module.exports = rnStocks;
