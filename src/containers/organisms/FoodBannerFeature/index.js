import React, { Component } from 'react'
import { View } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import ScrollBanner from '../../../components/molecules/ScrollBanner'

export class FoodBannerFeature extends Component {
  render() {
    return (
        <View style={{padding:0}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}>
          <ScrollBanner img={require('../../../assets/images/bannerMakanthon.png')}/>
          <ScrollBanner img={require('../../../assets/images/bannerMakanthon.png')}/>
          <ScrollBanner img={require('../../../assets/images/bannerMakanthon.png')}/>
          <ScrollBanner img={require('../../../assets/images/bannerMakanthon.png')}/>
          <ScrollBanner img={require('../../../assets/images/bannerMakanthon.png')}/>
        </ScrollView>
        </View>
        
  
    )
  }
}

export default FoodBannerFeature
