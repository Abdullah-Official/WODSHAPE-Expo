import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import {dataCommon} from '../Constants/Datas/dataCommon'
const CommonCard = (props) => {
const navigation = useNavigation()
    return (
        <>
   <TouchableOpacity onPress={() => navigation.navigate(props.navigation)} activeOpacity={0.6} style={styles.container}>
   <View style={styles.mainCard}>
          <View style={{justifyContent:'flex-start'}}>
              <Image style={styles.imgCard}  source={props.imgSrc} />
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginLeft: 10}}>
    <Text style={styles.cardText}>{props.text}</Text>
          </View>
        </View>
   </TouchableOpacity>

        </>
    )
}

export default CommonCard

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    cardText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
  mainCard : {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#ccc',
      width:'88%',
      paddingVertical: 14,
      backgroundColor: '#edeeef',
      marginVertical: 8
  },
  imgCard: {
      width: 50,
      height: 50,
      resizeMode: 'contain'
  }
});