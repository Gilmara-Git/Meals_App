import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList

} from 'react-native';
import { MEALS } from '../data/dummy-data'
// console.log('===================MEALS============')
// console.log(MEALS)

const FavoritesScreen = props =>{

    const favMeals = MEALS.filter(meal=> meal.id === 'm1' || meal.id === 'm2');
    console.log('fav', favMeals )


    return (
        <FlatList
            data={favMeals}
            keyExtractor={(item, index)=>item.id}    
            renderItem={(itemData)=><View><Text>{itemData.item.title}</Text></View>}
        />
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

const styles =  StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default FavoritesScreen;