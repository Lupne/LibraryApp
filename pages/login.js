import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native';
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
      await fetch('http://4adb4b118355.ngrok.io/login',{
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
        fetch('http://4adb4b118355.ngrok.io/getdetails',{
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
        .then((data) =>setUse(data))
        .then(()=>setSwitch(true))
        const det = {'username':use.username,
        'first_name':use.first_name,
        'last_name':use.last_name,
        'dept':use.last_name,
        'fine':use.fine,
        'book':use.book,
        'dp':use.dp,
        'issue':use.issue
      }
      UserInfo.first_name = det.first_name
      UserInfo.last_name = det.last_name
      UserInfo.dept = det.dept
      UserInfo.username = det.username
      UserInfo.book = det.book
      UserInfo.find = det.fine
      UserInfo.issue = det.issue;
        if(swtch===true)
        navigation.navigate('draw',det)
      }
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      <View>
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
    justifyContent: 'center',
  },
  direction:{
    flexDirection:'row',
    width:'80%',
    padding:20,
  }
});
