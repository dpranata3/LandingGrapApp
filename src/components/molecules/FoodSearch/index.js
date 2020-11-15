import React from 'react'
import { View, Image, TextInput } from 'react-native'

const FoodSearch = () => {
  return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 30,
            paddingLeft: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f7f7f7',
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
          }}>
          <Image
            source={require('../../../assets/icons/searchGrey.png')}
            style={{width: 20, height: 20}}
          />
        </View>

        <View
          style={{
            flex: 1,
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            backgroundColor: '#f7f7f7',
          }}>
          <TextInput
            placeholder="What are you craving?"
            style={{paddingHorizontal: 16, fontSize: 18}}
          />
        </View>
      </View>
  );
}

export default FoodSearch
