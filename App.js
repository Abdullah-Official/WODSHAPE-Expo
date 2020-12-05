import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome';
import SideMenu from './Components/SideMenu';
import Information from './screens/Information';

export default function App() {
  
const Drawer = createDrawerNavigator();
  return (
    
    <NavigationContainer>
      <Drawer.Navigator drawerContent={ props => <SideMenu {...props}/>}>
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Information" component={Information} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

