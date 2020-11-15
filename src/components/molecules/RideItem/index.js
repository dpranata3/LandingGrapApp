import React from 'react'
import { View, Text, Image } from 'react-native'

const RideItem = (props) => {
  return (
    <View style={{paddingVertical:12, paddingLeft:8}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/icons/pin.png')}
          style={{width: 20, height: 20, marginRight: 14}}
        />
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              color: '#212121',
              fontWeight: 'bold',
              fontSize: 17,
              alignContent: 'center',
            }}>
            {props.title}
          </Text>
          <Text style={{fontSize: 12, color: '#424242', paddingTop: 4}}>
            {props.desc}
          </Text>
        </View>
      </View>
      <View
        style={{borderBottomWidth: 1, borderBottomColor: '#efefef', top: 12}}
      />
    </View>
  );
}

export default RideItem
