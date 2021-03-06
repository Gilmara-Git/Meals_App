import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    Platform,
    StyleSheet,
    TouchableNativeFeedback,

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
        overflow: Platform.OS === 'android' && Platform.Version >=21 ? 'hidden': 'visible',
        elevation: 5,

    },
    container:{
        flex:1,        
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,       
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 15
    },
    gridText:{
        fontSize: 20,
        fontFamily: 'openSansBold', 
        textAlign: 'right' 
    }

});

export default CategoryGridTile;