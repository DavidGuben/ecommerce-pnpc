import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from './app/components/Header';
import Banner from './app/components/Banner';
import ContentContainer from './app/components/ContentContainer';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Banner />
        <ContentContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
