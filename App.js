/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Rain from "./src/component/Rain";
import AppStackNavigator from "./src/router/AppStackNavigator";

type Props = {};

const imgs = [
    require('./src/resources/img/ribbon-1.png'),
    require('./src/resources/img/ribbon-2.png'),
    require('./src/resources/img/ribbon-3.png'),
    require('./src/resources/img/ribbon-4.png'),
    require('./src/resources/img/ribbon-5.png'),
    require('./src/resources/img/ribbon-6.png'),
    require('./src/resources/img/ribbon-7.png'),
    require('./src/resources/img/ribbon-8.png'),
    require('./src/resources/img/ribbon-9.png'),
    require('./src/resources/img/ribbon-10.png'),
    require('./src/resources/img/ribbon-11.png'),
    require('./src/resources/img/ribbon-12.png'),
    require('./src/resources/img/ribbon-13.png'),
    require('./src/resources/img/ribbon-14.png'),
    require('./src/resources/img/ribbon-15.png'),
    require('./src/resources/img/ribbon-16.png'),
    require('./src/resources/img/ribbon-17.png'),
    require('./src/resources/img/ribbon-18.png')];


export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <AppStackNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
