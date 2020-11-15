import React from 'react'
import { View, TouchableOpacity, Image,TextInput } from 'react-native'

const SearchFeature = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#f7f7f7',
          width: 30,
          alignItems: 'center',
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/qrIcon.png')}
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', position: 'relative'}}>
        <TextInput
          placeholder={'Offers, food, and places to go'}
          style={{
            backgroundColor: 'white',
            width: '92%',
            paddingHorizontal: 60,
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
          }}
        />
        <Image
          source={require('../../../assets/icons/searchIcon.png')}
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            top: 6,
            left: 40,
          }}
        />
      </View>
    </View>
  );
}

export default SearchFeature
