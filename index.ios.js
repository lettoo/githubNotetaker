/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./components/Main');
var {AppRegistry, StyleSheet, NavigatorIOS, Text, View, } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    }
});

var githubNotetaker = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
      style = {styles.container}
      initialRoute={{
        title: 'Github Notetaker',
        component: Main
      }} />
      );
  }
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
