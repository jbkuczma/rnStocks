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
} from 'react-native';

import styles from '../Styles/styles';
import EditStocks from './EditStocks';
import StockItem from './StockItem';
var data = [
        {symbol: "AAPL", name: "Apple"},
        {symbol: "GOOG", name: "Google"},
        {symbol: "NKE", name: "Nike"},
        {symbol: "YHOO", name: "Yahoo"},
        {symbol: "SBUX", name: "Starbucks"},
];

class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
        this.updateItem = this.updateItem.bind(this);
        this.openItem = this.openItem.bind(this);
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <ListView
                    style = {styles.listViewContainer}
                    dataSource = {this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID) =>
                        <StockItem stock={rowData}
                            onPress={() => this.props.onPress(rowData)}
                            // onLongPress={() => this.props.onLongPress(rowData, rowID)}
                        />
                    }
                    // renderHeader = {this._renderHeader.bind(this)}
                />
                <TouchableHighlight
                    style = {[styles.button, styles.newButton]}
                    onPress = {this.openItem}
                    underlayColor = '#99d9f4'
                >
                    <Text style={styles.buttonText}> &#8801; </Text>
                </TouchableHighlight>

            </View>
        )
    }
};

module.exports = MainWindow;
