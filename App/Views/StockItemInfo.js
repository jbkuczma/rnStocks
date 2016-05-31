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

// <Text> {stockInfo.symbol} </Text>
// <Text> {stockInfo.percentChange} </Text>
// <Text> {stockInfo.priceChange} </Text>
// <Text> {stockInfo.currentPrice} </Text>
// <Text> {stockInfo.dailyHigh} </Text>
// <Text> {stockInfo.dailyLow} </Text>
// <Text> {stockInfo.yearlyHigh} </Text>
// <Text> {stockInfo.yearlyLow} </Text>

class StockItemInfo extends React.Component {

    render(){
        var stockInfo = this.props.data;
        return(
            <View>
                <Text> {stockInfo.company} </Text>
            </View>
        );
    }
}

module.exports = StockItemInfo;
