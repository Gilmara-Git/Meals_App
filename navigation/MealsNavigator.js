// we will create a stack of pages
// on top of the stack is the page on top
// when we go back it pops the top page and shows the previous page
import React from 'react';
import { Platform, Text } from 'react-native';
import Colors from '../constants/Colors';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer  } from 'react-navigation'; //always import from here no matter what version
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { Ionicons }  from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs" // for android

// createStackNavigator returns a NavigationContainer , so we will store it in a variable
// Then we need to create an AppContainer to put our Navigation container inside the AppContainer

const modalAndroidDefaultIos = Platform.OS === 'android'? 'modal': 'default';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android'? Colors.primaryColor : '',
    },
    headerTitleStyle:{
        fontFamily: 'openSansBold', 
    },
    headerBackTitleStyle:{
        fontFamily: 'openSansRegular'
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({   
    Categories: CategoriesScreen,   
    CategoryMeals: CategoryMealScreen,       
    MealDetail: MealDetailScreen 
}, 
{   
    // initialRouteName: 'Categories',
    mode: modalAndroidDefaultIos,
    defaultNavigationOptions: defaultStackNavOptions
});

const FavoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,    
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    mode: modalAndroidDefaultIos,
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: { 
        screen: MealsNavigator,
        navigationOptions:{
            tabBarLabel: 'Meals',
            tabBarIcon: (tabInfo)=>{
                return <Ionicons name='restaurant' size={20} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' 
            ? <Text style={{fontFamily: 'openSansBold'}}>Meals</Text> :'Meals'
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions:{
            tabBarLabel: 'Favorites',
            tabBarIcon: (tabInfo)=>{
                return <Ionicons name='star' size={20} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.secondaryColor,  // shifitin has to be true
            tabBarLabel: Platform.OS === 'android' 
            ? <Text style={{fontFamily: 'openSansBold'}}>Favorites</Text> :'Favorites'
        }
    }
}

// MealsFavTabNavigator just like the MealsNavigator store a REACT COMPONENT
// Here we are holding a full stack(screen) in one TAB and Favorites screen for now
const MealFavTabNavigator = 
    Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig,
        {
            activeColor: Colors.white,
            shifting: true, // shifting effect when clicking on the Meal or Favorite icon
            // barStyle:{
            //     backgroundColor: Colors.primary // this would be only if the shifting was false
            // }
        }) 
    : createBottomTabNavigator(tabScreenConfig,{
        tabBarOptions: {
            activeTintColor: Colors.secondaryColor,
            labelStyle:{
                fontFamily: 'openSansBold'
            }
        
            // activeBackgroundColor: Colors.primaryColor
        },
       
    })

   const FiltersNavigator =  createStackNavigator({
       Filters: FiltersScreen
    },{
    mode: modalAndroidDefaultIos,
    defaultNavigationOptions: defaultStackNavOptions
});

    const MainNavigator = createDrawerNavigator({   // The tabs will be inside the drawer navigator
        MealsFavs: { 
            screen: MealFavTabNavigator,
            navigationOptions: {
                drawerLabel: "Meals"
            },
           
        },
        Filters: FiltersNavigator
    }, {
        contentOptions:{
            activeTintColor: Platform.OS === 'android' ? Colors.white: Colors.secondaryColor, 
            activeBackgroundColor: Platform.OS === 'android' ? Colors.primaryColor: Colors.white,
            labelStyle: {
                fontFamily: 'openSansBold',       
            }          
        }
    });

export default createAppContainer(MainNavigator); // root navigator  -  entry point to the App
// createStackNavigator/createAppContainer RETURN a React Component, meaning you
// can render it on the App.js 