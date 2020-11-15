import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MoreResto from '../../../components/molecules/MoreResto'

export class MoreRestaurantFeature extends Component {
  render() {
    return (
      <View style={{marginBottom: 20}}>
        <View style={{paddingBottom: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#1c1c1c'}}>
            More Restaurant
          </Text>
        </View>
          <MoreResto
            img={require('../../../assets/images/grabFood1.png')}
            title="Nasi Goreng Ayam Keremes"
            category="Chicken Delight"
            rating="4.7"
            distance="0.2 km"
            delivCost="Rp.2500"
            desc="MENANGONGKIR | DISKON10% | GRABEXPERT10" 
          />
          <MoreResto
            img={require('../../../assets/images/grabFood2.png')}
            title="Kopi Kenangan Mantan"
            category="Coffee"
            rating="4.8"
            distance="0.1 km"
            delivCost="Rp.2000"
            desc="MENANGONGKIR | DISKON10% | GRABEXPERT10" 
          />
          <MoreResto
            img={require('../../../assets/images/grabFood3.png')}
            title="Bakmi GM"
            category="Noodles"
            rating="4.7"
            distance="0.2 km"
            delivCost="Rp.2500"
            desc="MENANGONGKIR | DISKON10% | GRABEXPERT10" 
          />
          <MoreResto
            img={require('../../../assets/images/grabFood1.png')}
            title="Nasi Goreng Ayam Keremes"
            category="Chicken Delight"
            rating="4.7"
            distance="0.2 km"
            delivCost="Rp.2500"
            desc="MENANGONGKIR | DISKON10% | GRABEXPERT10" 
          />
          <MoreResto
            img={require('../../../assets/images/grabFood1.png')}
            title="Nasi Goreng Ayam Keremes"
            category="Chicken Delight"
            rating="4.7"
            distance="0.2 km"
            delivCost="Rp.2500"
            desc="MENANGONGKIR | DISKON10% | GRABEXPERT10" 
          />
      </View>
    );
    }
}

export default MoreRestaurantFeature
