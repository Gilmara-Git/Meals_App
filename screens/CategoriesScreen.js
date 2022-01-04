import React from 'react';
import {    
    FlatList
  
} from 'react-native'; 

import  { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props =>{
    const renderGridItem = itemData =>{
        return <CategoryGridTile 
                    title={itemData.item.title}
                    onSelect={()=>{
                        props.navigation.navigate({routeName:'CategoryMeals',
                        params: { categoryId: itemData.item.id}
                    })
                    }}
                    color={itemData.item.color}
                    />
    };

    return (
       
            <FlatList 
                numColumns={2}
                data={CATEGORIES}
                keyExtractor={(item, index)=>item.id}
                renderItem={renderGridItem} 
            />
    );
};

CategoriesScreen.navigationOptions = { 
    headerTitle: "Meal Categories",   
}

export default CategoriesScreen;