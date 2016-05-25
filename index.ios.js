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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
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
            <TouchableHighlight>
                <Text> {data.ticker} , {data.company} </Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this._renderRow.bind(this)}
                />
            </View>
        )
    }
};

AppRegistry.registerComponent('rnStocks', () => rnStocks);
