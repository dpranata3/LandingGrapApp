import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'

const MainFeature = (props) => {
  return (
    <View style={{width: `25%`, alignItems: 'center', marginBottom: 18}}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            width: 58,
            height: 58,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={props.img} style={{height: 50, width: 50}} />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '300',
          textAlign: 'center',
          marginTop: 6,
        }}>
        {props.title}
      </Text>
    </View>
  );
}

export default MainFeature
