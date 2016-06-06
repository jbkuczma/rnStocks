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
                <View style={styles.infoRowHead1}>
                    <Text style={styles.leftInfo}> {stock[0].company} </Text>
                    <Text style={styles.rightInfo1}> {stock[0].symbol} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> Currently </Text>
                    <Text style={styles.rightInfo}> {stock[0].currentPrice} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> Change % </Text>
                    <Text style={styles.rightInfo}> {stock[0].percentChange} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> Change $ </Text>
                    <Text style={styles.rightInfo}> {stock[0].priceChange} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> Daily High </Text>
                    <Text style={styles.rightInfo}> {stock[0].dailyHigh} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> Daily Low </Text>
                    <Text style={styles.rightInfo}> {stock[0].dailyLow} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> 52 Week High </Text>
                    <Text style={styles.rightInfo}> {stock[0].yearlyHigh} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> 52 Week Low </Text>
                    <Text style={styles.rightInfo}> {stock[0].yearlyLow} </Text>
                </View>
            </View>
        );
    }
}

module.exports = StockItemInfo;
