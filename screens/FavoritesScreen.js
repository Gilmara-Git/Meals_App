import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavoritesScreen = props =>{

    const favMeals = MEALS.filter(meal=> meal.id === 'm1' || meal.id === 'm2');
    console.log(favMeals, 'favMeasl')
    
    return <MealList listData={favMeals} navigation={props.navigation} />
};

FavoritesScreen.navigationOptions = (navData)=>{
    return  { 
                headerTitle: 'Your Favorites',
                headerLeft: (
                            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                                <Item 
                                    title="Menu" 
                                    iconName="ios-menu"
                                    onPress={()=>{navData.navigation.toggleDrawer()
                                    }}
                                    />

                            </HeaderButtons>
                )
            }
};

export default FavoritesScreen;