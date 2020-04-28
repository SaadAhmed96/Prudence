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
} from 'react-native';
// import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from 'react-navigation';
import { login, register } from '../Apis/Apis';
import { Spinner } from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';


export default class Login extends React.PureComponent {
  state = {
    username: '',
    password: '',
    lang: 'en',
    pushtoken: '',
    showPassword: true,
    check: true,
    socail:false,
    
    showError:false,
    isLoading:false
  };
  handleTextChange = newText => this.setState({email: newText});
  handleTextChange1 = newText => this.setState({password: newText});
  componentDidMount=async()=>{
 
  }
  


  
  render() {
    return (
      <ScrollView>
     <View style={{width: '100%', borderWidth: 0,alignItems:'center',marginTop:20}}>
          <Image
            source={require('./../assets/images/logo.png')}
            resizeMode="contain"
            style={{height: 170, width: 300}}></Image>
        </View>
        <View
          style={{
            // height: '70%',
            // borderWidth: 1,
            borderRadius: 10,
            // paddingLeft: 15,
            // paddingRight: 15,
            // justifyContent: 'center',
            marginBottom:20,
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
            overflow: 'hidden',
            backgroundColor: 'white',
          
          }}>
          <Text style={{color: '#4F5EE8', fontSize: 19, paddingVertical: 10}}>
            {' '}
            Login{' '}
          </Text>
        
          <View style={styles.et1}>
            <View
              style={{
                width: '10%',
                // borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name={'mail'} size={20} color="#cccccc" />
            </View>

            <TextInput
              style={{
                paddingLeft: 0,
                // borderWidth: 1,
                height: '100%',
                width: '80%',
                paddingLeft: 40,
              }}
              value={this.state.email}
              onChangeText={this.handleTextChange}
              // secureTextEntry={true}
              // keyboardType={'email-address'}
              placeholder="Username"></TextInput>
          </View>


          <View style={styles.et1}>
            <View
              style={{
                width: '10%',
                // borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name={'lock'} size={20} color="#cccccc" />
            </View>

            <TextInput
              style={{
                paddingLeft: 0,
                // borderWidth: 1,
                height: '100%',
                width: '80%',
                paddingLeft: 40,
              }}
              value={this.state.password}
              onChangeText={this.handleTextChange1}
              secureTextEntry={true}
              placeholder="Password"></TextInput>
          </View>
          {/* {this.state.showError==true&&  <Text style={{margin:20,textAlign:"center",color:'red'}}>Please fill all required fields</Text>} */}
{/* 
          <TouchableOpacity
            style={{marginRight: 20, margin: 20, marginLeft: 20}}
            onPress={() => this.props.navigation.navigate('Password')}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity> */}

          <TouchableOpacity  style={{marginTop:30,backgroundColor:'#4F5EE8',alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:40, margin: 25,marginTop:30}}  onPress={()=>this.props.navigation.navigate('Home')}><Text style={{color:'white'}}>Login</Text></TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
       
    
          </View> 

          <TouchableOpacity
            style={{marginTop: 10, borderWidth: 0,marginBottom:30}}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text>
              {' '}
              Dont have account ?{' '}
              <Text style={{color: '#4F5EE8'}}> Signup now </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
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
