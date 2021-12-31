// we will create a stack of pages
// on top of the stack is the page on top
// when we go back it pops the top page and shows the previous page
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; //always importe from here no matter what version

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

// createStackNavigator returns a NavigationContainer , so we will store it in a variable
// Then we need to create an AppContainer to put our Navigation container inside the AppContainer

const MealsNavigator = createStackNavigator({   
    Categories: { 
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: { 
        screen: CategoryMealScreen,       
    },
    MealDetail: MealDetailScreen 
}, 
{   
    // initialRouteName: 'Categories',
    mode: 'modal',
    defaultNavigationOptions: { 
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor,
    headerTitle: "A Screen"
}}
    
);

export default createAppContainer(MealsNavigator);
// createStackNavigator/createAppContainer RETURN a React Component, meaning you
// can render it on the App.js 