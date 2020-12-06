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
        marginVertical: 8,
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
        paddingVertical: 37
    },
    titleBox : {
        fontSize: 14,
        fontWeight : 'bold',
    }
});
