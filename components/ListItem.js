import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const ListItem = (props)=>{
    return (
          <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
          </View>)
  }
  
  const styles =  StyleSheet.create({
    listItem:{
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: Colors.darkTransparent,
        borderWidth: 1,
        padding: 8
      }
  });

  export default ListItem;