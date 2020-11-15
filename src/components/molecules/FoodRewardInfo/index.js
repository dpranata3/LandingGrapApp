import React from 'react'
import { View, Text } from 'react-native'

const FoodRewardInfo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: '#fde7d2',
      }}>
      <View
        style={{
          height: '100%',
          width: '70%',
          borderRightWidth: 1,
          borderStyle: 'dotted',
          padding: 16,
          borderRightColor: '#cd6d5d',
        }}>
        <Text
          style={{
            fontSize: 12,
            paddingLeft: 5,
            fontWeight: 'bold',
            color: '#cd6d5d',
            overflow:'hidden'
          }}
          numberOfLines={1}
          >
          There are 159 food rewards waiting
        </Text>
      </View>
      <View
        style={{
          width: 80,
          height: '100%',
          paddingVertical:5,
          marginLeft:10,
        }}>
        <View
          style={{
            backgroundColor: '#f38523',
            height: '100%',
            width: '100%',
            borderRadius:6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize:14, color:'white', fontWeight:'bold'}}>View</Text>
        </View>
      </View>
    </View>
  );
}

export default FoodRewardInfo
