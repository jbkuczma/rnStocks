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
  RefreshControl,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from 'react-native';

import styles from '../Styles/styles';

class StockItem extends React.Component {
    //show more stock information when pressed
    onPress(stock){
        this.fetchData(stock);
    }

    fetchData(stock){

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
            Alert.alert(
                    "Title", //title
                    'This will let you see more info regarding selected stock', //message
                    [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ] //different button options
                )
        })
        .catch((error) => {
            console.warn(error);
        });
    }

    render(){
        var stock = this.props.stock;
        return(
            <View>
                <TouchableHighlight style={styles.buttonContainer}
                    onPress={this.onPress.bind(this,stock.ticker)}
                >
                    <Text style={styles.rowContent}> {stock.ticker} , {stock.company} </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = StockItem;
