import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SpecialFeature from '../../../components/molecules/SpecialFeature'

export class HomeSpecialFeature extends Component {
  render() {
    return (
      <View style={{paddingTop:10}}>
        <Text style={{fontSize:18,paddingLeft:12, fontWeight:'bold', color:'#3d3d3d'}}> Spesial untuk momen 11.11 </Text>
        <View style={{flexDirection:'row', flex:1}}>
          <SpecialFeature img={require('../../../assets/images/grabExpressFlat.png')} title="OMG, kirim Instant dan Sameday mulai 8rb"/>
          <SpecialFeature img={require('../../../assets/images/topRestoFest.png')} title="Ambil diskon s.d 50% dari Top Resto Fest"/>
        </View>
      </View>
    )
  }
}

export default HomeSpecialFeature
