import React from 'react'
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderTopWidth: 0.5,
  },
});
