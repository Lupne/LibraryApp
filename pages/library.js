import React,{useState} from 'react';
import { Searchbar } from 'react-native-paper';
import {Text,View,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native';
import Card from './card'
import {ratingicons} from '../graphics/rating'
import FlatButton from '../graphics/button'
import { AntDesign } from '@expo/vector-icons';

export default function Library({navigation}){
  const [search,setSearch] = useState();
  const [obj,setObj] = useState([])
  const bar = () => {
    fetch('http://75063bd96e5b.ngrok.io/findbook',{
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
      <View style={{flexDirection:'row',marginTop:5}}><AntDesign name="book" size={30} color="black" /><View style={{marginLeft:47,marginRight:47}}><AntDesign name="infocirlce" size={30} color="black" /></View><AntDesign name="star" size={30} color="black" onPress={()=>navigation.navigate('Review',item)}/></View>
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
