import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import HeaderApp from "../Components/HeaderApp";
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Form, Item, Input } from "native-base";
import { InfoData } from "../Datas/InfoData";


const Information = () => {



  const [name,setName] = useState()
  const [weight,setWeight] = useState()
  const [height,setHeight] = useState()
  const [age,setAge] = useState()

  
  const renderItem = ({ item }) => {
    return (
      <>
        <View style={styles.slide}>
          <View>
            <Text style={styles.questioN}>{item.question}</Text>
          </View>
          <View>
            <Form>
                <TextInput
                onChangeText={
                  (e) =>{
                    if(item.key !== 2 && item.key !== 3 && item.key !== 4 ){
                      setName(e)
                    }else if(item.key !== 1 && item.key !== 3 && item.key !== 4 ){
                      setWeight(e)
                    }
                    else if(item.key !== 1 && item.key !== 2 && item.key !== 4 ){
                      setHeight(e)
                    }
                    else if(item.key !== 1 && item.key !== 2 && item.key !== 3 ){
                      setAge(e)
                    }
                  }
                }
                value={item.key !== 2 && item.key !== 3 && item.key !== 4 ? name : null 
                  || item.key !== 1 && item.key !== 3 && item.key !== 4 ? weight: null
                  || item.key !== 1 && item.key !== 2 && item.key !== 4 ? height: null  
                  || item.key !== 1 && item.key !== 2 && item.key !== 3 ? age: null  }
                style={styles.input} placeholder={item.placeholder} />
            </Form>
          </View>
        </View>
      </>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Done</Text>
      </View>
    );
  };
  const keyExtractor = (item) => item.question;
  console.log(keyExtractor);

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <TouchableOpacity activeOpacity={0.9} style={styles.nxtBtn}>
          <Text style={styles.rightText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };
  // const handleDone = () => {
  //   props.handleDone();
  // };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <HeaderApp btnName='Skip'/>
      </View>
      <View style={{ flex: 9 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={InfoData}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          renderNextButton={renderNextButton}
          renderDoneButton={renderDoneButton}
          // onDone={handleDone}
          bottomButton
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    // backgroundColor: "#F8F9F9",
  },
  nxtBtn: {
    backgroundColor: "#32C553",
    padding: 12,
    width: 280,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 40,
  },
  questioN: {
    fontSize: 16,
  },
  dotStyle: {
    backgroundColor: "#cccc",
  },
  activeDotStyle: {
    backgroundColor: "#32C553",
  },
  rightTextWrapper: {
    // marginRight:30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: "#fff",
    fontSize: 14,
  },
  doneButtonWrapper: {
    backgroundColor: "#32C553",
    marginVertical: 40,
    borderRadius: 100,
  },
  doneButtonText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    padding: 10,
    
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: 300,
    marginVertical: 25,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 100,

  },
});

export default Information;
