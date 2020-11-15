import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const BikeRideDestination = () => {
  return (
      <View style={{flexDirection: 'row', paddingBottom:10}}>
        <TouchableOpacity>
          <View
            style={{
              height: 30,
              width: 50,
              borderWidth: 1,
              borderColor: '#00b14f',
              marginRight: 10,
              borderRadius:6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize:12, color:'#00b14f', fontWeight:'bold'}}>Now</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 30,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize:12, color:'#666666', fontWeight:'bold'}}>Later</Text>
        </View>
      </View>
  );
}

export default BikeRideDestination
