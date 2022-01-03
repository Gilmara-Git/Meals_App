import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    Platform,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';

import Colors from '../constants/Colors';

const CategoryGridTile = (props) =>{

    let TouchGrid = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >=21){       
        TouchGrid = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}> 
            <TouchGrid
                activeOpacity={0.6}
                style={{flex:1}}
                onPress={props.onSelect}
            >
                <View style={{...styles.container,...{backgroundColor: props.color}}}>
                    <Text style={styles.gridText}
                          numberofLine={2}  
                        >
                        {props.title}
                    </Text>
                </View>
            </TouchGrid>

        </View>
            )

};

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        height: 150,
        margin: 15,
        borderRadius: 10,
        overflow: 'hidden'

    },
    container:{
        flex:1,        
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 10
    },
    gridText:{
        fontSize: 22,
        fontFamily: 'openSansBold', 
        textAlign: 'right' 
    }

});

export default CategoryGridTile;