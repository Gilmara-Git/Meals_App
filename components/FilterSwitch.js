import React from 'react';
import { 
        View, 
        Text, 
        Switch, 
        StyleSheet 
    } from 'react-native';
    import Colors from '../constants/Colors';



const FilterSwitch = (props)=>{
    return (
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          value={props.state}
          onValueChange={props.onChange}
          trackColor={{false: Colors.gray, true: Colors.primaryColor}}
          thumbColor={Platform.OS === 'android'? Colors.primaryColor : Colors.white}
        />
  
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',   
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
      }
  });

  export default FilterSwitch;