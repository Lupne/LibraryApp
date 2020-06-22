import React,{useState} from 'react';
import {View,Text,Button,FlatList,Image,Modal,TextInput} from 'react-native';
import Card from './card'
import Rating from '../graphics/rating'

export default function Direction({navigation}){
  const [DATA,setDATA] = useState([]);
  const [show,setShow] = useState(false);
  fetch('http://3306dfd1592c.ngrok.io/getrev',{
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
          <View style={{alignItems:'center',marginBottomWidth:3,marginBottom:5}}><Text style={{fontSize:17,fontWeight:'bold'}}>{item.title}</Text></View>
          <Text>{item.body}</Text>
          <View style={{flexDirection:'row',borderTopColor:'#eee',borderTopWidth:1,marginTop:2,marginLeft:24}}><Rating star={item.rating}/></View>
        </Card>
        </View>
      )
    }} keyExtractor={item => item._id}/>
    </View>
  )
  else {
    return(
      <View style={{alignItems:'center',marginTop:250}}><Image style={{height:150,width:150}} source={{uri:'https://img.pngio.com/collection-of-free-transparent-logo-book-download-on-ui-ex-png-books-black-and-white-400_400.png'}}/><Text style={{fontSize:15,fontWeight:'bold',fontStyle:'italic'}}>Loading...</Text></View>
    )
  }
}
