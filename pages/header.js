import React from 'react'
import {StyleSheet,View,Text,Image,ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}){
    const openMenu = () => {
        navigation.openDrawer();
    }
    return(
      <View>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      </View>
    );
};

const styles = StyleSheet.create({
    Header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headertext:{
        fontWeight:'bold',
        letterSpacing:1,
        color:'#333',
        fontSize:20,
    },
    icon:{
        position:'absolute',
        left:1,
        marginTop:18,
        marginLeft:14
    },
    headicon:{
        width:26,
        height:26,
        marginHorizontal:10,
    },
    headerflex:{
        flexDirection:'row',
    }
})
