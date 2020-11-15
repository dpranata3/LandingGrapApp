import React from 'react'
import { View, Text, Image } from 'react-native'

const MoreResto = (props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginBottom:10}}>
      <View style={{flex: 1, position: 'relative'}}>
        <Image
          source={props.img}
          style={{
            height: 110,
            width: 110,
            borderRadius: 6,
            resizeMode: 'cover',
            flex: 1,
          }}
        />
      </View>
      <View style={{flex: 2, paddingLeft: 15}}>
        <View style={{position: 'relative'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              overflow: 'hidden',
              paddingRight: 15,
            }}
            numberOfLines={1}>
            {props.title}
          </Text>
          <Image
            source={require('../../../assets/icons/verified.png')}
            style={{
              height: 18,
              width: 18,
              position: 'absolute',
              alignSelf: 'flex-end',
            }}
          />
          <Text style={{fontSize: 14, color: '#9a9a9a', paddingTop: 2}}>
            {props.category}
          </Text>
          {/* Location Info */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text
              style={{
                fontSize: 14,
                color: '#9a9a9a',
                paddingLeft: 15,
                paddingRight: 8,
              }}>
              {props.rating}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9a9a9a',
                paddingLeft: 15,
                paddingRight: 8,
              }}>
              {props.distance}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9a9a9a',
                paddingLeft: 15,
                paddingRight: 8,
              }}>
              {props.delivCost}
            </Text>
            <Image
              source={require('../../../assets/icons/rating.png')}
              style={{
                height: 15,
                width: 15,
                position: 'absolute',
                alignSelf: 'flex-end',
              }}
            />
            <Image
              source={require('../../../assets/icons/pinGrey.png')}
              style={{
                height: 15,
                width: 15,
                position: 'absolute',
                left: 38,
              }}
            />
            <Image
              source={require('../../../assets/icons/bike.png')}
              style={{
                height: 15,
                width: 15,
                position: 'absolute',
                left: 94,
              }}
            />
          </View>
          {/* Promo Info */}
          <View style={{flex: 1, position: 'relative', paddingTop: 10}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: '#676767',
                overflow: 'hidden',
                paddingLeft: 15,
              }}
              numberOfLines={1}>
              {props.desc}
            </Text>
            <Image
              source={require('../../../assets/icons/archivePin.png')}
              style={{height: 14, width: 14, position: 'absolute', top: 10}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default MoreResto
