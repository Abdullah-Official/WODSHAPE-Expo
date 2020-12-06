import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome';
import SideMenu from './Components/SideMenu';
import Information from './screens/Information';
import Goal from './screens/Goal';
import UserLogin from './screens/UserLogin';

export default function App() {
  
const Drawer = createDrawerNavigator();
  return (
    
    <NavigationContainer>
      <Drawer.Navigator drawerContent={ props => <SideMenu {...props}/>}>
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Information" component={Information} />
        <Drawer.Screen name="Goal" component={Goal} />
        <Drawer.Screen name="UserLogin" component={UserLogin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

