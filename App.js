
import React, {  useState } from 'react';
import { StatusBar , Platform} from 'react-native';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

import  AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);

const fontsFetch = ()=>{
  return Font.loadAsync({
    'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'openSansRegular': require('./assets/fonts/OpenSans-Regular.ttf')
  })
};

export default function App() {
  const [isFontsLoaded, setIsFontsLoaded ] = useState(false);
  
  if(!isFontsLoaded){
    return <AppLoading 
    startAsync={fontsFetch} 
    onFinish={()=>setIsFontsLoaded(true)}
    onError={(error)=>{console.log(error)}}  
    />   
  }
  return (
    <Provider store={store}>
      <StatusBar 
        barStyle={Platform.OS === 'android'? 'light-content': 'dark-content'}
        
      />
      <MealsNavigator />
    </Provider>
  )
}

// This is a REact Component we are rendering on the return

