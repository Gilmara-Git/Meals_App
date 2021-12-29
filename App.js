import { StatusBar} from 'expo-status-bar';
import {  useState } from 'react';
import {Text, View } from 'react-native';
import  AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


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
    <View >
      <Text>Open up App.js to start working on your app!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


