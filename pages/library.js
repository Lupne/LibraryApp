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
    fetch('http://3306dfd1592c.ngrok.io/findbook',{
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
  const bookissue = (val)=>{
    for(let i=0;i<3;i++)
    {
      if(UserInfo.issue[i]._id === "-1")
      {
        var currentTime = new Date()
        var month = currentTime.getMonth() + 4
        var monthi = currentTime.getMonth() + 1
        var day = currentTime.getDate()
        var year = currentTime.getFullYear()
        var year2 = currentTime.getFullYear()
        UserInfo.issue[i].idate = day+"/"+monthi+"/"+year
        if(month>12)
        {
          month=month%12;
          year2=year+1;
        }
        console.log(day+"/"+month+"/"+year2)
        UserInfo.issue[i]._id = val;
        UserInfo.issue[i].idate = day+"/"+monthi+"/"+year
        UserInfo.issue[i].rdate = day+"/"+month+"/"+year
        UserInfo.book = UserInfo.book+1;
        fetch('http://3306dfd1592c.ngrok.io/update/'+UserInfo.username,{
          method: 'PUT',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          issue:UserInfo.issue,
          book:UserInfo.book
          })
        })
        break;
      }
    }
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
        {Alert.alert('Error','You already have three books',[{ text: 'OK', onPress: () => console.log(UserInfo) }],{ cancelable: false });}
        else
        {
          bookissue(item.key);
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
