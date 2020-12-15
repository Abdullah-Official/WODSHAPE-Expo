import React, {useState, useEffect} from 'react'
import {  StyleSheet, Text, View,Platform, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {  Thumbnail } from 'native-base';
import ProfessionalCard from '../Components/ProfessionalCard/ProfessionalCard';
import { PrimaryColor } from '../Constants/Colors/Color';
import { ProfessionalData } from '../Constants/Datas/ProfessionalData';



 
const ChooseProfessional = () => {
    
    return (
      <>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ flex: 0 }}>
              <HeaderMain1 title="Choose Professionals" />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#f1f1f1",
              }}
            >
              <View style={styles.headingCont}>
                <Text style={styles.headingMain}>
                  Choose the professional you are looking for!
                </Text>
              </View>
              <View style={styles.boxes}>
                {
                    ProfessionalData.map((v,i) =>{
                        return (
                            <ProfessionalCard 
                            key={i}
                            imgSrc = {v.imgSrc}
                            name = {v.name}
                            professional = {v.professional}
                            />
                        )
                    })
                }
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
}

export default ChooseProfessional

const styles = StyleSheet.create({
  boxes: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingVertical: 15,
  },
  headingCont:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 15
},
headingMain: {
    fontSize: 22,
    textAlign:'center',
    fontWeight:'bold',
    color: PrimaryColor
},
  
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 2
},
  starImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
  
});