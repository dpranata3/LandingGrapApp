import React from 'react'
import {Image, Dimensions } from 'react-native'
const width = Dimensions.get('screen').width
const ScrollBanner = (props) => {
  return (
    <Image
      source={props.img}
      style={{height: 150, width: width, borderRadius: 6, marginRight:16}}
    />
  );
}

export default ScrollBanner
