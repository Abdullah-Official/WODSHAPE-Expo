import SvgUri from 'expo-svg-uri';
import React, {useState, useEffect} from 'react'
import {  StyleSheet, Text, View,Platform, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PrimaryColor } from '../Constants/Colors/Color';
import { PremiumData } from '../Constants/Datas/PremiumData';


const PremiumSubscription = () => {
    
    return (
      <>
        <View style={{ flex: 1 }}>
          
            <View style={{ flex: 0 }}>
              <HeaderMain1 title="Premium Subscription" />
            </View>
            <ScrollView>
            <View
              style={{
                flex: 1,
                backgroundColor: "#f1f1f1",
              }}
            >
              <View style={styles.sectionTop}>
                <Text style={styles.sectionHeading}>
                  Benefits of the Premium Version
                </Text>
                <Text style={{ fontSize: 16 }}>Performance Update</Text>
              </View>
              <View style={styles.boxes}>
                {
                    PremiumData.map((v,i) =>{
                        return(
                            <View key={i} style={styles.items}>
                  <View style={styles.card}>
                    <SvgUri width="40" height="40" source={v.svg} />
                    <Text style={{paddingVertical:14, textAlign:'center'}}>{v.text}</Text>
                  </View>
                </View>
                        )
                    })
                }
              </View>
              <View>
                  <View style={styles.sectionThree}>
                      <Text style={styles.textGreen}>I unlocked all training plans</Text>
                      <Text style={styles.textBlack}>Achieve your goal with targeted training plan</Text>
                  </View>
                  <View style={styles.sectionThree}>
                      <Text style={styles.textGreen}>Discount on hiring Nutritionist and Personal Trainer Food Panel</Text>
                      <Text style={styles.textBlack}>* Points when using application with menu</Text>
                  </View>
              </View>
              <View style={{justifyContent:'center',alignItems:'center', marginVertical: 10,marginTop:15}}>
                  <TouchableOpacity style={styles.premBtnGreen} activeOpacity={0.7}>
                      <Text style={styles.premTxt}>Subscribe to the Monthly Premium Version R$ 29.0</Text>
                  </TouchableOpacity>
                  
              </View>
            <View style={{justifyContent:'center',alignItems:'center', marginVertical: 3,marginBottom:10}}>
            <TouchableOpacity style={styles.premBtnYellow} activeOpacity={0.7}>
                      <Text style={styles.premTxt}>Subscribe to the Annual Premium Version R$ 199,90</Text>
                  </TouchableOpacity>
            </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
}

export default PremiumSubscription

const styles = StyleSheet.create({
    sectionTop:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginBottom:2
    },
    sectionHeading: {
        color: PrimaryColor,
        fontWeight: 'bold',
        fontSize: 20
    },
    items: {
        width: 170,
        height: 120,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-around",
        marginBottom: 10,
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
          alignItems:'center',
      },
      boxes: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingVertical: 15,
        paddingHorizontal:2
      },
      sectionThree : {
          justifyContent:'center',
          alignItems:'center',
          marginTop: -10
      },
      textGreen:{
        textAlign:'center',
        color: PrimaryColor,
        fontSize:18,
        paddingVertical:4
      },
      textBlack:{
          textAlign:'center',
          fontSize: 15.8
      },
      premBtnGreen:{
          backgroundColor: PrimaryColor,
          width:'95%',
          borderRadius: 5,
      },
      premTxt:{
          color: '#fff',
          textAlign:'center',
          paddingVertical: 10,
          paddingHorizontal: 6
      },
      premBtnYellow:{
        backgroundColor: '#FCD53B',
        width:'95%',
        borderRadius: 5
      }
  
});