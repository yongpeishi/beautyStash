var React = require('react-native');
var GridItem = require('./gridItem');

var {
  ListView,
  StyleSheet,
  AlertIOS,
  Text
} = React;

var Grid = React.createClass( { displayName: 'Grid',
  getInitialState: function() {
    var ds = new ListView.DataSource( { rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['Collection 1', 'Collection 2', 'Collection 3', 'Collection 4']),
    };
  },

  render: function() {
    return React.createElement(ListView, {
      contentContainerStyle: style.grid,
      dataSource: this.state.dataSource,
      renderRow: function(rowData) {
        return React.createElement(GridItem, {
          title: rowData,
          onPressHandler: function() {
            return AlertIOS.alert(
                "Alert title",
                "Hello there",
                [
                  { text: 'Dismiss',
                    onPress: function onPress() {
                      return console.log('dismissed alert');
                    }
                  }
                ]
            )
          }
        })
      }
    })
  }

});

var style = StyleSheet.create({
  grid: {
    flexDirection: 'column',
    backgroundColor: "#0000ff",
  }
})

module.exports = Grid;
