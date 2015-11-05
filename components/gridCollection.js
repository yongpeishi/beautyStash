var React = require('react-native');
var GridItem = require('./gridItem');

var {
  ListView,
  StyleSheet,
  AlertIOS,
  Text
} = React;

var GridCollection = React.createClass( { displayName: 'GridCollection',
  getInitialState: function() {
    var ds = new ListView.DataSource( { rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['Collection 1', 'Collection 2']),
    };
  },

  render: function() {
    return React.createElement(ListView, {
      contentContainerStyle: style.gridCollection,
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
  gridCollection: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: "#0000ff",
  }
})


module.exports = GridCollection;
