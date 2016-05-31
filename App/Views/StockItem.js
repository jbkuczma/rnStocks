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
  RefreshControl,
  TouchableWithoutFeedback,
  ScrollView,
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
            var change = jsonResponse.list.resources[0].resource.fields.change;
            var changePercent = jsonResponse.list.resources[0].resource.fields.chg_percent;
            var price = jsonResponse.list.resources[0].resource.fields.price;
            var dayHigh = jsonResponse.list.resources[0].resource.fields.day_high;
            var dayLow = jsonResponse.list.resources[0].resource.fields.day_low;
            var yearHigh = jsonResponse.list.resources[0].resource.fields.year_high;
            var yearLow = jsonResponse.list.resources[0].resource.fields.year_low;
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

    render(){
        var stock = this.props.stock;
        return(
            <View>
                <TouchableHighlight style={styles.buttonContainer}
                    onPress={this.onPress.bind(this,stock.symbol)}
                >
                    <Text style={styles.rowContent}> {stock.symbol} , {stock.name} </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = StockItem;
