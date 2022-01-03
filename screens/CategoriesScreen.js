import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native'; 

import  CATEGORIES  from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props =>{

    let TouchGrid = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >=21){       
        TouchGrid = TouchableNativeFeedback;
    }
    
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


const styles =  StyleSheet.create({
    screen:{
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      
    },
    // gridItem:{
    //     flex: 1,
    //     height: 150,
    //     width: 150,
    //     margin: 15,
    //     alignItems: 'flex-end',
    //     justifyContent: 'flex-end',
    //     borderRadius: 8
    // },
    // gridText:{
    //     fontSize: 20,
    //     padding: 10
    // }
});
export default CategoriesScreen;