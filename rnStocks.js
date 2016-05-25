// //run using react-native run-ios
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   ListView
// } from 'react-native';
//
//
// export default class rnStocks extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });



//see : https://rnplay.org/apps/xnyaYw
// import React, {
//   Component,
// } from 'react';
// import {
//   AppRegistry,
//   Image,
//   ListView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
//
// var data = [
// {"ticker": "APPL", "company": "Apple"},
// {"ticker": "GOOG", "company": "Google"},
// {"ticker": "NKE", "company": "Nike"},
// {"ticker": "YHOO", "company": "Yahoo"},
// {"ticker": "SBUX", "company": "Starbucks"},
// ];
//
// function compare(a,b) {
//     if(a.ticker < b.ticker){
//         return -1;
//     }
//     else if(a.ticker > b.ticker){
//         return 1;
//     }
//     return 0;
// }
//
// class SampleRow extends Component{
//     render(){
//         return(
//             <View style={styles.wrapper}>
//                 <View>
//                     <Text style={styles.text}>{this.props.ticker} , {this.props.company} </Text>
//                 </View>
//             </View>
//         );
//     }
// };
//
// export default class rnStocks extends Component{
//
//     constructor(props){
//         super(props);
//         this.state = {
//             dataSource: new ListView.DataSource({
//             rowHasChanged: (row1, row2) => row1 !== row2,
//         }),
//         loaded: false,
//     };
//     }
//
//     doSomething(){
//         var ds = new ListView.DataSource({
//             sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
//             rowHasChanged: (r1,r2) => r1 !== r2
//         });
//         var {data, sectionIDs} = this.renderListViewData(data.sort(compare));
//
//
//             this.setState({
//                 dataSource: ds.cloneWithRowsAndSections(data,sectionIDs)
//             });
//
//     }
//     componetDidMount(){
//         this.doSomething();
//     }
//
//     renderListViewData(users){
//         var data= {};
//         var sectionIDs= [];
//
//         users.map((user) =>{
//             var section = user.ticker.charAt(0);
//             if(sectionIDs.indexOf(section) === -1){
//                 sectionIDs.push(section);
//                 data[section] = [];
//             }
//             data[section].push(user);
//         });
//         return {data, sectionIDs}
//     }
//
//     renderSectionHeader(data, sectionID){
//         var text;
//         return (
//             <View style={styles.sectionHeader}>
//                 <Text style={styles.sectionHeaderText}>{sectionID}</Text>
//             </View>
//         );
//     }
//
//     renderRow(rowData){
//         return <SmapleRow {...rowData} style={styles.row} />
//     }
//
//     render(){
//         return(
//             <ListView
//                 ref='listView'
//                 automaticallyAdjustContentInsets={false}
//                 dataSource={this.state.dataSource}
//                 renderRow={this.renderRow}
//                 renderSectionHeader={this.renderSectionHeader}
//             />
//         );
//     }
// };
//
// var styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     wrapper: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingRight: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#e9e9e9',
//     },
//     text: {
//         fontSize: 24,
//         fontWeight: '100',
//         color: 'black',
//     },
//     sectionHeader: {
//         backgroundColor: '#48D1CC',
//     },
//     sectionHeaderText: {
//         fontSize: 16,
//         color: 'white',
//         paddingLeft: 10
//     },
// });

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
var data = [
        {ticker: "APPL", company: "Apple"},
        {ticker: "GOOG", company: "Google"},
        {ticker: "NKE", company: "Nike"},
        {ticker: "YHOO", company: "Yahoo"},
        {ticker: "SBUX", company: "Starbucks"},
];
var styles = StyleSheet.create({
    // container: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flex: 1,
    //     flexDirection: 'row',
    //     backgroundColor: '#F5FCFF',
    // },
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
            </View>
        )
    }
};

module.exports = rnStocks;
