import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BikeRideDestination from '../../../components/molecules/BikeRideDestination'
import BikeRideSearch from '../../../components/molecules/BikeRideSearch'
import RideItem from '../../../components/molecules/RideItem'


export class BikeRideDestFeature extends Component {
  render() {
    return (
      <View style={{padding:16}}>
        <BikeRideDestination />
        <BikeRideSearch />
        <RideItem title="Parking enterance Bekasi station" desc="Jalan Perjuangan, Marga Mulya, Bekasi Utara"/>
        <RideItem title="Kalideres Bus Station" desc="Jalan Daan Mogot , Jakarta Barat"/>
        <RideItem title="Monumen Nasional" desc="Jalan Medan Merdeka Barat, Jakarta"/>
      </View>
    );
  }
}

export default BikeRideDestFeature
