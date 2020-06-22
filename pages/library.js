import React,{useState} from 'react';
import { Searchbar } from 'react-native-paper';
import {Text,View,StyleSheet,FlatList,TouchableOpacity,Image,Alert} from 'react-native';
import Card from './card'
import {ratingicons} from '../graphics/rating'
import FlatButton from '../graphics/button'
import { AntDesign } from '@expo/vector-icons';
import UserInfo from './userinfo'

export default function Library({navigation}){
  const [search,setSearch] = useState();
  const [obj,setObj] = useState([])
  const bar = () => {
    fetch('http://2c728de66d27.ngrok.io/findbook',{
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      name:search,
      available:true,
      })
    })
    .then((response) => response.json())
    .then((data)=>setObj(data))
    console.log(obj)
    setSearch('');
  }
  return(
    <View >
    <View>
  <Searchbar
  value={search}
  onChangeText={(text)=>setSearch(text)}
  onIconPress={bar}
  placeholder='Search Books...' />
  <FlatList data={obj} numColumns={2} renderItem={({item})=>{
    return(
      <TouchableOpacity style={{marginLeft:18}}>
      <Card>
      <View><Image style={{width: 180, height: 270,resizeMode : 'stretch' }} source={{uri:item.image}}/></View>
      <View style={{flexDirection:'row',marginTop:5}}><AntDesign name="book" size={30} color='#808080' onPress={()=>{
        if(UserInfo.book>=3)
        {Alert.alert('Error','You already have three books',[{ text: 'OK', onPress: () => console.log('OK Pressed') }],{ cancelable: false });}
        else
        {
          //issue the book request
        }
      }}/><View style={{marginLeft:47,marginRight:47}}><AntDesign name="infocirlce" size={30} color='#808080' /></View><AntDesign name="star" size={30} color='#808080' onPress={()=>navigation.navigate('Review',item)}/></View>
      </Card>
      </TouchableOpacity>
    )
  }} />
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  cardtext:{
    fontWeight:'bold',
    fontSize:15,
  }
})
