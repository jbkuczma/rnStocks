'use strict';
import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import styles from '../Styles/styles';

function symbolSuggest(query) {
  var url = 'http://d.yimg.com/aq/autoc?query=' + query + '&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks';
  return fetch(url);
}

class EditStocks extends React.Component {

    //function will show suggested symbols based on what is typed
    onTyping(text){
        return text;
    }

    render() {
        return (
            //change color of header area from white
            // have current stock list displayed after >TextInput/>. user should be able to remove stocks from list
            <View style={styles.editContainer}>
                <Text style={styles.helpText}>
                    Type a ticker symbol
                </Text>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchBarInput}
                        autoCapitalize={'characters'}
                        autoFocus={true}
                        placeholder="Ticker Symbol"
                        placeholderTextColor="gray"
                        onChangeText={(text) => this.onTyping({text})}
                        // value={this.state.text}
                    />
                </View>
            </View>
        )
    }

}

module.exports = EditStocks
