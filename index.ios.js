'use strict';

var React = require('react-native');
var Grid = require('./components/grid');

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
        React.createElement(Grid, {
          title: 'All the stuff'
        })
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('beautyStash', () => beautyStash);
