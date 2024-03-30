import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/MainProject/SplashScreen';
import Home from './src/MainProject/Home';
import Tasks from './src/MainProject/Tasks';
import CreateTasks from './src/MainProject/CreateTasks';

import Settings from './src/MainProject/Settings';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
 
   

  return (

    <NavigationContainer>
 
        <Stack.Screen name= "Splash" component={SplashScreen} />
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} screenOptions={{headerShown: false}}/>
      <Drawer.Screen name="Tasks" component={Tasks} />
      <Drawer.Screen name="CreateTasks" component={CreateTasks} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
      </NavigationContainer>
  );
}
