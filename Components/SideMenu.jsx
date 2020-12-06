import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'native-base';
import React from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import { PrimaryColor } from '../Constants/Colors/Color';





export default function SideMenu(props) {
        return (
       <DrawerContentScrollView>
           <ImageBackground style={{width: 280, marginTop: -4,height:280,resizeMode:"contain",backgroundColor:PrimaryColor}} source={require('../assets/app-icon.png')}>
           </ImageBackground>
       </DrawerContentScrollView>
      );
    }

    const styles = StyleSheet.create({
  
    });