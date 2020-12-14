import React from 'react'
import {  StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderMain from '../Components/HeaderMain/HeaderMain';
import { PrimaryColor } from '../Constants/Colors/Color';
import { useState } from 'react/cjs/react.development';

import RNPickerSelect from ' @react-native-picker/picker';

const SearchProfessional = () => {

    // const [selectedValue, setSelectedValue] = useState("java");
    return (
        <>
             <View style={{flex: 1,}}>
        <View style={{flex: 1}} ><HeaderMain  icon="align-left" title="Search Professionals"  /></View>
        <View style={{flex:2, alignItems:'center'}} >
        <View style={styles.containeOne}>
            <Text style={styles.heading}>Search your Professional</Text>
            <Text style={styles.paragraph}>Search next to me will find the Professionals in 50km radius.</Text>
            <TouchableOpacity style={styles.btnSearch} activeOpacity={0.7}>
                <Text style={styles.btnText}>NEXT TO ME</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={{flex:5,}}>
            <View style={styles.containerTwo}>
                <Text style={{textAlign:'center',paddingVertical:13}}>Or search any specific Region</Text>
            </View>
            <View style={styles.pickerContainer} >
                <View style={styles.picker}>
                <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
                </View>
            </View>
        </View>
      </View>
        </>
    )
}

export default SearchProfessional

const styles = StyleSheet.create({

    containeOne :{
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
        paddingTop: 20
    },
    heading: {
        color: PrimaryColor,
        fontSize: 22,
        textAlign:'center',
        fontWeight: 'bold'
    },
    paragraph : {
        paddingVertical:16,
        textAlign: 'center'
    },
    btnSearch :{
        backgroundColor: PrimaryColor,
        borderRadius: 100,
        width:150
    },
    btnText: {
        paddingVertical: 13,
        color: '#fff',
        fontSize: 12,
        textAlign: 'center'
    },
    containerTwo : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker :{
        borderColor:'#ccc',
        borderWidth: 2,
        // width:'80%',
        borderRadius: 100,
        paddingHorizontal:16

    },
    pickerContainer: {
        justifyContent:'center',
        alignItems:'center',
        
    },
    pickerItem :{
        color: 'gray'
    }

});