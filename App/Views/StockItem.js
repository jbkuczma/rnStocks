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

import styles from '../Styles/styles';
import StockItemInfo from './StockItemInfo';

class StockItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            stockInfo: [],
        }
    }

    componentWillMount(){
        this.fetchData('GOOG'); //hackish way of solving problem. seems to force stocks to display price regardless of string provided. do not like this solution though
    }
    //show more stock information when pressed
    onPress(stock){
        this.fetchData(stock);
        console.log("pressed");
        //should open new view => StockItemInfo
    }

    fetchData(stock){
        var data = [];
        var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ stock + '/quote?format=json&view=detail';
        fetch(url)
        .then((response) => response.json())
        .then((jsonResponse) => {
            var company = jsonResponse.list.resources[0].resource.fields.issuer_name;
            var change = parseFloat(jsonResponse.list.resources[0].resource.fields.change).toFixed(3);
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
            console.log(data);
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

    render(){
        var stock = this.props.stock;
        return(
            <View>
                <TouchableHighlight style={styles.buttonContainer}
                    onPress={this.onPress.bind(this,stock.symbol)}
                >
                    <Text style={styles.rowContent}> {stock.symbol} , {stock.name} => {stock.price}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = StockItem;
