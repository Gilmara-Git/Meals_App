import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = (props)=>{

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
                    data={props.listData}
                    renderItem={renderItemMeal}
                    showVerticalScrollIndicator={false}
                    style={{width: "96%", marginVertical: 8}}
                />
            </View>)
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
});

export default MealList;