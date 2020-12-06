import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import HeaderApp from '../Components/HeaderApp'
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { welcomeData } from '../Datas/WelcomeData';



const Welcome = (props) => {

  const renderItem = ({item}) => {
    return (
      
      <View style={styles.slide}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <TouchableOpacity activeOpacity={0.9} style={styles.nxtBtn}>
        <Text style={styles.rightText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      
        <Text style={styles.doneButtonText}>Done</Text>
    );
  };

 

  const handleDone = () => {
    props.handleDone();
  };

  return (
    
    <>
      <View style={{flex:1, backgroundColor:'#F8F9F9'}}>
      <HeaderApp btnName='Skip'/>
      </View>
      <View style={{flex: 9}}>
      
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={welcomeData}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        onDone={handleDone}
        bottomButton
      />
    </View>
    </>
  );
  
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'#F8F9F9',
    paddingTop:70
  },
  nxtBtn : {
    backgroundColor: '#32C553',
    padding: 12,
    width: 150,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 40
  },
  image: {
    // marginVertical: 30,
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#32C553',
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 40,
    
  },
  text: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  dotStyle: {
    backgroundColor: '#cccc',
  },
  activeDotStyle: {
    backgroundColor: '#32C553',
  },
  rightTextWrapper: {
    // marginRight:30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    color: '#fff',
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    color: 'blue',
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
    fontFamily:""
  },
  doneButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color:'white',
  },
});

export default Welcome;