import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import ListItem from '../components/ListItem';


const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
 
  return (
    <ScrollView>
      <Image 
        source={{uri: selectedMeal.imageURL}}
        style={styles.image}
        resizeMode="cover"
        />
  
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration} minutes</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>

      
      <DefaultText style={{...styles.title, marginTop:20 }}>Ingredients</DefaultText>     
        { selectedMeal.ingredients.map(ingredient=>
              <ListItem key={ingredient}>{ingredient}</ListItem>)}
     
      <DefaultText style={styles.title}>Steps</DefaultText>   
         {selectedMeal.steps.map(step=><ListItem key={step}>{step}</ListItem>)}
    
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData, 'navData')
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {  
    headerTitle: selectedMeal.title,
    headerRight: ()=> (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorite"
                          iconName="ios-star"
                          onPress={()=>{console.log("Favorite Star")}}
                    />
                </HeaderButtons>
                )
  };
};

const styles = StyleSheet.create({
  image: {
    width:"100%",
    height: 200
  },
  details:{
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: Colors.darkTransparent
  },
  title:{
    textAlign: 'center',
    fontFamily: 'openSansBold',
    fontSize: 22
  },

 
});
export default MealDetailScreen;
