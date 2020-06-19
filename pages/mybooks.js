import React,{useState} from 'react';
import {View,Text,Button,FlatList,Image} from 'react-native';
import UserInfo from './userinfo'
import Card from './card'
import { AppLoading } from 'expo';

export default function MyBooks(){
  const arr=[];
  const [sshow,setShow] = useState(false)
  UserInfo.issue.map((val)=>{
    if(val!= '-1')
    arr.push(val)
  })
  const obj = [];
  arr.map((book)=>{
    fetch('http://05ccd39cdb52.ngrok.io/getbook',{
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      id: book,
      })
    })
    .then((response) => response.json())
    .then((data) =>{obj.push(data[0])
    })
  })
  const [DATA,setDATA] = useState([])
  if(sshow===false)
  setTimeout(()=>{
    setDATA(obj)
    setShow(true)
  }, 7000);
  if(sshow===true)
  return(
    <View>
    <FlatList
       data={DATA}
       renderItem={({ item }) => {return(
         <Card>
         <Image source={{uri:item.image}} style={{height:100,width:100}} />
         </Card>
       )}}
       keyExtractor={item => item._id}
     />
    </View>
  )
  else {
    return(
      <View style={{alignItems:'center',justifyContent:'center',marginTop:400}}><Text style={{fontSize:30,fontWeight:'bold'}}>Loading...</Text></View>
    )
  }
}
