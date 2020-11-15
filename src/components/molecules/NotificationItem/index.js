import React from 'react';
import {View, Text, Image} from 'react-native';

const NotificationItem = (props) => {
  return (
    <View style={{padding: 16, flex: 1, position: 'relative'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/icons/mail.png')}
          style={{width: 30, height: 30, marginRight: 18}}
        />
        {props.unread && (
          <View
            style={{
              backgroundColor: 'red',
              height: 8,
              width: 8,
              left: 20,
              top: 3,
              borderRadius: 50,
              position: 'absolute',
              alignSelf: 'baseline',
            }}
          />
        )}

        <View style={{justifyContent: 'center'}}>
          <Text
            numberOfLines={0}
            style={{
              color: '#212121',
              fontWeight: 'bold',
              fontSize: 17,
              alignContent: 'center',
            }}>
            {props.title}
          </Text>
          <Text style={{fontSize: 12, color: '#424242', paddingTop: 4}}>
            {props.desc}
          </Text>
        </View>
      </View>
      <View
        style={{borderBottomWidth: 1, borderBottomColor: '#efefef', top: 12}}
      />
    </View>
  );
};

export default NotificationItem;
