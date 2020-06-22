import React from 'react'
import {View,Text,Image} from 'react-native'

export default function Rating({star}){
    if(star===1){
      return(
        <View style={{flexDirection:'row'}}><Image source={require('./star.png')}/></View>
      )
    }
    if(star===2){
      return(
        <View style={{flexDirection:'row'}}><Image source={require('./star.png')}/><Image source={require('./star.png')}/></View>
      )
    }
    if(star===3){
      return(
        <View style={{flexDirection:'row'}}><Image source={require('./star.png')}/><Image source={require('./star.png')}/><Image source={require('./star.png')}/></View>
      )
    }
    if(star===4){
      return(
        <View style={{flexDirection:'row'}}><Image source={require('./star.png')}/><Image source={require('./star.png')}/><Image source={require('./star.png')}/><Image source={require('./star.png')}/></View>
      )
    }
    if(star===5){
      return(
        <View style={{flexDirection:'row'}}><Image source={require('./star.png')}/><Image source={require('./star.png')}/><Image source={require('./star.png')}/><Image source={require('./star.png')}/><Image source={require('./star.png')}/></View>
      )
    }
}
