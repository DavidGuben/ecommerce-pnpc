import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

import CustomImage from './CustomImage';

export default class ContentContainer extends React.Component {
  render() {
      return (

      
    <View style={styles.contentContainer}>

        <View style={styles.col2}>
            <CustomImage
            header='Shirts'
            paragraph='Dem Nice Shirts' 
            imageSource={require('../img/shirts.jpg')} 
            />
        </View>

        <View style={styles.col1}>
            <CustomImage 
            header='Shoes'
            paragraph='Dem Nice Shoes'
            imageSource={require('../img/shoes.jpg')} 
            />
        </View>

        <View style={styles.contentBanner}>
        <CustomImage 
        header='Suits'
        paragraph='Dem Nice Suits'
        imageSource={require('../img/suit.jpg')} 
        />
        </View>

    </View>
      );
  }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    col1: {
        flex: 1,
        padding: 5,
    },
    col2: {
        flex: 2,
        padding: 5,
    },
    contentBanner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    }
});
