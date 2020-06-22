import React,{useState} from 'react';
import {Avatar} from 'react-native-elements';
import {Text,View,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
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
      fetch('http://2c728de66d27.ngrok.io/update/'+detail.username,{
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
    <View>
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
    <View style={styles.header}></View>
          <View style={{alignSelf:'center',position: 'absolute',marginTop:130}}>
          <Avatar  rounded size="xlarge" source={{uri: link}} onPress={()=>setUpl(true)}/>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{detail.first_name} {detail.last_name}</Text>
              <Text style={styles.info}>{detail.dept}</Text>
              <Text style={styles.description}>{detail.username}</Text>
              <Text style={styles.description}>{detail.book} Books Issued</Text>
              <Text style={styles.description}>{detail.fine} Pending Fine</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:'white',fontWeight:'bold',textTransform:'uppercase',fontSize:16,textAlign:'center',alignItems: 'center'}}>LogOut</Text>
              </TouchableOpacity>
            </View>
        </View>
  </View>
  )
}

const styles = StyleSheet.create({
  cardtext:{
    fontWeight:"bold",
    fontSize:16,
    borderBottomWidth:2,
    borderBottomColor:'#808080',
    marginBottom:6,
  }, titleText:{
        fontSize:15,
        fontWeight:'bold',
    },
    header:{
   backgroundColor: "#808080",
   height:200,
 },
 avatar: {
   borderWidth: 4,
   borderColor: "white",
   marginBottom:10,
   alignSelf:'center',
   position: 'absolute',
   marginTop:130,
 },
 name:{
   fontSize:22,
   color:"#808080",
   fontWeight:'600',
 },
 body:{
   marginTop:40,
 },
 bodyContent: {
   flex: 1,
   alignItems: 'center',
   padding:30,
 },
 name:{
   fontSize:28,
   color: "#808080",
   fontWeight: "600"
 },
 info:{
   fontSize:16,
   color: "#808080",
   marginTop:10
 },
 description:{
   fontSize:16,
   color: "#808080",
   marginTop:10,
   textAlign: 'center'
 },
 buttonContainer: {
    marginTop:70,
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:8,
    backgroundColor: "#808080",
  },
})
