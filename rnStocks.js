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
    button: {
        height: 36,
       backgroundColor: '#48BBEC',
       alignSelf: 'stretch',
       justifyContent: 'center'
    },
    newButton: {
        marginBottom: 0,
        borderRadius: 0,

    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
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

   openItem() {
       Alert.alert(
           'Testing', //title
           'This will let you add more stocks to the ones currently displayed', //message
           [
               {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
               {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
               {text: 'OK', onPress: () => console.log('OK Pressed')},
           ] //different button options
       )
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

module.exports = rnStocks;
