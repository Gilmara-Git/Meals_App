import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const FavoritesScreen = props =>{
 
    const favMeals = useSelector(state=> state.meals.favoriteMeals);
  
    if(favMeals.length === 0 || !favMeals){
        return (
            <View style={styles.content}>
               <DefaultText
                    numberOfLines={2}
                    style={styles.text}>
                        No favorites Meals. Add them!
                </DefaultText>
            </View>)
    }
  
    
    return <MealList listData={favMeals} navigation={props.navigation} />
};

FavoritesScreen.navigationOptions = (navData)=>{
    return  { 
                headerTitle: 'Your Favorites',
                headerLeft: (
                            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                                <Item 
                                    title="Menu" 
                                    iconName="ios-menu"
                                    onPress={()=>{navData.navigation.toggleDrawer()
                                    }}
                                    />

                            </HeaderButtons>
                )
            }
};

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkTransparent
    },
    text:{
        color: Colors.primaryColor,
        fontSize: 35,
        marginHorizontal: 10,
        textAlign: 'center'
       
    }

});
export default FavoritesScreen;