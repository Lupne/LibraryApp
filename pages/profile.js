import React,{useState} from 'react';
import {Avatar} from 'react-native-elements';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import Card from './card'
import FlatButton from '../graphics/button'
import UserInfo from './userinfo'

export default function Profile({navigation}){
  const detail = {
  username:navigation.getParam('username'),
  first_name:navigation.getParam('first_name'),
  last_name:navigation.getParam('last_name'),
  book:navigation.getParam('book'),
  fine:navigation.getParam('fine'),
  dp:navigation.getParam('dp'),
  dept:navigation.getParam('dept')}
  const [link,setLink] = useState(detail.dp)
  const [upl,setUpl] = useState(false)
  const update = ()=>{
    try{
      fetch('http://75063bd96e5b.ngrok.io/update/'+detail.username,{
        method: 'PUT',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: detail.username,
        first_name:detail.first_name,
        last_name:detail.last_name,
        fine:detail.fine,
        book:detail.book,
        dept:detail.dept,
        dp:link,
        })
      })
    } catch(e){
      console.log(e)
    }
  }
  return(
    <View
    style={{alignItems:'center',marginTop:70}}>
    <DialogInput isDialogVisible={upl}
    title={"Upload Avatar"}
            message={"Enter url of new Avatar"}
            hintInput ={"www.xyz.com/abc.png"}
            value={link}
            submitInput={ (inputText) => {setLink(inputText)
            setUpl(false)
            update()} }
            closeDialog={ () => {setUpl(false)}}>
    >
    </DialogInput>
    <Avatar  rounded  source={{uri:link}} size="xlarge" onPress={()=>setUpl(true)}/>
    <Card><Text style={styles.titleText}>{detail.first_name} {detail.last_name}</Text></Card>
    <Card><Text style={styles.titleText}>{detail.username}</Text></Card>
    <Card><Text style={styles.titleText}>{detail.dept}</Text></Card>
    <Card><Text style={styles.titleText}>{detail.book} Books Issued</Text></Card>
    <Card><Text style={styles.titleText}>Rs.{detail.fine} Fine yet to pay</Text></Card>
    <View style={{marginTop:80}}>
    <FlatButton text="Sign Out" len={90} PRESS={()=>console.log(UserInfo)} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  cardtext:{
    fontWeight:"bold",
    fontSize:16,
    borderBottomWidth:2,
    borderBottomColor:'#eee',
    marginBottom:6,
  }, titleText:{
        fontSize:15,
        fontWeight:'bold',
    },
})
