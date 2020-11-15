import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class Chat extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
        <Image 
          source={require('../../../../assets/icons/chatInfo.png')}
          style={{height:180, width:200}}
          resizeMode={'cover'}
        />
        <Text style={{fontSize:22,paddingTop:18, fontWeight:'bold', color:'#1c1c1c'}}>You'll find all your chat here</Text>
      </View>
    )
  }
}

export default Chat
