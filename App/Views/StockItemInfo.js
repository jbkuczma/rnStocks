'use strict';
import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import styles from '../Styles/styles';

GLOBAL = require('./Global');

class StockItemInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            stockInfo: [],
        }
    }

    render(){
        // var stock = this.props.stock;
        var stock = GLOBAL.stock;
        return(
            <View style={styles.testing1}>
                <Text style={styles.testing2}> {stock[0].symbol} </Text>
                <Text style={styles.testing2}> {stock[0].company} </Text>
                <Text style={styles.testing2}> {stock[0].currentPrice} </Text>
                <Text style={styles.testing2}> {stock[0].percentChange} </Text>
                <Text style={styles.testing2}> {stock[0].priceChange} </Text>
                <Text style={styles.testing2}> {stock[0].dailyLow} </Text>
                <Text style={styles.testing2}> {stock[0].dailyHigh} </Text>
                <Text style={styles.testing2}> {stock[0].yearlyLow} </Text>
                <Text style={styles.testing2}> {stock[0].yearlyHigh} </Text>
            </View>
        );
    }
}

module.exports = StockItemInfo;
