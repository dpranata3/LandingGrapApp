import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import FoodSearch from '../../../../components/molecules/FoodSearch'
import FoodBannerFeature from '../../../organisms/FoodBannerFeature'
import FoodRewardInfo from '../../../../components/molecules/FoodRewardInfo'
import FoodMainFeature from '../../../organisms/FoodMainFeature'
import MakanthonFeature from '../../../organisms/MakanthonFeature'
import MoreRestaurant from '../../../organisms/MoreRestaurantFeature'

export class Food extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: 78, width: '100%', padding: 16}}>
          <FoodSearch />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingLeft:16}}>
            <FoodBannerFeature />
          </View>
          <View style={{padding:16}}>
            <FoodRewardInfo/>
            <FoodMainFeature/>
          </View>
          <View style={{paddingLeft:16}}>
            <MakanthonFeature/>
          </View>
          <View style={{padding:16}}>
            <MoreRestaurant/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Food
