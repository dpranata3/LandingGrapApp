import React, { Component } from 'react'
import { View } from 'react-native'
import MapFeature from '../../../../../components/molecules/MapFeature'
import BikeRideDestFeature from '../../../../organisms/BikeRideDestFeature'

export class Ride extends Component {
  render() {
    return (
      <View style={{flex:1,}}>
        <View style={{flex:1}}>
          <MapFeature/>
        </View>
        <View style={{flex:1, backgroundColor:'white', borderTopLeftRadius:15, borderTopRightRadius:15}}>
          <BikeRideDestFeature/>
        </View>
      </View>
    )
  }
}

export default Ride
