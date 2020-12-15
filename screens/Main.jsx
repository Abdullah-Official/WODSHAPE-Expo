import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ConstantBox from '../Components/ConstantBox/ConstantBox'
import HeaderMain from '../Components/HeaderMain/HeaderMain'
import { PrimaryColor } from '../Constants/Colors/Color';

export default Main = () => {
   
    return (
        <>
            <View style={styles.main}>
                <View style={styles.header}>
                    <HeaderMain  icon="align-left" iconRight="search" title="WODSHAPE"/>
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
                <View style={{marginTop: 8}}>
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
      fontSize: 25,
      color: PrimaryColor,
      fontWeight: 'bold',
      textAlign:'center'
  },
  subHeading : {
      fontSize:14,
      marginVertical: 6
  }
});
