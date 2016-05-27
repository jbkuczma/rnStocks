'use strict';
// import React from 'react';
//
// import {
//   StyleSheet
// } from 'react-native';

var React = require('react-native');
var {StyleSheet, PixelRatio, Platform} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
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
        backgroundColor: '#2d3336',
    },
    rowContent: {
        color: '#ffff',
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
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    leftNavButton: {
        fontSize: 18,
        marginLeft: 13,
        marginTop: 2,
        color: '#ffff',
    },
    editContainer: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      flexDirection: 'column',
      backgroundColor: '#000',
      paddingLeft: 15,
      paddingRight: 15,
    },
    searchBar: {
      flexDirection: 'row',
      paddingTop: 15,
    },
    searchBarInput: {
      flex: 4,
      flexDirection: 'column',
      height: 40,
      borderColor: '#2d3336',
      borderWidth: 0.5,
      backgroundColor: '#202020',
      borderRadius: 4,
      color: 'white',
      paddingLeft: 10,
    },
});

module.exports = styles;
