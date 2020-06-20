import React,{useState} from 'react';
import {View,Text,Button,FlatList,Image,Modal,TextInput} from 'react-native';
import Card from './card'

export default function Direction({navigation}){
  const [DATA,setDATA] = useState([]);
  const [show,setShow] = useState(false);
  fetch('http://75063bd96e5b.ngrok.io/getrev',{
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    id:navigation.getParam('key')
    })
  })
  .then((response) => response.json())
  .then((data) => {setDATA(data)})
  if(show===false){
    setTimeout(()=>{
      console.log(DATA)
      setShow(true)
    },5000)
  }
  if(show === true)
  return(
    <View>
    <FlatList data={DATA} renderItem={({item})=>{
      return(
        <View style={{padding:24}}>
        <Card>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
          <View style={{flexDirection:'row',paddingTop:16,borderTopColor:'#eee',borderTopWidth:1,marginTop:2}}><Text>{item.rating}</Text></View>
        </Card>
        </View>
      )
    }} />
    </View>
  )
  else {
    return(
      //loading work
      <View style={{alignItems:'center',justifyContent:'center',marginTop:400}}><Text style={{fontSize:15,fontWeight:'bold',fontStyle:'italic'}}>Loading...</Text></View>
    )
  }
}
