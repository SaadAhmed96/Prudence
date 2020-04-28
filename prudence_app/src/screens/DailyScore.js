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
import MainHeader from '../Component/MainHeader';
import { getScore } from '../Apis/Apis';
// import console = require('console');
// import { ScrollView } from 'react-native-gesture-handler';
// import RNExitApp from 'react-native-exit-app';
export default class DailyScore extends React.PureComponent {
  state = {
    username: '',
    password: '',
    lang: 'en',
    pushtoken: '',
    showPassword: true,

  };

   Login=async()=> {

  }
   componentDidMount=async()=>{
    try {
      let value = await AsyncStorage.getItem('userid');
      console.log(value)
      if(value!=null)
      {
        const reponse = await getScore(value)
        console.log(reponse)
        this.setState({
          data:reponse
        })
        this.props.navigation.navigate('DailyScore')
      }
    } catch (error) {
        console.log(error)
      // Error retrieving data
 
    }
    
  }
  render() {
    return (
        <View style={{flex:1}}>
    <ScrollView style={{height:'90%',flex:1}}>
{/* <MainHeader navigation={this.props.navigation}/> */}
           <Text style={{textAlign:'center',marginBottom:10,fontSize:25,color:'black',fontWeight:'bold',marginTop:20}}>Score History</Text>
         
         {this.state.data&&this.state.data.map((data) =>
        <View style={{flexDirection:'row',borderBottomColor:'#cccccc',borderBottomWidth:1,padding:10,paddingHorizontal:20}}>
            <View>
                <Text style={{color:'#007AFF',fontSize:16}}>Score : {data.score} </Text>
            </View>
            <View style={{marginLeft:15}}>
            <Text style={{color:'black',fontSize:16}}>Time : {data.time} </Text>
            </View>
        </View>
         )
        }
     </ScrollView>
     <View style={{height:'20%'}}>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{borderColor:'#007AFF',borderWidth:1,alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:20, margin: 25,marginTop:25,marginLeft:40}} >
              <Text style={{color: '#007AFF', fontSize: 15,fontWeight:'bold'}}>Start new risk assessment</Text>
          </TouchableOpacity>
         </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    height:'90%',
    padding:20
  },
  tocenterview: {
    // height:50,bw
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    justifyContent: 'flex-end',
  },
  hello: {
    // marginTop: 20,
    fontSize: 15,
    color: 'black',
  },
  moving: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  et1: {
    borderColor: '#d3d3d3',

    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  et2: {
    borderColor: '#d3d3d3',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '90%',
    // marginRight: 40,
    // marginLeft: 40,
  },
  ext: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
  },
  tocentertext: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },

  logintext: {
    color: 'white',
    fontSize: 18,

    alignItems: 'center',
  },
  
});
