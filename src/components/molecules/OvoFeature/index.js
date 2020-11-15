import React from 'react'
import { View, Text, Image } from 'react-native'

const OvoFeature = () => {
  return (
    <View style={{height:58, width:'100%',}}>
    <View style={{flex:1, flexDirection:'row'}}>
      <View style={{flex:1,borderColor:'#f7f7f7', borderBottomWidth:2, borderRightWidth:2}}>
        <View style={{position:'relative', width:'100%'}}>
          <Image source={require('../../../assets/icons/ovo.png')} style={{position:'absolute', width:35, height:35, top:10, left:15}}/>
          <Text style={{fontSize:18, color:'#1c1c1c', fontWeight:'400', alignSelf:'center', top:17}}>IDR 40.000</Text>
        </View>
      </View>
      <View style={{flex:1,borderColor:'#f7f7f7', borderBottomWidth:2, borderRightWidth:2}}>
        <View style={{position:'relative', width:'100%'}}>
          <Image source={require('../../../assets/icons/crown.png')} style={{position:'absolute', width:35, height:35, top:10, left:15}}/>
          <Text style={{fontSize:18, color:'#1c1c1c', fontWeight:'400', alignSelf:'center', top:17, left:9}}>12,284 Points</Text>
        </View>
      </View>
    </View>
  </View>
  )
}

export default OvoFeature
