'use strict';
// import React from 'react';
//
// import {
//   StyleSheet
// } from 'react-native';

var React = require('react-native');
var {StyleSheet} = React;

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
    editStocks: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 15,
    },
});

module.exports = styles;
