import React, { useState } from 'react'
import { Appbar } from 'react-native-paper';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';
import { PrimaryColor } from '../../Constants/Colors/Color';

export default HeaderMain1 = () => {
    const navigation = useNavigation()



    return (
      <>
        <Appbar.Header style={styles.mainHeader}>
      <View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
      <Icon name='arrow-back' style={styles.menuIcon} />
      </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.titleHeader}>START RUNNING</Text>
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.8}>
      <Icon name='search'  style={styles.searchIcon} />
      </TouchableOpacity>
      </View>
      
    </Appbar.Header>
      </>
    );
}


const styles = StyleSheet.create({

    mainHeader: {
        backgroundColor: PrimaryColor,
        justifyContent:'space-between',
        alignItems:'center',
    },
    titleHeader : {
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    menuIcon : {
        padding: 8,
        color: '#fff',
        fontSize: 30
    },
    searchIcon : { 
        padding: 8,
        color: '#fff',
        fontSize: 30
    }

});
