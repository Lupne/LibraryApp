import React,{useState} from 'react';
import {View,Text,Button,FlatList,Image,Modal,TextInput} from 'react-native';
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
    fetch('http://75063bd96e5b.ngrok.io/getbook',{
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
      obj.push(test)
    })
  })
  const [DATA,setDATA] = useState([])
  if(sshow===false){
  setTimeout(()=>{
    setDATA(obj)
    setShow(true)
  }, 7000);
}
  const [title,settitle] = useState('')
  const [body,setbody] = useState('')
  const [rating,setrating] = useState('')
  const [modalOpen,setModal] = useState(false)
  const [id,setiD] = useState('')
  const submit = ()=>{
    setModal(false)
    /////[posts request for a review
  }
  if(sshow===true)
  return(
    <View>
    <FlatList
       data={DATA}
       renderItem={({ item }) => {return(
         <Card>
         <Modal style={{borderRadius:3,borderColor:'black',borderWidth:1,height:2}}  visible = {modalOpen} >
         <View>
         <MaterialIcons style={{marginLeft:370}} name="close" size={40} onPress={()=>setModal(false)}/>
         <TextInput style= {{marginLeft:60,marginTop:70,marginBottom:15,borderWidth:2,borderRadius:5,padding:17,width:280}} placeholder='TITLE' value={title} onChangeText={(text)=>settitle(text)}/>
         <TextInput multiline style= {{marginLeft:60,marginTop:20,marginBottom:15,borderWidth:2,borderRadius:5,padding:17,width:280}} placeholder='BODY' value={body} onChangeText={(text)=>setbody(text)}/>
         <TextInput style= {{marginLeft:60,marginTop:20,marginBottom:15,borderWidth:2,borderRadius:5,padding:17,width:280}} placeholder='Rating(1-5)' value={rating} onChangeText={(text)=>setrating(text)}/>
         <MaterialIcons style={{marginLeft:177,marginTop:40}} name="done" size={40} onPress={submit}/>
         </View>
         </Modal>
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
         <View style={{flexDirection:'row'}}><MaterialIcons name="rate-review" size={40} onPress={()=>{setiD(item.key)
           setModal(true)}}/><Text style={{marginTop:6,fontWeight:'bold'}}>   Add a Review</Text></View>
         </View>
         </View>
         </Card>
       )}}
     />
    </View>
  )
  else {
    return(
      <View style={{alignItems:'center',marginTop:250}}><Image style={{height:150,width:150}} source={{uri:'https://img.pngio.com/collection-of-free-transparent-logo-book-download-on-ui-ex-png-books-black-and-white-400_400.png'}}/><Text style={{fontSize:15,fontWeight:'bold',fontStyle:'italic'}}>Loading...</Text></View>
    )
  }
}
