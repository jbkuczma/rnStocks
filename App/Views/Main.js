'use strict';
import React, {
  Component,
} from 'react';

import {
  Alert,
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  RefreshControl,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import styles from '../Styles/styles';
import EditStocks from './EditStocks';
var data = [
        {ticker: "APPL", company: "Apple"},
        {ticker: "GOOG", company: "Google"},
        {ticker: "NKE", company: "Nike"},
        {ticker: "YHOO", company: "Yahoo"},
        {ticker: "SBUX", company: "Starbucks"},
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

    _renderRow(data, sectionID, rowID){
        return (
            <TouchableHighlight style={styles.buttonContainer}>
                <Text style={styles.rowContent}> {data.ticker} , {data.company} </Text>
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

   // openItem() {
   //     Alert.alert(
   //         'Testing', //title
   //         'This will let you add more stocks to the ones currently displayed', //message
   //         [
   //             {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
   //             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
   //             {text: 'OK', onPress: () => console.log('OK Pressed')},
   //         ] //different button options
   //     )
   // }

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
                    renderRow = {this._renderRow.bind(this)}
                    // renderHeader = {this._renderHeader.bind(this)}
                />
                <TouchableHighlight
                    style = {[styles.button, styles.newButton]}
                    onPress = {this.openItem}
                    underlayColor = '#99d9f4'
                >
                    <Text style={styles.buttonText}> + </Text>
                </TouchableHighlight>

            </View>
        )
    }
};

module.exports = MainWindow;
