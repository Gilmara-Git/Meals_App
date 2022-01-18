import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';
import Colors from '../constants/Colors';
import  { LinearGradient } from 'expo-linear-gradient';


const FallBack = (props)=>{
    return (
       <LinearGradient
        colors={[Colors.lightPink, Colors.lightGreen]}
        style={styles.content}
       >
        <View >
            <DefaultText
                 numberOfLines={2}
                 style={styles.text}
            >
                {props.displayText}
            </DefaultText>
        </View>
        </LinearGradient>
       
    )
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

export default FallBack;