import React, { Component } from 'react'
import { Text, View,Dimensions,PermissionsAndroid,StyleSheet } from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';

const width = Dimensions.get('window').width

export class MapFeature extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userLocation: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
  }
  
  componentDidMount(){
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(granted => {
      Geolocation.getCurrentPosition(
        position => {
            this.setState({
              userLocation: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              },
            });
        },
        error => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    })
  }

  render() {
    const {userLocation} = this.state
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <MapView
           style={styles.map}
            region={userLocation}
            provider={'google'}
            scrollEnabled={true}
            showsUserLocation={true}
            zoomControlEnabled
          />
      </View>
    );
  }
}

export default MapFeature

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
