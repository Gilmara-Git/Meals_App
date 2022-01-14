import React from 'react';
import { View, StyleSheet} from 'react-native';
import DefaultText from '../components/DefaultText';
import  { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const CategoryMealScreen = props =>{
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);
   
    const displayedMeals = availableMeals.filter(
       meal => meal.categoryIds.includes(catId));
  // he did meal.categoryId.indexOf(catId) >=0

  if(displayedMeals.length === 0){
      return (
          <View style={styles.content}>
              <DefaultText 
                numberOfLines={2}
                style={styles.text}>
                    Check your filters!
              </DefaultText>
          </View>
      )
  }

    return <MealList 
                listData={displayedMeals}
                navigation={props.navigation}
            
            />;
};

CategoryMealScreen.navigationOptions = (navigationData)=>{
    // console.log(navigationData, 'navigationData')
    // navigationData also allows me to retrieve params and all other navigation methods

    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    // console.log(selectedCategory, 'selectedCategory')
     
    return  {  headerTitle: selectedCategory.title }
};
   
const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkTransparent
    },
    text:{
        color: Colors.primaryColor,
        fontSize: 35,
        marginHorizontal: 10,
        textAlign: 'center'
       
    }
});

export default CategoryMealScreen;