'use strict';
import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
var data = [
        {ticker: "APPL", company: "Apple"},
        {ticker: "GOOG", company: "Google"},
        {ticker: "NKE", company: "Nike"},
        {ticker: "YHOO", company: "Yahoo"},
        {ticker: "SBUX", company: "Starbucks"},
];
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    scrollViewContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
    },
    listViewContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        backgroundColor: '#EEE',
    },
    header: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#387ef5',
    },
});

class rnStocks extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };

    }

    _renderRow(data, sectionID, rowID){
        return (
            <TouchableHighlight style={styles.buttonContainer}>
                <Text> {data.ticker} , {data.company} </Text>
            </TouchableHighlight>
        );
    }

    _renderHeader(){
        return(
            <Text>
                Testing a header
            </Text>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <ListView
                    style = {styles.listViewContainer}
                    dataSource = {this.state.dataSource}
                    renderRow = {this._renderRow.bind(this)}
                    // renderHeader = {this._renderHeader.bind(this)}
                />
            </View>
        )
    }
};

module.exports = rnStocks;
