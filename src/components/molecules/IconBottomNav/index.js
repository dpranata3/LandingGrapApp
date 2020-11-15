import React from 'react'
import { View, Image } from 'react-native'

const IconBottomNav = (props) => {
  // const { color, focused } = props.data
  // let colorSelected = focused ? color : 'grey'
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 25, height: 25}}
      />
    </View>
  );
}

export default IconBottomNav
