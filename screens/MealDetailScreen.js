import React from "react";
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';



const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);


  return (
    <View style={styles.screen}>    
    
        <View><Text>Ingredients</Text></View>
     
          <FlatList
              data={selectedMeal.ingredients}
              keyExtractor={(item, index)=>{ item.id === index}}
              renderItem={(itemData)=>{
                return <Text>{itemData.item}</Text>
              }}  
              />
   
        <View><Text>Steps</Text></View>
          <FlatList 
            data={selectedMeal.steps}
            keyExtractor={(item, index)=> {item.id === index}}
            renderItem={(itemData)=>{
              return <Text>{itemData.item}</Text>
            }}
          />
    
    </View> 
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData, 'navData')
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {  
    headerTitle: selectedMeal.title,
    headerRight: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorite"
                          iconName="ios-star"
                          onPress={()=>{console.log("Favorite Star")}}
                    />
                </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailScreen;
