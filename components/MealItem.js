import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity, 
    Platform,
    TouchableNativeFeedback
} from 'react-native';
import Colors  from '../constants/Colors';
import DefaultText from './DefaultText';


const MealItem = (props)=>{
    let MealButton =  TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >=21){
        MealButton = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}> 
            <MealButton
                background={TouchableNativeFeedback.Ripple('#000000')}
                activeOpacity={0.5}
                onPress={props.onSelectMeal}    
            >
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground 
                            style={styles.BGimage} 
                            resizeMode='cover'   
                            source={{uri: props.image}}
                        >
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{props.duration} minutes</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                      
                </View>
            </MealButton>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: Colors.gray,
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 10
    },
    BGimage:{
        width: '100%',
        height: '100%', 
        justifyContent: 'flex-end'
    },
    titleContainer:{
        backgroundColor: Colors.darkTransparent,
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title:{
        textAlign: 'center',
        color: Colors.white,
        fontSize: 22,
        fontFamily: 'openSansBold',   
    },
    mealRow:{      
        flexDirection: 'row',
    
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
        backgroundColor: Colors.gray
        
    }
    

});
export default MealItem;