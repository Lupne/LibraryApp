import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function FlatButton({text,len,PRESS}) {
  return (
      <TouchableOpacity style={styles.container} onPress={PRESS}>
      <View style={styles.button}>
      <Text style={{color:'white',fontWeight:'bold',textTransform:'uppercase',fontSize:16,textAlign:'center',alignItems: 'center',width:len,}}>{text}</Text>
      </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#000000',
        marginLeft:10,
        marginRight:10,
  },
    container: {
      alignItems: 'center',
    },
});
