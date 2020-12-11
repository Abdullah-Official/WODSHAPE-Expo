import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export default ConstantBox = (props) => {
  
    return (
      <>
        <View style={styles.mainBox}>
          <TouchableOpacity activeOpacity={0.6} style={styles.btnConst} >
            <Text style={styles.titleBox}>{props.title}</Text>
          </TouchableOpacity>
        </View>
        
      </>
    );
}

const styles = StyleSheet.create({
    mainBox : {
        marginVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnConst : {
        borderColor: '#ccc',
        borderWidth: 1,
        width: '92%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 35
    },
    titleBox : {
        fontSize: 13.6,
        fontWeight : 'bold',
        color: '#000'
    }
});
