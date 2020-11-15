import React from 'react'
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import {Home,Activity,Payment,Messages,Account,Chat,Notification, BikeRide, BikeRent, UnderConstruction, CarRide, CarRent, Food} from '../../containers/pages/index'
import IconBottomNav from '../../components/molecules/IconBottomNav'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

function HomeTab() {
  return (
      <Stack.Navigator initialRouteName={'Navbar'}>
        <Stack.Screen
          name="NavBar"
          component={Router}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
}

function HomeStack(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={HomeTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bike"
          children={BikeTopNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Car"
          children={CarTopNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={{
            headerTitle: 'Kostan Pondok Mungil',
          }}
        />
        <Stack.Screen
          name="Construction"
          component={UnderConstruction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
 
}
function ActivityStack() {
  return (
    <Stack.Navigator initialRouteName={'Activity'}>
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function PaymentStack() {
  return (
    <Stack.Navigator initialRouteName={'Activity'}>
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MessagesStack() {
  return (
    <Stack.Navigator initialRouteName={'Messages'}>
      <Stack.Screen name={"Messages"} children={MessageTopNav} options={{headerTitleAlign:'center', headerStyle:{elevation:0}}}/>
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator initialRouteName={'Account'}>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MessageTopNav(){
  return (
    <TopTab.Navigator
      backBehavior={'home'}
      tabBarOptions={{
        activeTintColor: '#00b14f',
        inactiveTintColor:'grey',
        pressColor:'#666666',
        labelStyle:{
          fontWeight:'bold'
        },
        indicatorStyle:{
          backgroundColor:'#00b14f'
        }
      }}>
      <TopTab.Screen name="Chat" component={Chat}/>
      <TopTab.Screen name="Notification" component={Notification} />
    </TopTab.Navigator>
  );
  
}

function BikeTopNav() {
  return (
    <TopTab.Navigator
      backBehavior={'home'}
      tabBarOptions={{
        activeTintColor: '#00b14f',
        inactiveTintColor:'grey',
        pressColor:'#666666',
        labelStyle:{
          fontWeight:'bold'
        },
        indicatorStyle:{
          backgroundColor:'#00b14f'
        }
      }}>
      <TopTab.Screen name="Ride" component={BikeRide} />
      <TopTab.Screen name="Rent" component={BikeRent} />
    </TopTab.Navigator>
  );
}

function CarTopNav() {
  return (
    <TopTab.Navigator
      backBehavior={'home'}
      tabBarOptions={{
        activeTintColor: '#00b14f',
        inactiveTintColor:'grey',
        pressColor:'#666666',
        labelStyle:{
          fontWeight:'bold'
        },
        indicatorStyle:{
          backgroundColor:'#00b14f'
        }
      }}>
      <TopTab.Screen name="Ride" component={CarRide} />
      <TopTab.Screen name="Rent" component={CarRent} />
    </TopTab.Navigator>
  );
}

function Router() {
  return (
      <BottomTab.Navigator
        initialRouteName={'home'}
        backBehavior={'initialRoute'}
        tabBarOptions={{
          activeTintColor: '#17be62',
          labelStyle: {
            fontWeight: '700',
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <IconBottomNav
                image={
                  focused
                    ? require('../../assets/icons/home-active.png')
                    : require('../../assets/icons/home.png')
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Activity"
          component={ActivityStack}
          options={{
            tabBarIcon: ({focused}) => (
              <IconBottomNav
                image={
                  focused
                    ? require('../../assets/icons/activity-active.png')
                    : require('../../assets/icons/activity.png')
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Payment"
          component={PaymentStack}
          options={{
            tabBarIcon: ({focused}) => (
              <IconBottomNav
                image={
                  focused
                    ? require('../../assets/icons/payment-active.png')
                    : require('../../assets/icons/payment.png')
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Messages"
          component={MessagesStack}
          options={{
            title: 'Messages',
            tabBarIcon: ({focused}) => (
              <IconBottomNav
                image={
                  focused
                    ? require('../../assets/icons/messages-active.png')
                    : require('../../assets/icons/messages.png')
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Account"
          component={AccountStack}
          options={{
            tabBarIcon: ({focused}) => (
              <IconBottomNav
                image={
                  focused
                    ? require('../../assets/icons/account-active.png')
                    : require('../../assets/icons/account.png')
                }
              />
            ),
          }}
        />
      </BottomTab.Navigator>
  );
  
}

export default HomeStack