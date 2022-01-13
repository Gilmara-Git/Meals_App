import React , { useEffect, useCallback } from "react";
import { StyleSheet, View, ScrollView, Image } from 'react-native';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import ListItem from '../components/ListItem';
import { useSelector , useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';


const MealDetailScreen = (props) => {
  // const isFavorite = props.navigation.getParam('isFav');

  const mealId = props.navigation.getParam('mealId');

  const availableMeals = useSelector(state => state.meals.meals);
  const currentMealIsFavorite = useSelector(state=>state.meals.favoriteMeals.some(meal=> meal.id === mealId));
  
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(()=>{
    dispatch(toggleFavorite(mealId));
  },[dispatch, mealId]);

  useEffect(()=>{
    props.navigation.setParams({ isFav: currentMealIsFavorite })
  }, [currentMealIsFavorite]);

  useEffect(()=>{
    props.navigation.setParams({toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler]);
 
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
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const mealTitle =  navigationData.navigation.getParam('mealTitle');
  const isFavorite = navigationData.navigation.getParam('isFav');

  return {  
    headerTitle: mealTitle,
    headerRight: ()=> (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorite"
                          iconName={ isFavorite? "ios-star" : "ios-star-outline" }
                          onPress={toggleFavorite}
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
