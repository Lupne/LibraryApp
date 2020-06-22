import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard,Image } from 'react-native';
import FlatButton from '../graphics/button'
import Profile from './profile'
import UserInfo from './userinfo'

export default function Login({navigation}) {
  const [user,Setusername] = useState('')
  const [pass,Setpassword] = useState('')
  const [isSign,SetisSign] = useState(false)
  const [use,setUse] = useState({});
  const [swtch,setSwitch] = useState(false)
  const  login = async()=>{
    try{
      await fetch('http://2c728de66d27.ngrok.io/login',{
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: user,
        password: pass
        })
      })
      .then((response) => response.json())
      .then((data) => SetisSign(data))
      if(isSign === true)
      {
        fetch('http://2c728de66d27.ngrok.io/getdetails',{
          method: 'POST',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          username: user,
          })
        })
        .then((response) => response.json())
        .then((data) =>{
          setUse(data)})
        .then(()=>setSwitch(true))
        //setting up info for sending
        const det = {'username':use.username,
        'first_name':use.first_name,
        'last_name':use.last_name,
        'dept':use.dept,
        'fine':use.fine,
        'book':use.book,
        'dp':use.dp,
        'issue':use.issue
      }
      //updating user informating for later use
      UserInfo.first_name = det.first_name
      UserInfo.last_name = det.last_name
      UserInfo.dept = det.dept
      UserInfo.username = det.username
      UserInfo.book = det.book
      UserInfo.find = det.fine
      UserInfo.issue = det.issue;
      UserInfo.dp = det.dp
        if(swtch===true)
        //navigating to profile and sending info across the stack
        setTimeout(()=>{navigation.navigate('draw',det)
        console.log('enter')
      },4000)
      }
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      <View>
      <Image style={{height:150,width:150,marginLeft:60}} source={{uri:'https://img.pngio.com/collection-of-free-transparent-logo-book-download-on-ui-ex-png-books-black-and-white-400_400.png'}}/>
      <TextInput placeholder ='Username'  onChangeText={text=>Setusername(text)} style={styles.input} />
      <TextInput placeholder ='Password'  onChangeText={text=>Setpassword(text)} style={styles.input}/>
      </View>
      <View style={styles.direction}>
      <FlatButton text='Login' len={110} PRESS={login}/>
      <FlatButton text='Register' len={110} PRESS={()=>navigation.navigate('reg')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom:15,
    borderWidth:2,
    borderRadius:5,
    padding:17,
    width:280,
  },
  container:{
    flex:1,
    alignItems: 'center',
    marginTop:160,
  },
  direction:{
    flexDirection:'row',
    width:'80%',
    padding:20,
  }
});
