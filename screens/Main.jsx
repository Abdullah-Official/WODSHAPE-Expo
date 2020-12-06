import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ConstantBox from '../Components/ConstantBox'
import HeaderMain from '../Components/HeaderMain'
import { PrimaryColor } from '../Constants/Colors/Color'

export default Main = () => {
   
    return (
        <>
            <View style={styles.main}>
                <View style={styles.header}>
                    <HeaderMain />
                </View>
                <View style={styles.banner} >
                    <Image style={styles.bannerImg} source={require('../assets/main-banner.png')} />
                </View>
                <View style={styles.aboutMain}>
                    <View>
                        <Text style={styles.heading}>About You!</Text>
                        <Text style={styles.subHeading}>Please tell us who you are?</Text>
                    </View>
                </View>
                <View>
                    <ConstantBox title="I want to do excercises / Meditate / Train" />
                    <ConstantBox title="I'm a Specialists/ Nutrition / Technician" />
                    <ConstantBox title="I'm Personal/ Physical Education Teacher" />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({


  bannerImg : {
      width: '100%',
      height: 180,
      resizeMode: 'contain',
      marginTop: 10
  },
  banner : {
      justifyContent: 'center',
      alignItems: 'center'
  },
  aboutMain : {
      marginTop: 34,
      justifyContent:'center',
      alignItems:'center',
  },
  heading : {
      fontSize: 28,
      color: PrimaryColor,
      fontWeight: 'bold',
      textAlign:'center'
  },
  subHeading : {
      fontSize:15,
      marginVertical: 6
  }
});
