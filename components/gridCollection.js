var React = require('react-native');
var GridItem = require('./gridItem');

var {
  ListView,
  StyleSheet,
  GridItem,
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
      style: style.gridCollection,
      dataSource: this.state.dataSource,
      renderRow: function(rowData) {
        return React.createElement(Text, {
          style: style.row,
        },rowData)
      }
    })
  }

});

var style = StyleSheet.create({
  gridCollection: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#0000ff",
  },
  row: {
    flex: 1,
    backgroundColor: "#9999ff",
  }
})


module.exports = GridCollection;
