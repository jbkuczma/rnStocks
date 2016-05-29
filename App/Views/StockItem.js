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
        Alert.alert(
                stock, //title
                'This will let you see more info regarding selected stock', //message
                [
                    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ] //different button options
            )
    }

    fetchData(stock){

        var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ stock.ticker + '/quote?format=json&view=detail';
        fetch(url)
        .then((response) => response.json())
        .then((jsonResponse) => {
            console.log(jsonResponse);
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
