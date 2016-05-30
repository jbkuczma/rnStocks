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
} from 'react-native';

import styles from '../Styles/styles';

function symbolSuggest(query) {
  var url = 'http://d.yimg.com/aq/autoc?query=' + query + '&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks';
  return fetch(url);
}

class EditStocks extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            text: null,
            helpText: 'Search for a company or ticker',
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
            console.log(textResponse);
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
            //change color of header area from white
            // have current stock list displayed after >TextInput/>. user should be able to remove stocks from list
            <View style={styles.editContainer}>
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
            </View>
        )
    }

}

module.exports = EditStocks
