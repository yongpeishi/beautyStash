/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var GridCollection = require('./components/gridCollection');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS
} = React;

var beautyStash = React.createClass({
  render: function() {
    return React.createElement(View, { style: styles.container },
        React.createElement(GridCollection, {
          title: 'All the stuff'
        })
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('beautyStash', () => beautyStash);
