import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import BottomNav from '../Components/BottomNav/BottomNav';
import CommonCard from '../Components/CommonCard/CommonCard';
import HeaderMain from '../Components/HeaderMain/HeaderMain';
import { PrimaryColor } from '../Constants/Colors/Color';
import { dataCommon } from '../Constants/Datas/dataCommon';


const InitialScreen = () => {

    return (
        <>
             <View style={{flex: 1}}>
        <View style={{flex: 1}} ><HeaderMain  icon="menu" title="WODSHAPE" iconRight='search' /></View>
        <View style={styles.banner} >
        <Image style={styles.bannerImg} source={require('../assets/banner-initial.png')} />
        <View>
            {
                dataCommon.map((v,i) =>{
                    return (
                        <CommonCard 
                        key= {i}
                        imgSrc = {v.imgSrc}
                        text = {v.text}
                        navigation = {v.navigation}
                        />
                    )
                })
            }
        </View>
        </View>
        <View style={{flex: 1}}>
            <BottomNav />
        </View>
      </View>
        </>
    )
}

export default InitialScreen

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'column',
    },
    bannerImg : {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginTop: 15
    },
    banner : {
        flex: 11,
    },

});