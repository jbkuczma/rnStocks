'use strict';
import React, {
  Component,
} from 'react';

import {
  ListView,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import StockItemInfo from './StockItemInfo';

import styles from '../Styles/styles';

GLOBAL = require('./Global');

/*
*This item is displayed when user is searching for a stock; results from their query.
*/
class SearchResultItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            stockInfo: [],
        }
    }

    //used in the search window, will add stock to current list viewed on main screen
    moreInfoOnPress(stock){
        if(!this.state.ready){
            this.fetchData(stock);
        }
        this.onPress2();
    }

    onPress2(){
        if(this.state.ready){
            GLOBAL.stock = this.state.stockInfo;
            Actions.StockItemInfo({stock: GLOBAL.stock});
        }
    }

    fetchData(stock){
        var data = [];
        if(!this.state.ready){
            var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ stock + '/quote?format=json&view=detail';
            fetch(url)
            .then((response) => response.json())
            .then((jsonResponse) => {
                var company = jsonResponse.list.resources[0].resource.fields.issuer_name;
                var change = parseFloat(jsonResponse.list.resources[0].resource.fields.change).toFixed(2);
                var changePercent = parseFloat(jsonResponse.list.resources[0].resource.fields.chg_percent).toFixed(2);
                var price = parseFloat(jsonResponse.list.resources[0].resource.fields.price).toFixed(2);
                var dayHigh = parseFloat(jsonResponse.list.resources[0].resource.fields.day_high).toFixed(2);
                var dayLow = parseFloat(jsonResponse.list.resources[0].resource.fields.day_low).toFixed(2);
                var yearHigh = parseFloat(jsonResponse.list.resources[0].resource.fields.year_high).toFixed(2);
                var yearLow = parseFloat(jsonResponse.list.resources[0].resource.fields.year_low).toFixed(2);
                data = [{
                    symbol: stock,
                    company: company,
                    priceChange: change,
                    percentChange: changePercent,
                    currentPrice: price,
                    dailyHigh: dayHigh,
                    dailyLow: dayLow,
                    yearlyHigh: yearHigh,
                    yearlyLow: yearLow
                }];
                this.setState({
                    stockInfo: data,
                    ready: true,
                });
                this.onPress2();
            })
            .catch((error) => {
                Alert.alert(
                    'An error has occurred',
                    'Please try again',
                    [
                        {text: 'Okay', onPress: () => console.log('OK Pressed')},
                    ]
                );
            });
        }
    }

    render(){
        var stock = this.props.stock;
        return(
            <View>
                <TouchableHighlight style={styles.buttonContainer}
                    onPress={this.moreInfoOnPress.bind(this,stock.symbol)}
                >
                    <Text style={styles.rowContent}> {stock.symbol} , {stock.name} </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = SearchResultItem;
