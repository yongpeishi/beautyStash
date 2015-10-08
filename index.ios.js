/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Button = require('./components/button');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS
} = React;

var beautyStash = React.createClass({
  showAlert: function() {
    return AlertIOS.alert(
        "Alert title",
        "You pressed me. What's up?",
        [
          { text: 'Nothing, just bored.', onPress: function onPress() { return console.log('bored'); } }
        ]
    );
  },
  render: function() {
    return React.createElement(View, { style: styles.container },
        React.createElement(Button, {
          onPressHandler: this.showAlert,
          text: 'I am a button'
        })
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
