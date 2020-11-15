import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'

const TopUpFeature = () => {
  return (
    <View
    style={{
      height: 50,
      width: '100%',
      alignItems: 'center',
      paddingVertical: 5,
      marginTop: 5,
    }}>
    <View
      style={{
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#f8f8f8',
        height: '100%',
        width: '50%',
      }}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', paddingTop: 4}}>
          <Image
            source={require('../../../assets/icons/topup.png')}
            style={{height: 30, width: 30, marginLeft: 20}}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 8,
              alignSelf: 'center',
            }}>
            Top Up
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '300',
              paddingLeft: 8,
              alignSelf: 'center',
            }}>
            Wallet
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default TopUpFeature
