import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import ProfileHeader from '../../../components/molecules/ProfileHeader'
import ProfileItem from '../../../components/molecules/ProfileItem'

export class index extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{height: 120, width: '100%'}}>
            <ProfileHeader />
          </View>
          <ProfileItem title="Silver" subInfo="12,500 OVO Points"/>
          <ProfileItem title="Rewards"/>
          <ProfileItem title="Business Profile"/>
          <ProfileItem title="Scheduled"/>
          <ProfileItem title="Cards"/>
          <ProfileItem title="Subscriptions" new/>
          <ProfileItem title="Challenges"/>
          <ProfileItem title="Saved Place"/>
          <ProfileItem title="Help Center"/>
          <ProfileItem title="Drive with Grab"/>
          <ProfileItem title="Emergency Contacts"/>
          <ProfileItem title="Settings"/>
          <ProfileItem title="Share Feedback"/>
        </ScrollView>
      </View>
    );
  }
}

export default index
