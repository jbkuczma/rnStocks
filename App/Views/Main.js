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
  StatusBar,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from '../Styles/styles';
import EditStocks from './EditStocks';
import StockItem from './StockItem';
import StockItemInfo from './StockItemInfo';

var data = [
        {symbol: '^IXIC', name: 'NASDAQ'},
        {symbol: '^DJI', name: 'DOW J'},
        {symbol: '^GSPC', name: 'S&P 500'},
        {symbol: '^NYA', name: 'NYSE'},
];

function getTime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    return hours+':'+minutes;
}

class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(data),
            refreshing: false,
            db: data,
            loaded: false,
        };
        this.getPrice = this.getPrice.bind(this);
    }

    componentWillMount(){
        var newStock = [];
        let newData = this.state.db.slice(0);
            newData.map(function(stock, index){
                newStock = stock;
                var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ stock.symbol + '/quote?format=json&view=detail';
                fetch(url)
                .then((response) => response.json())
                .then((jsonResponse) => {
                    var price = jsonResponse.list.resources[0].resource.fields.price;
                    stock.price = parseFloat(price).toFixed(2);
                    stock.change = parseFloat(jsonResponse.list.resources[0].resource.fields.change).toFixed(2);
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
            });
    }

    getPrice() {
        var newData = this.state.db.slice();
        var newStock = [];
        //map vs forEach?
        var promise = new Promise(
            function(resolve,reject){
                newData.forEach(function(stock,index) {
                    var temp = JSON.parse(JSON.stringify(newData[index]));
                    var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ temp.symbol + '/quote?format=json&view=detail';
                    fetch(url)
                    .then((response) => response.json())
                    .then((jsonResponse) => {
                        var price = parseFloat(jsonResponse.list.resources[0].resource.fields.price).toFixed(2);
                        var change = parseFloat(jsonResponse.list.resources[0].resource.fields.change).toFixed(2);
                        temp.price = price;
                        temp.change = change;
                        newStock.push(temp);
                        return newStock;
                    })
                    .then((stocks) => {
                        if(index === newData.length-1){
                            resolve(stocks);
                        }
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
                });
            });
        return promise;
    }

    onRefresh(){
        let _this = this;
        this.setState({refreshing: true});
        var promise = this.getPrice();
        promise.then(function(theStocks){
            if(theStocks !== undefined){
                if(theStocks.length === 4){
                    _this.setState({
                        db: theStocks,
                        dataSource: _this.state.dataSource.cloneWithRows(theStocks),
                        loaded: true,
                    });
                }
            }
        })
        .catch(function(error){
            console.log(error);
        });
        this.setState({
            refreshing: false
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }
                    style = {styles.listViewContainer}
                    dataSource = {this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID) =>
                        <StockItem
                            stock={rowData}
                            onPress={() => this.props.onPress(rowData)}
                        />
                    }
                />

                <View>
                    <Text style={styles.marketHours}>
                        {(() => {
                            switch(getTime() >= '09:30' && getTime() <= '16:00'){
                                case true: return "Market Open";
                                case false: return "Market Closed"
                            }
                        })()}
                    </Text>
                </View>
                <TouchableHighlight
                    style = {[styles.button, styles.newButton]}
                    onPress = {Actions.AddSearch}
                    underlayColor = '#99d9f4'
                >
                    <Text style={styles.buttonText}> &#8801; </Text>
                </TouchableHighlight>
            </View>
        )
    }
};

module.exports = MainWindow;
