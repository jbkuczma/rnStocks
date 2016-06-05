'use strict';
import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from '../Styles/styles';
import StockItemInfo from './StockItemInfo';
GLOBAL = require('./Global');

const goToStockInfo = () => Actions.StockItemInfo({stock: GLOBAL.stock});

// shoutout to StackOverflow for this one
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

class StockItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            stockInfo: [],
        }
    }

    componentWillMount(){
        this.initialFetch("GOOG"); //hackish way of solving problem. seems to force stocks to display price regardless of string provided. do not like this solution though
    }

    onPress(stock){
        if(!this.state.ready){
            this.fetchData(stock.symbol);
        }
        this.onPress2();
    }
    //actual opening of new view => StockItemView
    onPress2(){
        if(this.state.ready){
            GLOBAL.stock = this.state.stockInfo;
            Actions.StockItemInfo({stock: GLOBAL.stock});
        }
    }

    initialFetch(stock){
        var data = [];
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
            });
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
                var price = formatNumber(parseFloat(jsonResponse.list.resources[0].resource.fields.price).toFixed(2));
                var dayHigh = formatNumber(parseFloat(jsonResponse.list.resources[0].resource.fields.day_high).toFixed(2));
                var dayLow = formatNumber(parseFloat(jsonResponse.list.resources[0].resource.fields.day_low).toFixed(2));
                var yearHigh = formatNumber(parseFloat(jsonResponse.list.resources[0].resource.fields.year_high).toFixed(2));
                var yearLow = formatNumber(parseFloat(jsonResponse.list.resources[0].resource.fields.year_low).toFixed(2));
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
        // const goToStockInfo = () => Actions.StockItemInfo({stock: GLOBAL.stock});
        return(
            <View>
                <TouchableHighlight style={styles.buttonContainer}
                    // onPress={goToStockInfo}
                    onPress={this.onPress.bind(this,stock)}
                >
                    <View style={styles.rowContainer}>
                        <View style={styles.row}>
                            <Text style={styles.name}> {stock.name}
                            </Text>
                            <View style={styles.price}>
                                <Text style={styles.priceText}>
                                    {(() => {
                                        switch (stock.price === undefined) {
                                            case true: return null;
                                            case false: return formatNumber(stock.price);
                                        }
                                    })()}
                                </Text>
                            </View>
                            <Text style={(() => {
                                switch(stock.change === undefined){ //this is messy but it works
                                    case true: return null;
                                        case false: switch (stock.change.charAt(0) == '-') {
                                            case true:                   return styles.changeRed;
                                            case false:                  switch (stock.change.charAt(0) == '+') { //needed another switch statement since if a cell was clicked and '+' was the first char already, another '+' would be added
                                                case true:  return styles.changeGreen;
                                                case false: stock.change = '+'+stock.change; return styles.changeGreen;
                                            }
                                        }
                                    }
                                })()}>
                                {stock.change}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.separator}/>
            </View>
        );
    }
}

module.exports = StockItem;
