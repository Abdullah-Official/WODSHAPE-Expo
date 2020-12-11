import { useNavigation } from '@react-navigation/native'
import { View } from 'native-base'
import React from 'react'
import { StyleSheet, Text , TouchableOpacity} from 'react-native'
import ConstantBox from '../Components/ConstantBox/ConstantBox'
import HeaderApp from '../Components/HeaderApp/HeaderApp'
import { PrimaryColor } from '../Constants/Colors/Color'

export default Goal = () => {
    const navigation = useNavigation()
    return (
      <>
        <View >
          <View style={{ flex: 1, backgroundColor: "white", marginTop: 10 }}>
            <HeaderApp />
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.goal}>What is your Goal ?</Text>
          </View>
          <View>
             <ConstantBox title="Lose Weight"/>
             <ConstantBox title="Maintain Weight"/>
             <ConstantBox title="Gain Muscle"/>
          </View>
          <View style={styles.rightTextWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("UserLogin")} activeOpacity={0.9} style={styles.nxtBtn}>
        <Text style={styles.rightText}>Next</Text>
        </TouchableOpacity>
      </View>
        </View>
      </>
    );
}


const styles = StyleSheet.create({
    mainContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    goal: {
        marginVertical: 50,
        fontSize: 15,
    }
    ,
    nxtBtn : {
        backgroundColor: PrimaryColor,
        padding: 16,
        width: '80%',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 40
      },
      rightTextWrapper: {
        // marginRight:30,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 24
      },
      rightText: {
        color: '#fff',
        fontSize: 14,
      },
});
