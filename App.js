/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//const os = require('os')

//import cpus from 'os';
//console.log(os.cpus)

//import DeviceInfo from 'react-native-device-info';

//console.log(getModel())
import React from 'react';
import {useState} from 'react';
import setState from 'react';
import useEffect from 'react';
import useInterval from 'react-useinterval'
//import { ToolbarAndroid } from 'react-native';
//import { AessAlarm, ThreeDRotation } from '@mui/icons-material';
//import OptionsIcon from '@mui/icons-material/Options';
import ToolbarAndroid from '@react-native-community/toolbar-android';
import AnimatedSplash from "react-native-animated-splash-screen";

import {Splashscreen} from './splash';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {DeviceInfo,getSyncInfo,getConstantDeviceInfo} from './infoSystem'

const Section = ({children, title}): Node => {
 // this.setState({isAuthenticated: true})
 //this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const getCurrentDate=()=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  var date_ = new Date()

  var seconds = date_.getSeconds();
  var minutes = date_.getMinutes();
  var hour = date_.getHours();
  var milliSeconds = date_.getMilliseconds();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  var date__ = date + '/' + month + '/' + year;
  var time_ = hour+':'+minutes+':'+seconds //+' :'+milliSeconds

  return {date_:date__,time_:time_}//format: dd-mm-yyyy;
}

const App: () => Node = () => {
  var i = 0
  var data_json = {}
  let [getinfo, setCount] = useState(0);
 // let [delay, setDelay] = useState(1000);
  useInterval(() => {
   
    //getinfo = getSyncInfo()
    // Your custom logic here
    //data_json = {}
    data_json.date = getCurrentDate()
    setCount(getinfo=getSyncInfo())
    //i = i+1
    console.log(i)
    
  }, 900);

  let [dateFull, setDate] = useState(0);
 // let [delay, setDelay] = useState(1000);
  useInterval(() => {
   
    //getinfo = getSyncInfo()
    // Your custom logic here
    //data_json = {}
    //data_json.date = getCurrentDate()
    setDate(dateFull=getCurrentDate())
    //i = i+1
    console.log(i)
    
  }, 900);
  // useEffect(()=>{
  //   const getinfo_ = 'q'
  // })

  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AnimatedSplash
    translucent={true}
  // isLoaded={() => this.state.isLoaded}
    logoImage={require("./img/Company.png")}
    backgroundColor={"#FFFFFF"}
    logoHeight={350}
    logoWidth={350}

    onLoadEnd={true}

  >
 
    <SafeAreaView style={backgroundStyle}>
    
   
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ToolbarAndroid
      //logo={require('./img/app_logo.png')}
      title= 'SysInfo '
      style={styles.toolbar}
      actions={[{title: 'Settings', icon: require('./img/logo_sysinfo.png'), show: 'always'}]}
      onActionSelected={onActionSelected} />
    
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Section title="Date">
            <Text style={styles.highlight}>date: </Text>
            {dateFull.date_}{'\n'}
            <Text style={styles.highlight}>time: </Text>
            {dateFull.time_}{'\n'}
          </Section>
          <Section title="Device">
            <Text style={styles.highlight}>Manufacturer: </Text>
            {getSyncInfo().manufacturer}{'\n'}

            <Text style={styles.highlight}>Name Device: </Text>
            {getSyncInfo().deviceName}{'\n'}

            <Text style={styles.highlight}>Model: </Text>
            {getConstantDeviceInfo().model}{'\n'}

            <Text style={styles.highlight}>System: </Text>
            {getConstantDeviceInfo().systemName}{'\n'}
            
            <Text style={styles.highlight}>Version System: </Text>
            {getConstantDeviceInfo().systemVersion}{'\n'}

            <Text style={styles.highlight}>Api level: </Text>
            {getinfo.ApiLevel}{'\n'}

            <Text style={styles.highlight}>Build Number: </Text>
            {getConstantDeviceInfo().buildNumber}{'\n'}


          </Section>

          <Section title="Hardware">
          <Text style={styles.highlight}>Space Disk Total: </Text>
            {(getinfo.totalDiskCapacity/(1024**3)).toFixed(2)}GB{'\n'}

            <Text style={styles.highlight}>Space Disk Usage: </Text>
            {(( getinfo.totalDiskCapacity-getSyncInfo().freeDiskStorage)/(1024**3)).toFixed(2)}GB ({100-((getSyncInfo().freeDiskStorage/getSyncInfo().totalDiskCapacity)*100).toFixed(2)}%){'\n'}


          <Text style={styles.highlight}>Space Disk Free: </Text>
            {(getinfo.freeDiskStorage/(1024**3)).toFixed(2)}GB{'\n'}

            <Text style={styles.highlight}>RAM Total: </Text>
            {(getinfo.totalMemory/(1024**3)).toFixed(2)}GB{'\n'}

            <Text style={styles.highlight}>RAM Usage: </Text>
            {(getinfo.usedMemory/(1024**3)).toFixed(2)}GB ({(getSyncInfo().usedMemory/getSyncInfo().totalMemory).toFixed(2)*100}%){'\n'}

{/* 
            <Text style={styles.highlight}>RAM Max: </Text>
            {(getSyncInfo().maxMemory/(1024**3)).toFixed(2)}GB{'\n'}
 */}
            <Text style={styles.highlight}>Battery Level: </Text>
            {((getinfo.batteryLevel)*100).toFixed(2)}%{'\n'}

            <Text style={styles.highlight}>Battery Charging: </Text>
            {getinfo.isBatteryCharging}{'\n'}


            <Text style={styles.highlight}>Chip Principal: </Text>
            {getinfo.carrier}{'\n'}

            <Text style={styles.highlight}>Phone Number: </Text>
            {getinfo.phoneNumber}{'\n'}

            <Text style={styles.highlight}>IP Address: </Text>
            {getinfo.IpAddress}{'\n'}

            <Text style={styles.highlight}>Mac Address: </Text>
            {getinfo.MacAddress}{'\n'}

            <Text style={styles.highlight}>Host: </Text>
            {getinfo.host}{'\n'}
          
            <Text style={styles.highlight}>Bootloader: </Text>
            {getinfo.bootloader}{'\n'}

            <Text style={styles.highlight}>Code Name: </Text>
            {getinfo.codename}{'\n'}

            <Text style={styles.highlight}>Finger Print: </Text>
            {getinfo.fingerprint}{'\n'}

            <Text style={styles.highlight}>Date Security Path: </Text>
            {getinfo.securityPatch}{'\n'}

            

          </Section>


        </View>
      </ScrollView>

    </SafeAreaView>
  </AnimatedSplash>
  );
};
const onActionSelected = (position) => {
  if (position === 0) { // index of 'Settings'
    showSettings();
  }
}

// const componentDidMount=()=>
// 
// AnimatedSplash.hide();
// }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  toolbar: {
    backgroundColor:'darkviolet',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'left',
    fontSize:29,
    color:'black'
  }, 
});

export default App;
