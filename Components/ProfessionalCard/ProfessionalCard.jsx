import React, {useState, useEffect} from 'react'
import {  StyleSheet, Text, View,Platform, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {  Thumbnail } from 'native-base';
import { PrimaryColor } from '../../Constants/Colors/Color';
import CustomRating from '../CustomRating/CustomRating';
const ProfessionalCard = (props) => {
    return (
        <>
            <View style={styles.items}>
             <View style={styles.card}>
             <Thumbnail style={{width:60,height:60, }} source={{ uri: props.imgSrc}} />
              <Text style={{fontSize:13, color:PrimaryColor, fontWeight:'bold',marginVertical: 3}}>{props.name}</Text>
              <CustomRating />
              <Text style={{fontSize: 11,paddingTop: 3}}>{props.professional}</Text>
             </View>
              </View>
        </>
    )
}

export default ProfessionalCard

const styles = StyleSheet.create({
    items: {
        width: 165,
        height: 170,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-around",
        marginBottom: 17,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        elevation: 3,
      },
 
      card:{
          flexDirection:'column',
        //   display:'none',
        //   justifyContent:'center',
          alignItems:'center',
      },
     
})