import React, { useState } from 'react'
import { Appbar } from 'react-native-paper';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';
import { PrimaryColor } from '../Constants/Colors/Color';

export default HeaderMain = () => {
    const [slide,setSlide] = useState(<Icon name='search'  style={styles.searchIcon} />)
    const navigation = useNavigation()

    const openTextField = () =>{
        return setSlide(
            <TextInput style={{width:'60',backgroundColor: 'transparent' ,color:'#fff', borderColor: 'red'}}  placeholder="Search .."/>
)
    }

    return (
      <>
        <Appbar.Header style={styles.mainHeader}>
      <View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.openDrawer()}>
      <Icon name='menu' style={styles.menuIcon} />
      </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.titleHeader}>WODSHAPE</Text>
      </View>
      <View>
      <TouchableOpacity onPress={openTextField} activeOpacity={0.8}>
      {slide}
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
        fontSize: 28
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
