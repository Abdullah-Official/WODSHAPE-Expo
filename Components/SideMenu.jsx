import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'native-base';
import React from 'react';
import { StyleSheet, ImageBackground} from 'react-native';





export default function SideMenu(props) {
        return (
       <DrawerContentScrollView>
           <ImageBackground style={{width: 280,height:250,resizeMode:"contain",backgroundColor:'#32C553'}} source={require('../assets/app-icon.png')}>
           </ImageBackground>
       </DrawerContentScrollView>
      );
    }

    const styles = StyleSheet.create({
  
    });