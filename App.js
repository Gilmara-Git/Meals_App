

import React, {  useState } from 'react';


import  AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import MealsNavigator from './navigation/MealsNavigation';
// This is a REact Component we are rendering on the return


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

  return <MealsNavigator />
}


