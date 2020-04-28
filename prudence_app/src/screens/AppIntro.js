import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  AsyncStorage,
  PureComponent,

  Platform,
  NetInfo,
  ScrollView,
  Alert,
} from 'react-native';

// import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from 'react-navigation';
import { Row, Col } from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';
// import RNExitApp from 'react-native-exit-app';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
    {
      key: 'somethun',
      title: 'Get Started',
      text: 'Description.\nSay something cool',
      image: require('./../assets/images/slide1.png'),
      backgroundColor: '#59b2ab',
      new:'GET STARTED'
    },
    // {
    //   key: 'somethun-dos',
    //   title: 'Step 2 Add Contact',
    //   text: 'Other cool stuff',
    //   image: require('./../assets/images/slide2.png'),
    //   backgroundColor: '#febe29',
    // },
    // {
    //   key: 'somethun1',
    //   title: 'Step 3 COVID Risk Assessement',
    //   text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    //   image:  require('./../assets/images/slide3.png'),
    //   backgroundColor: '#22bcb5',
    // },
    // {
    //     key: 'somethun1',
    //     title: 'Step 4 Manage your close ones in app',
    //     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    //     image:  require('./../assets/images/slide4.png'),
    //     backgroundColor: '#22bcb5',
    //     new:'GET STARTED'
    //   }
  ];
export default class AppIntro extends React.PureComponent {
  state = {
    showRealApp: false
  };
 
   componentDidMount=async()=>{

  }
  _renderItem = ({ item, dimensions }) =>{
    return (
      <View style={styles.slide}>
         <Text style={{textAlign:'center',margin:10,fontSize:25,color:'black',fontWeight:'bold',marginTop:20}}>{item.title}</Text>
        <Image style={{height:300,width:300,marginTop:30}} source={item.image}/>
         <Text style={{padding:40,textAlign:'center'}}>Sit eiusmod qui pariatur et esse velit. Lorem enim aliquip fugiat elit culpa. Proident fugiat sunt proident do proident aute ad non tempor ea pariatur nisi.</Text>
         <TouchableOpacity  style={{backgroundColor:'#4F5EE8',alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:30, margin: 25,marginTop:0}}  onPress={()=>this.props.navigation.navigate('UserSelection')}><Text style={styles.text}>{item.new}</Text></TouchableOpacity>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    
  }
  render() {
    return (
  
            <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>

    );
  }
}
const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image: {
      width: 320,
      height: 320,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 22,
      color: 'white',
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginBottom: 16,
    },
    slide:{
        alignItems:'center',paddingTop:30
    },
    text:{
color:'white'
    }
  });