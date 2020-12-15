import { Icon, Picker } from 'native-base';
import React, {useState, useEffect} from 'react'
import {  StyleSheet, Text, View,Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderMain from '../Components/HeaderMain/HeaderMain';
import { PrimaryColor } from '../Constants/Colors/Color';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
const SearchProfessional = ({navigation}) => {
    const [value,setValue] = useState()
    const [value1,setValue1] = useState()
    const [value2,setValue2] = useState()

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          setErrorMsg(
            'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
          );
          return;
        }
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        console.log(location)
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location)
        console.log(location)
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
    return (
        <>
             <View style={{flex: 1,}}>
        <View style={{flex: 1}} ><HeaderMain1 title="Search Professionals"  /></View>
        <View style={{flex:2, alignItems:'center'}} >
        <View style={styles.containeOne}>
            <Text style={styles.heading}>Search your Professional</Text>
            <Text style={styles.paragraph}>Search next to me will find the Professionals in 50km radius.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ChooseProfessional")} style={styles.btnSearch} activeOpacity={0.7}>
                <Text style={styles.btnText}>NEXT TO ME</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={{flex:5,}}>
            <View style={styles.containerTwo}>
                <Text style={{textAlign:'center',paddingVertical:20}}>Or search any specific Region</Text>
            </View>
         <View style={{marginVertical:15}}>
         <View style={styles.pickerContainer} >
            <View style={styles.pickerWrapper}>
           <Picker
        mode="dropdown"
        styles={styles.pickerContent}
        placeholder="Select your SIM"
        placeholderStyle={{ color: '#ccc' }}
        placeholderIconColor={'#000'}
        selectedValue={value}
        onValueChange={(e) => setValue(e)}
      >
           <Picker.Item label="Choose Location" value="key0" />
        <Picker.Item label="Wallet" value="key0" />
        <Picker.Item label="ATM Card" value="key1" />
        <Picker.Item label="Debit Card" value="key2" />
        <Picker.Item label="Credit Card" value="key3" />
      </Picker>
    </View>
            </View>

            <View style={styles.pickerContainer} >
            <View style={styles.pickerWrapper}>
           <Picker
        mode="dropdown"
        styles={styles.pickerContent}
        placeholder="Select your SIM"
        placeholderStyle={{ color: '#ccc' }}
        placeholderIconColor={'#000'}
        selectedValue={value1}
        onValueChange={(e) => setValue1(e)}
      >
           <Picker.Item label="Select State" value="key0" />
        <Picker.Item label="Wallet" value="key0" />
        <Picker.Item label="ATM Card" value="key1" />
        <Picker.Item label="Debit Card" value="key2" />
        <Picker.Item label="Credit Card" value="key3" />
      </Picker>
    </View>
            </View>

            <View style={styles.pickerContainer} >
            <View style={styles.pickerWrapper}>
           <Picker
        mode="dropdown"
        styles={styles.pickerContent}
        placeholder="Select your SIM"
        placeholderStyle={{ color: '#ccc' }}
        placeholderIconColor={'#000'}
        selectedValue={value2}
        onValueChange={(e) => setValue2(e)}
      >
           <Picker.Item label="Select City" value="key0" />
        <Picker.Item label="Wallet" value="key0" />
        <Picker.Item label="ATM Card" value="key1" />
        <Picker.Item label="Debit Card" value="key2" />
        <Picker.Item label="Credit Card" value="key3" />
      </Picker>
    </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginVertical:15}}>
            <TouchableOpacity style={styles.btnSearch} activeOpacity={0.7}>
                <Text style={styles.btnText}>SEARCH</Text>
            </TouchableOpacity>
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
        width:160,
        // marginVertical: 10
    },
    btnText: {
        paddingVertical: 14,
        color: '#fff',
        fontSize: 12,
        textAlign: 'center'
    },
    containerTwo : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerWrapper :{
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: "transparent",
        borderRadius: 100,
        justifyContent:'center',
        width:'100%',
        paddingHorizontal: 20,
        paddingVertical:3,
        marginBottom: 15,

    },
    pickerContainer: {
        justifyContent:'center',
marginHorizontal: 20    
},
pickerContent:{
    paddingHorizontal: 20
}

});