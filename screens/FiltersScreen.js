import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet} from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButtons from  '../components/CustomHeaderButton';
import FilterSwitch from '../components/FilterSwitch';

const FiltersScreen = (props) => {

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  // const toggleSwitch = ()=>{setIsGlutenFree(previousState => !previousState)}
  const { navigation } = props;

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
    console.log(appliedFilters, 'I am in the saveFilters inside the useCall')
    return appliedFilters;
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(()=>{
    navigation.setParams({save: saveFilters })
  }, [saveFilters])

  console.log(saveFilters, 'sou o saveFilters')

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
          label="Gluten-free"
          state={isGlutenFree}
          onChange={newValue=>setIsGlutenFree(newValue)}
        />

        <FilterSwitch
          label="Lactose-free"
          state={isLactoseFree}
          onChange={newValue=>setIsLactoseFree(newValue)}
        />

        <FilterSwitch
          label="Vegan"
          state={isVegan}
          onChange={newValue=>setIsVegan(newValue)}
        />

        <FilterSwitch
          label="Vegatarian"
          state={isVegetarian}
          onChange={newValue=>setIsVegetarian(newValue)}
        />
     
    </View>
  );
};

FiltersScreen.navigationOptions = (navData)=> {
  return {
          headerTitle: 'Filter Meals',
          headerLeft: (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
                          <Item 
                            title="Menu" 
                            iconName='ios-menu'
                            onPress={()=>{navData.navigation.toggleDrawer()
                            }}
                            />
                        </HeaderButtons>
                      ),
          headerRight: (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
                          <Item
                            title="Save"
                            iconName='ios-save'
                            onPress={navData.navigation.getParam('save')
                          }
                          />
                        </HeaderButtons>
                        )
          };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,  
    alignItems: "center",
  },
  title:{
    fontFamily: 'openSansBold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  } 
});

export default FiltersScreen;


