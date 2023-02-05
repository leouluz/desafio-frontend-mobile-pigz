import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Signin } from '../screens/Signin';
import { Dashboard } from '../screens/DashBoard';

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
    </Navigator>
  )
}