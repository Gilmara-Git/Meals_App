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

import CATEGORIES from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoriesScreen = props =>{

    let TouchGrid = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >=21){       
        TouchGrid = TouchableNativeFeedback;
    }
    
    const renderGridItem = itemData =>{
        return (
            <TouchGrid activeOpacity={0.6}
                    // style={{...styles.gridItem, backgroundColor: itemData.item.color}}
                    onPress={()=>{
                        props.navigation.navigate({routeName:'CategoryMeals'})
                    }} 
                    style={{...styles.gridItem, backgroundColor: itemData.item.color}}
                    >
                   
                       
                    <View style={{...styles.gridItem, backgroundColor: itemData.item.color}}>
                        <Text style={styles.gridText} numberOfLines={2}>{itemData.item.title}</Text>
                    </View>
                </TouchGrid>
                    );
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
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor,

}


const styles =  StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    gridItem:{
        flex: 1,
        height: 150,
        width: 150,
        margin: 15,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 8
    },
    gridText:{
        fontSize: 20,
        padding: 10
    }
});
export default CategoriesScreen;