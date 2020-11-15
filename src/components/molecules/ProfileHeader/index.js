import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const ProfileHeader = () => {
  return (
    <View style={{padding: 16}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image
            source={require('../../../assets/icons/profileIcon.png')}
            style={{width: 90, height: 90}}
          />
        </View>
        <View style={{paddingLeft:18, position:'relative'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#1c1c1c'}}>Donny Pranata</Text>
          <TouchableOpacity>
            <Text style={{fontSize:16, fontWeight:'normal', left:-4, color:'#676767'}}> Edit Profile</Text>
            <Image 
              source={require('../../../assets/icons/arrow-next.png')}
              style={{width:10, height:10, position:'absolute', top:5, left:70}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProfileHeader
