import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Button
} from 'react-native';


import CATEGORIES from '../data/dummy-data';

// console.log(CATEGORIES)

const CategoryMealScreen = props =>{

   const catId = props.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
 
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen !!</Text>
            <Button title="Go to MealDetails" onPress={()=>{
                props.navigation.navigate({routeName: 'MealDetail'});
            }} />
        </View>
    );
};

CategoryMealScreen.navigationOptions = (navigationData)=>{
    // console.log(navigationData, 'navigationData')
    // navigationData also allows me to retrieve params and all other navigation methods

    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    console.log(selectedCategory, 'selectedCategory')
     
    return  {
                headerTitle: selectedCategory.title, 
                
        }
}
   



const styles =  StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default CategoryMealScreen;