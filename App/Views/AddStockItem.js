'use strict';
import React, {
  Component,
} from 'react';

import {
  ListView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import styles from '../Styles/styles';

class AddStockItem extends React.Component {

    //used in the search window, will add stock to current list viewed on main screen
    addOnPress(stock){
        console.log("to be added later");
    }

    render(){
        var stock = this.props.stock;
        return(
            <View>
                <TouchableHighlight style={styles.buttonContainer}
                    onPress={this.addOnPress.bind(this,stock.symbol)}
                >
                    <Text style={styles.rowContent}> {stock.symbol} , {stock.name} </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = AddStockItem;
