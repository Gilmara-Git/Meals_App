import React from 'react';
import {    
    FlatList  
} from 'react-native'; 

import  { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

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

CategoriesScreen.navigationOptions = (navigationData)=>{  
   return { 
                headerTitle: "Meal Categories", 
                headerLeft: ( 
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item 
                            title="Menu" 
                            iconName="ios-menu"
                            onPress={()=>{
                                navigationData.navigation.toggleDrawer()
                            }}
                            />    
                    </HeaderButtons>
            )
         }   
};

export default CategoriesScreen;