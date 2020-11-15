import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export class index extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:22,paddingBottom:18, fontWeight:'bold', color:'#1c1c1c'}}>Oops</Text>
        <Image 
          source={require('../../../assets/icons/underConstruction.png')}
          style={{height:180, width:200}}
          resizeMode={'cover'}
        />
        <Text style={{fontSize:22,paddingTop:18, fontWeight:'bold', color:'#1c1c1c'}}>Payment Under Construction!</Text>
      </View>
    )
  }
}

export default index
