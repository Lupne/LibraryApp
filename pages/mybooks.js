import React,{useState} from 'react';
import {View,Text,Button,FlatList,Image} from 'react-native';
import UserInfo from './userinfo'
import Card from './card'
import { AppLoading } from 'expo';
import FlatButton from '../graphics/button'
import { MaterialIcons } from '@expo/vector-icons';

export default function MyBooks(){
  const arr=[];
  const [sshow,setShow] = useState(false)
  UserInfo.issue.map((val)=>{
    if(val._id != '-1')
    arr.push(val)
  })
  const obj = [];
  arr.map((book)=>{
    fetch('http://406d4a96cbbd.ngrok.io/getbook',{
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      _id: book._id,
      })
    })
    .then((response) => response.json())
    .then((data) =>{
      const test ={};
      test.idate = book.idate
      test.rdate = book.rdate
      test.image = data[0].image
      test.name = data[0].name
      test.author = data[0].author
      test.key = data[0]._id
      test.rating = data[0].rating
      console.log(test)
      obj.push(test)
    })
  })
  const [DATA,setDATA] = useState([])
  if(sshow===false){
  setTimeout(()=>{
    setDATA(obj)
    console.log(DATA)
    setShow(true)
  }, 7000);
}
  if(sshow===true)
  return(
    <View>
    <FlatList
       data={DATA}
       renderItem={({ item }) => {return(
         <Card>
         <View style={{flexDirection:'row'}}>
         <View style={{marginVertical:5,marginRight:25}}>
         <Image source={{uri:item.image}} style={{height:250,width:170}} />
         </View>
         <View>
         <Text style={{fontWeight:'bold',fontSize:20,marginTop:7}}>{item.name}  By</Text>
         <Text style={{fontWeight:'bold',fontSize:20,fontStyle:'italic'}}>{item.author}</Text>
         <Text style={{marginTop:12}}>Issued by {UserInfo.first_name} {UserInfo.last_name}</Text>
         <Text style={{marginTop:12}}>Issued Date {item.idate}</Text>
         <Text style={{marginTop:12}}>Return Date {item.rdate}</Text>
         <Text style={{marginTop:12,marginBottom:5}}>Fine Pending 0</Text>
         <View style={{flexDirection:'row'}}><MaterialIcons name="rate-review" size={40}  /><Text style={{marginTop:6,fontWeight:'bold'}}>   Add a Review</Text></View>
         </View>
         </View>
         </Card>
       )}}
     />
    </View>
  )
  else {
    return(
      <View style={{alignItems:'center',justifyContent:'center',marginTop:400}}><Text style={{fontSize:15,fontWeight:'bold',fontStyle:'italic'}}>Loading...</Text></View>
    )
  }
}
