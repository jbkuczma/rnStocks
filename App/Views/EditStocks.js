'use strict';
import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Alert,
  ListView,
  StatusBar,
} from 'react-native';

import styles from '../Styles/styles';
import SearchResultItem from './SearchResultItem';

function symbolSuggest(query) {
  var url = 'http://d.yimg.com/aq/autoc?query=' + query + '&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks';
  return fetch(url);
}

class EditStocks extends React.Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            loaded: false,
            text: null,
            helpText: 'Search for a company or ticker',
            dataSource: ds,
        };
    }

    //function will show suggested symbols based on what is typed
    onTypingSymbolSuggest(text){
        if(text.text == ''){
            var helpText = 'Search for a company or ticker';
        }else{
            var helpText = 'Validating input'
        }
        this.setState({
            text: text.text,
            helpText: helpText,
        });
        //begin symbol suggest
        var url = 'http://d.yimg.com/aq/autoc?query=' + text.text + '&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks';
        fetch(url)
        .then((response) => response.text())
        .then((textResponse) => {
            textResponse = textResponse.slice(42,textResponse.length-2); //terrible way of getting the data but it works for now
            var data = JSON.parse(textResponse).ResultSet.Result;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data),
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

    render() {
        return (
            // change color of header area from white
            <View style={styles.editContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                <Text style={styles.helpText}>
                    {this.state.helpText}
                </Text>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchBarInput}
                        autoCapitalize={'characters'}
                        autoFocus={true}
                        placeholder="Search"
                        placeholderTextColor="gray"
                        onChangeText={(text) => this.onTypingSymbolSuggest({text})}
                        value={this.state.text}
                    />
                </View>
                <View style = {styles.suggestions}>
                    <ListView
                        dataSource = {this.state.dataSource}
                        renderRow={(rowData, sectionID, rowID) =>
                            <AddStockItem stock={rowData}
                                onPress={() => this.props.addOnPress(rowData)}
                            />
                        }
                    />
                </View>
            </View>
        )
    }

}

module.exports = EditStocks
