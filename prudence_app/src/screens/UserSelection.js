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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationActions, StackActions} from 'react-navigation';
import { Row, Col } from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';

export default class UserSelection extends React.PureComponent {
  state = {
    username: '',
    password: '',
    lang: 'en',
    pushtoken: '',
    showPassword: true,
    check: true,
    showRender:false
  };
  handleTextChange = newText => this.setState({username: newText});
  handleTextChange1 = newText => this.setState({password: newText});
  Login() {
    this.props.navigation.navigate('Register');
  }
  componentDidMount=async()=>{
    try {
      let value = await AsyncStorage.getItem('userid');
      console.log(value)
      if(value!=null)
      {
       
        this.props.navigation.navigate('Home')
        this.setState({showRender:false})
      }
      else{
        this.setState({showRender:true})
      }
    }
    catch{

    }
  }
  render() {
    return (
<View style={{flex:1}}>
  {this.state.showRender==true&&
      <ScrollView style={styles.parent}>
        <Text style={{textAlign:'center',marginBottom:22,fontSize:35,color:'black',fontWeight:'bold'}}>Welcome COVID QRT</Text>
        <Text>{' '}</Text>
        {/* <Text style={{marginBottom:22,fontSize:15,color:'#555'}}>I want to:</Text> */} 
        {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{borderColor:'#4F5EE8',alignSelf:'center', height: 40, justifyContent: 'center', paddingLeft:0, margin: 25,marginTop:0}} >
            <Text style={{color: '#007AFF', fontSize: 15,fontWeight:'bold'}}><AntDesign name={'arrowright'} size={14} color={'#007AFF'}/>{' '}My Self</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{borderColor:'#4F5EE8',alignSelf:'center', height: 40, justifyContent: 'center', paddingLeft:0, margin: 25,marginTop:0}} >
            <Text style={{color: '#007AFF', fontSize: 15,fontWeight:'bold'}}><AntDesign name={'arrowright'} size={14} color={'#007AFF'}/>{' '}Family</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{borderColor:'#4F5EE8',alignSelf:'center', height: 40, justifyContent: 'center', paddingLeft:0, margin: 25,marginTop:0}} >
            <Text style={{color: '#007AFF', fontSize: 15,fontWeight:'bold'}}><AntDesign name={'arrowright'} size={14} color={'#007AFF'}/>{' '}Friend</Text>
        </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{borderColor:'#007AFF',borderWidth:1,alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:20, margin: 25,marginTop:25,marginLeft:40}} >
              <Text style={{color: '#007AFF', fontSize: 15,fontWeight:'bold'}}>Start new risk assessment</Text>
          </TouchableOpacity> */}
        {/* <Text style={{textAlign:'center'}}>---- OR ----</Text> */}
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={{borderColor:'#007AFF',borderWidth:1,alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:20, margin: 25,marginTop:25,marginLeft:40}} >
              <Text style={{color: '#007AFF', fontSize: 15,fontWeight:'bold'}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')} style={{borderColor:'#007AFF',borderWidth:1,alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:20, margin: 25,marginTop:0,marginLeft:40}} >
              <Text style={{color: '#007AFF', fontSize: 15,fontWeight:'bold'}}>Signup</Text>
          </TouchableOpacity>
          
        {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')} style={{borderColor:'#4F5EE8',alignSelf:'center', height: 40, justifyContent: 'center', paddingLeft:0, margin: 25,marginTop:0}} >
            <Text style={{color: '#4F5EE8', fontSize: 15,fontWeight:'bold'}}><AntDesign name={'arrowright'} size={14} color={'#4F5EE8'}/>{' '}My Self</Text>
        </TouchableOpacity> */}

     </ScrollView>
  }
     </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,

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
