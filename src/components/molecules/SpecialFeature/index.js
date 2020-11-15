import React from 'react'
import { View, Text, Image } from 'react-native'

const SpecialFeature = (props) => {
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
            numberOfLines={0}
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#282828',
            }}>
            {props.title}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SpecialFeature
