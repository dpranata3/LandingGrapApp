import React, {Component} from 'react';
import {Text, View} from 'react-native';
import KeepDiscoveringFeature from '../../../components/molecules/KeepDiscoveringFeature';

export class HomeKeepDiscoveringFeature extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 12,
            fontWeight: 'bold',
            color: '#3d3d3d',
          }}>
          {' '}
          Keep Discovering{' '}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabMakanthon.png')}
            title="Serbu banyak resto, serbu hadiah emas"
            subImg={require('../../../assets/icons/calendar.png')}
            duration="Until 15 Nov"
          />
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabFinansiasik.png')}
            title="NgeGrab Food pake kartu kredit/debit aja"
            subImg={require('../../../assets/icons/calendar.png')}
            duration="Until 15 Nov"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabPilihanEmak.png')}
            title="Semua promo bulan november ada disini"
            subImg={require('../../../assets/icons/calendar.png')}
            duration="Until 30 Nov"
          />
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabAssist.png')}
            title="Panggil GrabAssitant, ada diskon!"
            subImg={require('../../../assets/icons/calendar.png')}
            duration="Until 30 Nov"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabCeritaGio.png')}
            title="Cerita dari Grab: Gio"
            subImg={require('../../../assets/icons/book.png')}
            duration="2 min read"
          />
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabCation.png')}
            title="Nginep seru dihotel diskon s.d 75%"
            subImg={require('../../../assets/icons/calendar.png')}
            duration="until 30 Nov"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabLokawisata.png')}
            title="Cari tiket wisata jadi lebih murah"
            subImg={require('../../../assets/icons/book.png')}
            duration="1 min read"
          />
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabCovid.png')}
            title="Pantau perkembangan Covid-19 disini!"
            subImg={require('../../../assets/icons/book.png')}
            duration="4 min read"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabRawatRumah.png')}
            title="#YukRawatRumah ada diskon menarik"
            subImg={require('../../../assets/icons/calendar.png')}
            duration="until 30 Nov"
          />
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabFood1.png')}
            title="Order Mangkokku - Arkadia!"
            subImg={require('../../../assets/icons/eat.png')}
            duration="Rice"
          />
        </View>
        <View style={{flexDirection:'row'}}>
          <KeepDiscoveringFeature
            img={require('../../../assets/images/grabFood2.png')}
            title="Order Kopi Kenangan - Pasar Minggu"
            subImg={require('../../../assets/icons/eat.png')}
            duration="Coffee"
          />
          <KeepDiscoveringFeature/>
        </View>
      </View>
    );
  }
}

export default HomeKeepDiscoveringFeature;
