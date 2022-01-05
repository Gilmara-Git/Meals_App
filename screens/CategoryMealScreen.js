import React from 'react';
import { 
    View,   
    StyleSheet,
    FlatList,

} from 'react-native';


import  { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props =>{
   const catId = props.navigation.getParam('categoryId');
   const displayedMeals = MEALS.filter(
       meal => meal.categoryIds.includes(catId));
  // he did meal.categoryId.indexOf(catId) >=0


    const renderItemMeal = (itemData)=>{
        return <MealItem 
                    title={itemData.item.title} 
                    duration={itemData.item.duration} 
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability}
                    image={itemData.item.imageURL}
                    onSelectMeal={()=>{
                        props.navigation.navigate(
                            { routeName:'MealDetail', 
                              params:{ mealId: itemData.item.id }
                    })    
                }}
                />
    };
 
    return (
        <View style={styles.screen}>
            <FlatList 
                 keyExtractor={(item, index)=>{item.id}}
                 data={displayedMeals}
                 renderItem={renderItemMeal}
                 showVerticalScrollIndicator={false}
                 style={{width: "96%", marginVertical: 8}}
            />
        </View>
    );
};

CategoryMealScreen.navigationOptions = (navigationData)=>{
    // console.log(navigationData, 'navigationData')
    // navigationData also allows me to retrieve params and all other navigation methods

    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    // console.log(selectedCategory, 'selectedCategory')
     
    return  {  headerTitle: selectedCategory.title }
};
   
const styles =  StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
});



export default CategoryMealScreen;