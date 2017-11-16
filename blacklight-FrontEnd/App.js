import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import FrontPage from './FrontPage';
import MemoryList from './MemoryList';
import MemoryMap from './MemoryMap';


const Views = StackNavigator({
  Home: { screen: FrontPage },
  MemoryList: { screen: MemoryList },
  MemoryMap: { screen: MemoryMap}
});

export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Views />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
