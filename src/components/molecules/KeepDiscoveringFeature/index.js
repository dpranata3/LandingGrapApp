import React from 'react'
import { View, Text, Image } from 'react-native'

const KeepDiscoveringFeature = (props) => {
  return (
    <View style={{padding: 16, flex:1, flexShrink:1}}>
      <View style={{flex:1}}>
        <Image
          source={props.img}
          style={{height: 150, width: '100%', borderRadius: 6}}
          resizeMode={'cover'}
        />
        <View style={{paddingTop:5}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#282828',
            }}>
            {props.title}
          </Text>
        </View>
        <View style={{paddingTop:2, flexDirection:'row', alignItems:'center'}}>
          <Image source={props.subImg} style={{width:12, height:12, marginRight:8}}/>
          <Text style={{fontSize:14, fontWeight:'normal', color:'#676767'}}>
            {props.duration}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default KeepDiscoveringFeature

