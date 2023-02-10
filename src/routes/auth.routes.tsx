import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Signin } from '../screens/Signin';
import { Dashboard } from '../screens/DashBoard';
import { NewDelivery } from '../screens/NewDelivery';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes (){
  return(
    <Navigator 
      screenOptions={{
        headerShown : false
      }}
    >
      <Screen 
        name="SignIn"
        component={Signin}
      />
      <Screen 
        name="DashBoard"
        component={Dashboard}
      />
      <Screen 
        name="NewDelivery"
        component={NewDelivery}
      />
    </Navigator>
  )
}