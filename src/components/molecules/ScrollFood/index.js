import React from 'react'
import { View, Text, Image } from 'react-native'

const ScrollFood = (props) => {
  return (
    <View
      style={{
        height: 150,
        width: 150,
        borderRadius: 6,
        backgroundColor:'white',
        marginRight:16,
        elevation:1,
      }}>
      <View style={{height: '70%', position:'relative'}}>
        <Image
          source={props.img}
          style={{
            height: undefined,
            width: undefined,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        {props.promo && 
        <View style={{borderRadius:2,backgroundColor:'#f38523', height:15, width:35, justifyContent:'center', alignItems:'center',position:'absolute', alignSelf:'baseline', top:10, left:-3}}>
          <Text style={{fontSize:10, fontWeight:'bold', color:'white'}}>Promo</Text>
        </View>}
      </View>
      <View style={{height: '30%', padding:5, paddingHorizontal:10}}>
        <View style={{flex:1,position:'relative'}}>
        <Text style={{fontSize:17, fontWeight:'bold', overflow:'hidden'}} numberOfLines={1}>{props.title}</Text>
          <View style={{borderRadius:2,backgroundColor:'white', height:15, width:35, justifyContent:'center', alignItems:'center',position:'absolute', top:-25, alignSelf:'flex-end'}}>
            <Text style={{fontSize:10, fontWeight:'bold'}}>{props.distance}</Text>
          </View>
        </View>
        <View style={{flex:1, position:'relative', paddingTop:2}}>
        <Text style={{fontSize:14, fontWeight:'600', color:'#676767',overflow:'hidden', paddingLeft:15}} numberOfLines={1}>{props.desc}</Text>
          <Image source={require('../../../assets/icons/archivePin.png')} style={{height:14, width:14, position:'absolute', top:3}}/>
        </View>
      </View>
    </View>
  );
}

export default ScrollFood
