import  React, { useState }  from 'react';
import { StyleSheet,View } from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardcontest}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:1,
        elevation:3,
        backgroundColor:'#eee',
        shadowOffset:{width:1,height:1,},
        shadowColor:'#333',
        shadowOpacity:0.3,
        marginTop:20,
    },
})
