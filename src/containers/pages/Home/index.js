import React, { Component } from 'react'
import {View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import SearchFeature from '../../../components/molecules/SearchFeature'
import OvoFeature from '../../../components/molecules/OvoFeature'
import TopUpFeature from '../../../components/molecules/TopUpFeature'
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature'
import HomeSpecialFeature from '../../../containers/organisms/HomeSpecialFeature'
import HomeKeepDiscoveringFeature from '../../../containers/organisms/HomeKeepDiscoveringFeature'

export class index extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* header */}
        <View style={{height: 58, width: '100%', backgroundColor: '#33c072'}}>
          <SearchFeature />
        </View>
        {/* content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <OvoFeature />
          <TopUpFeature />
          <HomeMainFeature navigation={navigation}/>
          <View style={{height: 5, backgroundColor: '#f7f7f7',marginTop: 10}}/>
          <HomeSpecialFeature/>
          <HomeKeepDiscoveringFeature/>
        </ScrollView>
      </View>
    );
  }
}

export default index
