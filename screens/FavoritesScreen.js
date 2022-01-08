import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = props =>{

    const favMeals = MEALS.filter(meal=> meal.id === 'm1' || meal.id === 'm2');
    console.log(favMeals, 'favMeasl')
    
    return <MealList listData={favMeals} navigation={props.navigation} />
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

export default FavoritesScreen;