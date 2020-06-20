import React,{useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default function Help(){
  return(
    <View>
    <TouchableOpacity style={{padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Report a problem</Text></TouchableOpacity>
    <TouchableOpacity style={{padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Help Centre</Text></TouchableOpacity>
    <TouchableOpacity style={{padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Update Account Information</Text></TouchableOpacity>
    </View>
  )
}
