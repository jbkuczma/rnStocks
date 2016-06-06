'use strict';

var React = require('react-native');
var {StyleSheet, PixelRatio, Platform, Navigator} = React;

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
        marginTop: 20,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        backgroundColor: '#191919',
    },
    rowContent: {
        flex: 1,
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
        fontSize: 14,
        marginLeft: 13,
        marginTop: 2,
        marginTop: 10,
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
      paddingTop: 5,
    },
    searchBarInput: {
      flex: 4,
      flexDirection: 'column',
      height: 40,
      backgroundColor: '#191919',
      borderWidth: 0.5,
      borderRadius: 4,
      color: 'white',
      paddingLeft: 10,
    },
    helpText: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#ffff',
        marginTop: 15,
        marginBottom: 5,
    },
    suggestions: {
        flex: 10,
        marginTop: 10,
    },
    navBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000', // changing navbar color
    },
    navTitle: {
      color: 'white', // changing navbar title color
    },
    routerScene: {
      paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
    },
    /////////
    separator: {
        height: 0.5,
        backgroundColor: '#e5e5e5',
    },
    changeRedMain: {
        color: '#ffff',
        textAlign: 'right',
        backgroundColor: '#F7392E',
        padding: 10,
        borderRadius: 3,
        flex: 1,
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
    },
    changeGreenMain: {
        color: '#ffff',
        textAlign: 'right',
        backgroundColor: '#4BD261',
        padding: 10,
        borderRadius: 3,
        flex: 1,
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
    },
    name: {
        color: '#ffff',
        textAlign: 'left',
        flex: 2,
    },
    price: {
        flex: 2,
    },
    priceText: {
        color: '#ffff',
        textAlign: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: 75, //if i want to add anything after the list change this to 50 or 60
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    ,
    rowContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    marketHours: {
        alignSelf: 'center',
        marginBottom: 10,
        color: '#ffff',
    },
    testing1: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#000",
    },
    infoRowHead1: {
        flexDirection: 'column',
        alignSelf: 'center',
        marginBottom: 20,
        // justifyContent: 'center',
    },
    infoRowHead: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
        // justifyContent: 'center',
    },
    rightInfo: {
        textAlign: 'right',
        color: "#ffff",
    },
    rightInfo1: {
        textAlign: 'center',
        color: "#ffff",
        marginBottom: 20,
    },
    leftInfo: {
        color: '#ffff',
        textAlign: 'left',
    },
});

module.exports = styles;
