import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NotificationItem from '../../../../components/molecules/NotificationItem'
import {ScrollView} from 'react-native-gesture-handler'

export class Notification extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white', flex: 1}}>
        <NotificationItem 
          title="Kamu dapet hadiah promo spesial dari grab..." 
          desc=""
          unread
        />
        <NotificationItem 
          title='Sewa eScooter dan eBike sehemat ini'  
          desc="Cuma Rp13 rb per minggu, kuy lah!"
          unread
        />
        <NotificationItem 
          title='Promo 11.11 udah datang'  
          desc="diskon ongkir s.d 70%"
        />
        <NotificationItem 
          title='Lorem ipsum dolor sit amet.'  
          desc="!"
        />
        <NotificationItem 
          title='Lorem ipsum dolor.'  
          desc="Lorem ipsum dolor."
          unread
        />
        <NotificationItem 
          title='Lorem ipsum dolor.'  
          desc="Lorem ipsum dolor."
        />
        <NotificationItem 
          title='Lorem ipsum dolor.'  
          desc="Lorem ipsum dolor."
          unread
        />
        <NotificationItem 
          title='Lorem ipsum dolor.'  
          desc="Lorem ipsum dolor."
          unread
        />
        <NotificationItem 
          title='Lorem ipsum dolor.'  
          desc="Lorem ipsum dolor."
          unread
        />
        <NotificationItem 
          title='Lorem ipsum dolor.'  
          desc="Lorem ipsum dolor."
        />
        <NotificationItem 
          title='Lorem ipsum dolor.'  
          desc="Lorem ipsum dolor."
        />
      </ScrollView>
    );
  }
}

export default Notification
