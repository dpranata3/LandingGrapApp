import React from 'react';
import {View, Text, Image} from 'react-native';

const ProfileItem = (props) => {
  return (
    <View style={{padding: 16, position: 'relative'}}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#efefef',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#666666',
            fontWeight: '100',
            fontSize: 14,
            letterSpacing: 0.3,
            alignContent: 'center',
          }}>
          {props.title}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flex: 0.5,
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {props.new ? (
            <View
              style={{
                backgroundColor: '#ef6451',
                width: 30,
                alignItems: 'center',
                height: '100%',
                borderRadius: 30,
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingTop: 1,
                }}>
                New
              </Text>
            </View>
          ) : (
            <Text
              style={{
                color: '#666666',
                fontWeight: '100',
                fontSize: 14,
                letterSpacing: 0.3,
                left: -5,
              }}>
              {props.subInfo}
            </Text>
          )}

          <Image
            source={require('../../../assets/icons/arrow-next.png')}
            style={{
              width: 10,
              height: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileItem;
