import React from 'react'
import { View,TextInput, Image } from 'react-native'

const BikeRideSearc = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{width:30, paddingLeft:5,justifyContent:'center', alignItems:'center',backgroundColor:'#f1f1f1', borderTopLeftRadius:6, borderBottomLeftRadius:6}}>
        <Image
          source={require('../../../assets/icons/pin.png')}
          style={{width: 20, height: 20}}
        />
      </View>

      <View style={{flex: 1, borderTopRightRadius: 6, borderBottomRightRadius:6, backgroundColor: '#f1f1f1'}}>
        <TextInput placeholder="Where to?" style={{paddingHorizontal: 16, fontSize:18, fontWeight:'bold'}} />
      </View>
    </View>
  );
}

export default BikeRideSearc
