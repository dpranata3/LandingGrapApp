import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import ScrollFood from '../../../components/molecules/ScrollFood'

export class MakanthonFeature extends Component {
  render() {
    return (
      <View style={{marginBottom: 20}}>
        <View style={{paddingBottom:10}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#1c1c1c'}}>Let Makanthon Begin</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}>
          <ScrollFood title="Makan Ayam Goreng" desc="MENANGKANONGKIR" promo distance="0.1 km" img={require('../../../assets/images/grabFood1.png')}/>
          <ScrollFood title="Kopi Kenangan" desc="MENANGKANONGKIR" promo distance="0.2 km" img={require('../../../assets/images/grabFood2.png')}/>
          <ScrollFood title="Bakmi GM" desc="MENANGKANONGKIR" promo distance="0.3 km" img={require('../../../assets/images/grabFood3.png')}/>
          <ScrollFood title="Makan Ayam Goreng" desc="MENANGKANONGKIR" distance="1.2 km" img={require('../../../assets/images/grabFood1.png')}/>
          <ScrollFood title="Makan Ayam Goreng" desc="MENANGKANONGKIR" distance="2.7 km" img={require('../../../assets/images/grabFood1.png')}/>
        </ScrollView>
        
      </View>
    );
  }
}

export default MakanthonFeature
