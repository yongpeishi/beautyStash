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
    height: 100,
    marginBottom: 8,
    backgroundColor: "#eeeeee",
    alignItems: 'center',
    justifyContent: 'center',
//      flexDirection: 'row'
  },
  gridItemText: {
    fontSize: 20
  }
})

module.exports = GridItem;
