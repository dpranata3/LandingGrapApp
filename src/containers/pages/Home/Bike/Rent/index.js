import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class Rent extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:22,paddingBottom:18, fontWeight:'bold', color:'#1c1c1c'}}>Sorry</Text>
      <Image 
        source={require('../../../../../assets/icons/underConstruction.png')}
        style={{height:180, width:200}}
        resizeMode={'cover'}
      />
      <Text style={{fontSize:22,paddingTop:18, fontWeight:'bold', color:'#1c1c1c'}}>Page is under Construction!</Text>
    </View>
  
    )
  }
}

export default Rent
