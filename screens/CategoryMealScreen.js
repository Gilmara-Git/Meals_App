import React from 'react';

import  { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux'

const CategoryMealScreen = props =>{
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);
   
    const displayedMeals = availableMeals.filter(
       meal => meal.categoryIds.includes(catId));
  // he did meal.categoryId.indexOf(catId) >=0

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
   

export default CategoryMealScreen;