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
        };
        this.updateItem = this.updateItem.bind(this);
        this.openItem = this.openItem.bind(this);
    }

    componentWillMount(){
        this.getPrice();
    }
    getPrice(){
        let newData = this.state.db.slice(0);
            newData.map(function(stock){
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
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(newData),
                db: newData,
            });
            //dataSource updates display after rendering and after I click on an element
            //need the display to update before rendering and without clicking
    }

    _renderHeader(){
        return(
            <Text>
                Testing a header
            </Text>
        );
    }

   updateItem(item, index) {
        var items = this.state.dataSource;
        if (index) {
            items[index] = item;
        }
        else {
            items.push(item)
        }
        this.setState({dataSource: items});
        this.props.navigator.pop();
    }

    openItem(rowData, rowID) {
        this.props.navigator.push({
            name: 'Edit',
            component: EditStocks,
            data: this.state.dataSource,
        });
    }

    onRefresh(){
        this.setState({refreshing: true});
        this.getPrice();
        this.setState({refreshing: false});
    }
    // <View style={styles.header}>
    //
    // </View>
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
