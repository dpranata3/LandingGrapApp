import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FoodService from '../../../components/molecules/FoodService'

export class FoodMainFeature extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', flexWrap:'wrap',marginTop:18}}>
        <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%',flexWrap:'wrap'}}>
          <FoodService img={require('../../../assets/icons/foodNearby.png')} title="Nearby"/>
          <FoodService img={require('../../../assets/icons/foodDiskon.png')} title="Parade Diskon"/>
          <FoodService img={require('../../../assets/icons/foodMakanthon.png')} title="Makanthon"/>
          <FoodService img={require('../../../assets/icons/foodBestSeller.png')} title="Best Sellers"/>
          <FoodService img={require('../../../assets/icons/foodKitchen.png')} title="Grab Kitchen"/>
          <FoodService img={require('../../../assets/icons/foodRestoJwara.png')} title="Resto Jawara"/>
          <FoodService img={require('../../../assets/icons/foodSiapMasak.png')} title="#Siap Masak"/>
          <FoodService img={require('../../../assets/icons/foodAll.png')} title="All Cuisines"/>
        </View>
      </View>
    )
  }
}

export default FoodMainFeature
