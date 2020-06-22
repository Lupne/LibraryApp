import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard,Image } from 'react-native';
import FlatButton from '../graphics/button'

export default function Register({navigation}) {
  const [first,Setfirst] = useState('')
  const [second,Setsecond] = useState('')
  const [dept,Setdept] = useState('')
  const [user,Setusername] = useState('')
  const [pass,Setpassword] = useState('')

  const  register = ()=>{
    try{
      fetch('http://2c728de66d27.ngrok.io/reg',{
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: user,
        password: pass,
        first_name:first,
        last_name:second,
        dept:dept
        })
      }).then(navigation.navigate('log'))
    } catch(e){
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      <View>
      <Image style={{height:150,width:150,marginLeft:60}} source={{uri:'https://img.pngio.com/collection-of-free-transparent-logo-book-download-on-ui-ex-png-books-black-and-white-400_400.png'}}/>
      <TextInput placeholder ='First Name'  onChangeText={text=>Setfirst(text)} style={styles.input}/>
      <TextInput placeholder ='Last Name'  onChangeText={text=>Setsecond(text)} style={styles.input}/>
      <TextInput placeholder ='Department'  onChangeText={text=>Setdept(text)} style={styles.input}/>
      <TextInput placeholder ='Username'  onChangeText={text=>Setusername(text)} style={styles.input} />
      <TextInput placeholder ='Password'  onChangeText={text=>Setpassword(text)} style={styles.input}/>
      <FlatButton text='Register' len={110} PRESS={register}/>
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
    marginTop:60,
  },
});
