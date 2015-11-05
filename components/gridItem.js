var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  Text
} = React;

var GridItem = React.createClass( { displayName: 'GridItem',
  render: function() {
    return React.createElement(TouchableHighlight, {
        onPress: this.props.onPressHandler,
        style: style.gridItem
      },
      React.createElement(Text, {
        style: style.gridItemText
      }, this.props.title)
    )
  }
});

var style = StyleSheet.create({
  gridItem: {
    flex: 1,
    backgroundColor: "#eeeeee",
    borderRadius: 50
  },
  gridItemText: {
    flex: 1,
    fontSize: 20
  }
})

module.exports = GridItem;
