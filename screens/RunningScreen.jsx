import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import BottomNav from '../Components/BottomNav/BottomNav';
// import CommonCard from '../Components/CommonCard';
import HeaderMain1 from '../Components/HeaderMain1/HeaderMain1';
import { PrimaryColor } from '../Constants/Colors/Color';
import { Video } from 'expo-av'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer'

const RunningScreen = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [gif,setGif] = useState(
    <Image
    style={{
      width: 830,
      height: 330,
      marginTop: -25,
      resizeMode: "contain",
    }}
    source={require("../assets/rungif.png")}
  />
  )
    // const [play,setPlay] = useState(false)
    

    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <HeaderMain1
            title="START RUNNING"
            />
          </View>
          <View style={{ flex: 11 }}>
            <View style={styles.timer}>
              <Text style={styles.time}>
              <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            // To start
            options={options}
            // Options for the styling
          />
              </Text>
              <Text style={styles.duration}>Duration</Text>
              <View style={styles.afterTimer}>
                <View
                  style={{
                    width: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.afterTimerText}>0,00</Text>
                  <Text style={styles.spanText}>Distance (km)</Text>
                </View>
                <View
                  style={{
                    width: "40%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.afterTimerText}>0</Text>
                  <Text style={styles.spanText}>Calories (kcal)</Text>
                </View>
                <View
                  style={{
                    width: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.afterTimerText}>00:00</Text>
                  <Text style={styles.spanText}>Ritmo media</Text>
                </View>
              </View>
            </View>
            <View style={styles.runningScreen}>
              <View style={styles.video}>
                {/* <Video
                  source={{
                    uri:
                      "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay={play}
                  isLooping={false}
                  style={{ width: 300, height: 200,alignItems:'center',justifyContent:'center',paddingTop:20 }}
                /> */}
                {gif}
              </View>
              <View style={styles.controllers}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image
                    style={{ width: 45, height: 45, resizeMode: "contain" }}
                    source={require("../assets/music.jpg")}
                  />
                </TouchableOpacity>
               {
                   !isStopwatchStart ? ( <TouchableOpacity
                    style={styles.runBtn}
                    activeOpacity={0.6}
                    onPress={() => {
                        setIsStopwatchStart(true);
                        setGif(
                            <Image
                            style={{
                              width: 830,
                              height: 330,
                              marginTop: -20,
                              resizeMode: "contain",
                            }}
                            source={require("../assets/running.gif")}
                          />
                           )
                      }}
                  >
                    <Text style={styles.runText}>START RUN</Text>
                  </TouchableOpacity>): (
                       <TouchableOpacity
                       style={styles.runBtn}
                       activeOpacity={0.6}
                       onPress={() => {
                           setIsStopwatchStart(false);
                          setGif(
                            <Image
                            style={{
                              width: 830,
                              height: 330,
                              marginTop: -20,
                              resizeMode: "contain",
                            }}
                            source={require("../assets/rungif.png")}
                          />
                          )
                        
                         }}
                     >
                       <Text style={styles.runText}>STOP RUN</Text>
                     </TouchableOpacity>
                  )
               }
                <TouchableOpacity activeOpacity={0.7}>
                  <Image
                    style={{ width: 45, height: 45, resizeMode: "contain" }}
                    source={require("../assets/setting.jpg")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <BottomNav />
          </View>
        </View>
      </>
    );
}

export default RunningScreen

const styles = StyleSheet.create({
timer : {
    width: '100%',
    height:'32%',
    marginTop: 30,
    backgroundColor: '#edeeef',
},
time : {
    color: PrimaryColor,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30
},
duration: {
    fontSize: 12,
    textAlign:'center',
    marginVertical: 5,
    color: 'darkgrey',
    fontWeight: '800'
},afterTimer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    // paddingHorizontal: 30,
    marginVertical: 10,
    textAlign: 'center',
    padding:10
},
afterTimerText : {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal:10
},
spanText:{
    fontSize: 12,
    textAlign:'center',
    marginVertical: 5,
    color: 'darkgray',
    fontWeight: '800',
    textAlign:'center'
},
video :{
    justifyContent:'center',
    alignItems:'center'
},
controllers : {
   display: 'flex',
   flexDirection: 'row',
   justifyContent:'space-around',
//    paddingTop:40,
},
runBtn : {
    backgroundColor: PrimaryColor,
    borderRadius: 100,
    width: 170
},
runText : {
    color:'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 12,
    fontWeight:'bold',
},
runningScreen:{
  height: '100%'
}

});
const options = {
    container: {
      backgroundColor: 'transparent',
      padding: 5,
      borderRadius: 5,
      width: 220,
    },
    text: {
      fontSize: 30,
      color: PrimaryColor,
      marginLeft: 7,
      fontWeight: 'bold'
    }
  };