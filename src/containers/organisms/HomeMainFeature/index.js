import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MainFeature from '../../../components/molecules/MainFeature'

export class HomeMainFeature extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={{flexDirection:'row', flexWrap:'wrap',marginTop:18}}>
      <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%',flexWrap:'wrap'}}>
        <MainFeature title="Food" img={require('../../../assets/icons/grabFood.png')} onPress={()=>navigation.navigate('Food')}/>
        <MainFeature title="Mart" img={require('../../../assets/icons/grabMart.png')} onPress={()=>navigation.navigate('Construction')}/>
        <MainFeature title="Express" img={require('../../../assets/icons/grabExpress.png')} onPress={()=>navigation.navigate('Construction')}/>
        <MainFeature title="Pulsa/Token" img={require('../../../assets/icons/grabPulsa.png')} onPress={()=>navigation.navigate('Construction')}/>
        <MainFeature title="Car" img={require('../../../assets/icons/grabCar.png')} onPress={()=>navigation.navigate('Car')}/>
        <MainFeature title="Bike" img={require('../../../assets/icons/grabBike.png')} onPress={()=>navigation.navigate('Bike')}/>
        <MainFeature title="Insurance" img={require('../../../assets/icons/grabInsurance.png')} onPress={()=>navigation.navigate('Construction')}/>
        <MainFeature title="More" img={require('../../../assets/icons/grabMore.png')} onPress={()=>navigation.navigate('Construction')}/>
      </View>        
    </View>
    )
  }
}

export default HomeMainFeature
