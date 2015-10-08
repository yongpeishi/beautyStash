var React = require('react-native');

var {
  TouchableHighlight,
  Text
} = React;

var Button = React.createClass( { displayName: 'Button',
  render: function() {
    return React.createElement(TouchableHighlight, {
      onPress: this.props.onPressHandler,
      style: style.button
    },
    React.createElement(Text, {
      style: style.buttonText
    }, this.props.text))
  }
});

var style = {
  button: {
    width: 150,
    backgroundColor: "#eeeeee",
    borderRadius: 50
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20
  }
}

module.exports = Button;
