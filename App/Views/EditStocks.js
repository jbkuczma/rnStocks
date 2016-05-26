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

class EditStocks extends React.Component {

    render() {
        return (
            <View style={styles.editStocks}>
                <Text> It worked! 🤔 </Text>
            </View>
        )
    }

}

module.exports = EditStocks
