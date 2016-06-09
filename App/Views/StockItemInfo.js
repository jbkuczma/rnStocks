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
            <View style={styles.infoContainer}>
                <View style={styles.infoRowHeadFirst}>
                    <Text style={styles.leftInfo}> {stock[0].company} </Text>
                    <Text style={styles.rightInfoSymbol}> {stock[0].symbol} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> Currently </Text>
                    <Text style={styles.rightInfo}> {stock[0].currentPrice} </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> Change % </Text>
                    <Text style={(() => {
                        switch(stock[0].percentChange === undefined){ //this is messy but it works
                            case true: return null;
                                case false: switch (stock[0].percentChange.charAt(0) == '-') {
                                    case true:                   return styles.rightInfoLoss;
                                    case false:                  switch (stock[0].percentChange.charAt(0) == '+') { //needed another switch statement since if a cell was clicked and '+' was the first char already, another '+' would be added
                                        case true:  return styles.rightInfoGain;
                                        case false: stock[0].percentChange = '+'+stock[0].percentChange; return styles.rightInfoGain;
                                    }
                                }
                            }
                        })()}>
                        {stock[0].percentChange}
                    </Text>
                </View>
                <View style={styles.infoRowHead}>
                    <Text style={styles.leftInfo}> Change $ </Text>
                    <Text style={(() => {
                        switch(stock[0].priceChange === undefined){ //this is messy but it works
                            case true: return null;
                                case false: switch (stock[0].priceChange.charAt(0) == '-') {
                                    case true:                   return styles.rightInfoLoss;
                                    case false:                  switch (stock[0].priceChange.charAt(0) == '+') { //needed another switch statement since if a cell was clicked and '+' was the first char already, another '+' would be added
                                        case true:  return styles.rightInfoGain;
                                        case false: stock[0].priceChange = '+'+stock[0].priceChange; return styles.rightInfoGain;
                                    }
                                }
                            }
                        })()}>
                        {stock[0].priceChange}
                    </Text>
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
