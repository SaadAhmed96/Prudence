// import React, { Component } from 'react';
// // import DateTimePicker from "react-native-modal-datetime-picker";
// import {ActivityIndicator, View, Alert, TextInput, Text, Image, Picker, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
// import ccs from "./../Component/countrycitystatejson/index";

// import {colors} from './../Component/index.style';
// import { Container, Header, Content, Item, Input, Spinner } from 'native-base';
// import { register } from '../Apis/Apis';
// export default class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
     
      
//     firstname:'',
//     password:'',
//     phone:'',
//       signUploading: false
//      };
//   }

//   componentDidMount(){
//     this.setState({CountriesSet:ccs.getCountries()})
//     console.log(ccs.getCountries())
//     this.setState({USstates: ccs.getStatesByShort(this.state.country)})
//     this.setState({codeCountry:ccs.getCountryCode('PK')})
//     this.setState({USstates: ccs.getStatesByShort('PK')})
//   }



//   validateEmail(email) {
//     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   }

//   passMatch(password, confirmPassword) {
//     if(password.localeCompare(confirmPassword) === 0)
//       {return true}
//     else {return false}
//   }

//   focusNextField(nextField) {
//     this.refs[nextField].focus();
//   }

//   handleDatePicked = date => {
//     console.log("A date has been picked: ", date);
//     this.setState({dob: date, dobModal: false})
//   };

//   formatDate = (date) => {
//     var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
//   }
//   register=async()=>{
//     this.props.navigation.navigate('Login')
//       if(this.state.email!=''&&this.state.password!=''&&this.state.phone!='')
//       {
//         if(this.state.password==this.state.passwordConfirm)
//         {
//         this.setState({
//           showError:false,
//           isLoading:true
//         })
//         this.props.navigation.navigate('Login')
//         // console.log(this.state)
//         // const repose = await register(this.state.firstname,this.state.lastname,
//         //   this.state.email,this.state.country,this.state.state,this.state.city,this.state.latitude,
//         //   this.state.longitude,this.state.phone,this.state.password,this.state.age,this.state.gender)
//         // console.log(repose)
//         //   if(repose){
//         //     this.setState({
//         //       showError:false,
//         //       isLoading:false,
           
//         //     })
//         //   }
//         //   this.props.navigation.navigate('Login')
//         }
//         else{
//           this.setState({
//             showError:true,
//             msg:'Password does not match',
//             isLoading:false,
//           })
//         }
//       }
//       else{
//         this.setState({
//           showError:true,
//           msg:'Please fill all required field',
//           isLoading:false,
//         })
//       }
//   }

//   render() {
//     return (
//       <View style={styles.mainContainer}>

     
     
//         <ScrollView keyboardShouldPersistTaps={'handled'}>
//         <Image style={{height:200,width:200,alignSelf:'center'}} source={require('./../assets/images/washhand1.png')} />
//         {/* <Text style={{marginTop:20,marginLeft:10,marginBottom:20,fontSize:15,color:'#555'}}>Please folowing information</Text> */}
//       <View style={{padding:20}}>
//         <Content>
//           <Item>
//             <Input onChangeText={(text)=>{this.setState({firstname:text})}} placeholder="First Name" />
//           </Item>
//         </Content>
//         <Content>
//           <Item>
//             <Input  onChangeText={(text)=>{this.setState({lastname:text})}} placeholder="Last Name" />
//           </Item>
//         </Content>
//         <Content>
//           <Item>
//             <Input keyboardType={'email-address'} onChangeText={(text)=>{this.setState({email:text})}} placeholder="Email*" />
//           </Item>
//         </Content>
    
//           <View style={{borderColor: colors.border, borderBottomWidth: 1, width: '100%', height: 40,marginTop:10}}>
//             <Picker
//               selectedValue={this.state.gender}
//               style={{height: 40}}
//               mode={'dropdown'}
//               placeholder={'Gender'}
//               onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
//               <Picker.Item label="Male" value="Male" />
//               <Picker.Item label="Female" value="Female" />
//               <Picker.Item label="None" value="None" />
//             </Picker>
//           </View>
  
//         <Content>
//           <Item>
//             <Input keyboardType={'number-pad'} onChangeText={(text)=>{this.setState({age:text})}}  textContentType='telephoneNumber' placeholder="Age" />
//           </Item>
//         </Content>
//         <View style={{borderColor: colors.border, borderBottomWidth: 1, height: 40, backgroundColor: colors.white,marginTop:10}}>
//           <Picker
//             selectedValue={this.state.country}
//             style={{height: 40, width: '100%', justifyContent: 'space-between', paddingHorizontal: 30}}
//             mode="dropdown"
//             onValueChange={(itemValue, itemIndex) =>
//               {
//                 console.log(ccs.getCountryCode(itemValue)),
//                 console.log(itemValue),
//                 this.setState({codeCountry:ccs.getCountryCode(itemValue)})
//                 this.setState({USstates: ccs.getStatesByShort(itemValue)})
//                 this.setState({country: itemValue, })}
//               }
//               >
//                 <Picker.Item label={'Pakistan'} value={'PK'} key={'14'}/>
//                 <Picker.Item label={'Canada'} value={'CA'} key={'12'}/>
//                 <Picker.Item label={'United States'} value={'US'} key={'31y7'}/>
//               {this.state.CountriesSet&&this.state.CountriesSet.map((item, index) => {
//                   return (<Picker.Item label={item.name} value={item.shortName} key={index}/>)
//               })}
//           </Picker>
//         </View>
//         <View style={{borderColor: colors.border, borderBottomWidth: 1, height: 40, backgroundColor: colors.white,marginTop:10}}>
//             <Picker
//               selectedValue={this.state.state}
//               style={{height: 40, width: '100%', justifyContent: 'space-between', paddingHorizontal: 30}}
//               mode="dropdown"
//               onValueChange={(itemValue, itemIndex) =>
//                 this.setState({state: itemValue, stateName: this.state.USstates[itemValue], cities: ccs.getCities(this.state.country,this.state.USstates[itemValue])})}>
//              {this.state.USstates&&this.state.USstates.map((item, index) => {
//                   return (<Picker.Item label={item} value={index} key={index}/>)
//               })}
//             </Picker>
//           </View>
//           <Content>
//           <Item>
//             <Input onChangeText={(text)=>{this.setState({city:text})}}  placeholder="City" />
//           </Item>
//         </Content>
//           <Content>
//           <Item>
//             <Input onChangeText={(text)=>{this.setState({address:text})}}  placeholder="Street Address" />
//           </Item>
//         </Content>
//         <Content>
//           <Item style={{flexDirection:'row'}}>
//           <Text style={{marginRight: 20,fontSize:17}}>+{this.state.codeCountry} |</Text><Input keyboardType={'phone-pad'} onChangeText={(text)=>{this.setState({phone:text})}}  placeholder="Phone No.*" />
//           </Item>
//         </Content>
//         <Content>
//           <Item>
//             <Input secureTextEntry={true} onChangeText={(text)=>{this.setState({password:text})}}  placeholder="Password*" />
//           </Item>
//         </Content>
//         <Content>
//           <Item>
//             <Input secureTextEntry={true} onChangeText={(text)=>{this.setState({passwordConfirm:text})}}  placeholder="Confirm Password*" />
//           </Item>
//         </Content>
//         </View>
//         {this.state.showError==true&&  <Text style={{margin:20,textAlign:"center",color:'red'}}>{this.state.msg}</Text>}
//         <TouchableOpacity onPress={this.register} style={{backgroundColor:'#4F5EE8',alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:30, margin: 25,marginTop:0}} >
//              {this.state.isLoading==true?<Spinner color={'white'}/> :<Text style={{color: 'white', fontSize: 13,fontWeight:'bold'}}>Register</Text>}
//               </TouchableOpacity>
//         {/* <View style={{marginHorizontal:0,marginBottom:20,marginVertical:10,marginTop:20,paddingBottom:0,borderBottomWidth:1,borderBottomColor:'#d8d8d8'}}>
//             <View style={{marginLeft:20,paddingBottom:10,borderBottomWidth:2,borderBottomColor:'#4195d1', alignSelf: 'flex-start' }}>
//               <Text style={{color:'#4195d1',fontSize:13,}}>PERSONAL INFORMATION</Text>
//             </View>
//           </View>
//         <View style={{margin: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
//           <View style={{flexDirection: 'column', width: '27%'}}>
//             <Text style={styles.titleText}>Title</Text>
//             <View style={{borderColor: colors.border, borderWidth: 1, height: 40, backgroundColor: colors.white}}>
//               <Picker
//                 selectedValue={this.state.title}
//                 style={{height: 40}}
//                 mode={'dropdown'}
//                 onValueChange={(itemValue, itemIndex) => this.setState({title: itemValue})}>
//                 <Picker.Item label="Mr." value="mr" />
//                 <Picker.Item label="Ms." value="ms" />
//                 <Picker.Item label="None" value="no" />
//               </Picker>
//             </View>
//           </View>
//           <View style={{flexDirection: 'column', width: '70%'}}>
//             <Text style={styles.titleText}>First Name</Text>
//             <TextInput
//               style={styles.textInput}
//               onChangeTextText={(text) => this.setState({firstname: text})}
//               value={this.state.firstname}
//               placeholder='John'
//             />
//           </View>
//         </View>
//         */}

//         {/* <View style={styles.container}>
//           <Text style={styles.titleText}>Last Name</Text>
//           <TextInput
//             style={styles.textInput}
//             onChangeTextText={(text) => this.setState({lastname: text})}
//             value={this.state.lastname}
//             placeholder='Smith'
//           />
//         </View>
       

//         <View style={styles.container}>
//           <Text style={styles.titleText}>Email</Text>
//           <TextInput keyboardType='email-address'
//             style={styles.textInput}
//             onChangeTextText={(text) => this.setState({email: text, email_valid: this.validateEmail(text)})}
//             value={this.state.email}
//             placeholder='abc@xyz.com'
//           />
//           <View style={{alignItems: 'center'}}>
//             {this.state.email_valid ? (<Text style={{fontSize: 14}}></Text>) : (<Text style={{color: colors.Textwrong, fontSize: 14}}>please enter valid email</Text>) }
//           </View>
//         </View>
//         <View style={[styles.container,{marginTop:-10}]}>
//           <Text style={styles.titleText}>Gender</Text>
//           <View style={{borderColor: colors.border, borderWidth: 1, width: '40%', height: 40, backgroundColor: colors.white}}>
//             <Picker
//               selectedValue={this.state.gender}
//               style={{height: 40}}
//               mode={'dropdown'}
//               onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
//               <Picker.Item label="Male" value="1" />
//               <Picker.Item label="Female" value="2" />
//               <Picker.Item label="None" value="3" />
//             </Picker>
//           </View>
//         </View>
//         <View style={{marginHorizontal:0,marginBottom:20,marginVertical:10,marginTop:20,paddingBottom:0,borderBottomWidth:1,borderBottomColor:'#d8d8d8'}}>
//             <View style={{marginLeft:20,paddingBottom:10,borderBottomWidth:2,borderBottomColor:'#4195d1', alignSelf: 'flex-start' }}>
//               <Text style={{color:'#4195d1',fontSize:13,}}>ADDRESS</Text>
//             </View>
//           </View>

//         <View style={styles.container}>
//         <Text style={styles.titleText}>Country</Text>
//         <View style={{borderColor: colors.border, borderWidth: 1, height: 40, backgroundColor: colors.white}}>
//           <Picker
//             selectedValue={this.state.country}
//             style={{height: 40, width: '100%', justifyContent: 'space-between', paddingHorizontal: 30}}
//             mode="dropdown"
//             onValueChange={(itemValue, itemIndex) =>
//               {
//                 console.log(ccs.getCountryCode(itemValue)),
//                 console.log(itemValue),
//                 this.setState({codeCountry:ccs.getCountryCode(itemValue)})
//                 this.setState({USstates: ccs.getStatesByShort(itemValue)})
//                 this.setState({country: itemValue, })}
//               }
//               >
//                 <Picker.Item label={'Pakistan'} value={'PK'} key={'14'}/>
//                 <Picker.Item label={'Canada'} value={'CA'} key={'12'}/>
//                 <Picker.Item label={'United States'} value={'US'} key={'31y7'}/>
//             {this.state.CountriesSet&&this.state.CountriesSet.map((item, index) => {
//                 return (<Picker.Item label={item.name} value={item.shortName} key={index}/>)
//             })}
//           </Picker>
//         </View>
//       </View>
//         <View style={styles.container}>
//           <Text style={styles.titleText}>State</Text>
//           <View style={{borderColor: colors.border, borderWidth: 1, height: 40, backgroundColor: colors.white}}>
//             <Picker
//               selectedValue={this.state.state}
//               style={{height: 40, width: '100%', justifyContent: 'space-between', paddingHorizontal: 30}}
//               mode="dropdown"
//               onValueChange={(itemValue, itemIndex) =>
//                 this.setState({state: itemValue, stateName: this.state.USstates[itemValue], cities: ccs.getCities(this.state.country,this.state.USstates[itemValue])})}>
//              {this.state.USstates&&this.state.USstates.map((item, index) => {
//                   return (<Picker.Item label={item} value={index} key={index}/>)
//               })}
//             </Picker>
//           </View>
//         </View>
       

//         <View style={styles.container}>
//           <Text style={styles.titleText}>City</Text>
//           <TextInput
//             style={styles.textInput}
//             onChangeTextText={(text) => this.setState({city: text})}
//             value={this.state.city}
//             placeholder='Your city'
//           />
//         </View>
       

//         <View style={styles.container}>
//           <Text style={styles.titleText}>Street Address</Text>
//           <TextInput
//             style={styles.textInput}
//             onChangeTextText={(text) => this.setState({address: text})}
//             value={this.state.address}
//             placeholder='Your Address'
//           />
//         </View>
       
//         <View style={[styles.container]}>
//           <Text style={styles.titleText}>Phone No</Text>
          
//         <View style={[styles.textInput,{flexDirection:'row'}]}>
//                 <Text style={{marginRight: 20}}>+{this.state.codeCountry} |</Text>
             
//               <TextInput
//                 // style={[styles.textInput,{width:'90%'}]}
//               style={{width:'90%'}}
//                 keyboardType="numeric"
//                 onChangeTextText={(text) => this.setState({phone: text})}
//                 value={this.state.phone}
//               placeholder="Phone no."></TextInput>
             
//        </View>
     
//         </View>
//         <View style={{marginHorizontal:0,marginBottom:20,marginVertical:10,marginTop:20,paddingBottom:0,borderBottomWidth:1,borderBottomColor:'#d8d8d8'}}>
//             <View style={{marginLeft:20,paddingBottom:10,borderBottomWidth:2,borderBottomColor:'#4195d1', alignSelf: 'flex-start' }}>
//               <Text style={{color:'#4195d1',fontSize:13,}}>LOGIN INFO</Text>
//             </View>
//           </View>

//         <View style={styles.container}>
//           <Text style={styles.titleText}>Password</Text>
//           <TextInput
//             secureTextEntry={true}
//             style={styles.textInput}
//             onChangeTextText={(text) => this.setState({password: text, pass_match: this.passMatch(text,this.state.confirmPassword)})}
//             value={this.state.password}
//             placeholder='Enter Password'
//           />
//         </View>
//         <View style={{margin: 10, marginTop: 0, flexDirection: 'column', justifyContent: 'space-between'}}>
//           <Text style={styles.titleText}>Confirm Password</Text>
//           <TextInput
//             secureTextEntry={true}
//             style={styles.textInput}
//             onChangeTextText={(text) => this.setState({confirmPassword: text, pass_match: this.passMatch(this.state.password,text)})}
//             value={this.state.confirmPassword}
//             placeholder='Confirm Your Password'
//           />
//           <View style={{alignItems: 'center'}}>
//             {this.state.pass_match ? (<Text style={{fontSize: 14}}></Text>) : (<Text style={{color: colors.Textwrong, fontSize: 14}}>Your Passwords Do Not Match</Text>) }
//           </View>
//         </View>
//         */}

    

       
       

 

//        {/* <Image style={{height: 60, width: '100%', resizeMode: 'stretch'}} source={require('../../../assets/intersection2.png')} /> */}

//       </ScrollView>
//     </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mainContainer: {flex: 1, flexDirection: 'column',},
//   logo: {width: 200, height: 100, resizeMode: 'contain', alignSelf: 'center'},
//   container: {margin: 10, flexDirection: 'column', justifyContent: 'space-between'},
//   dashes: {borderWidth: 0.75, borderStyle: 'dashed', borderRadius: 1,marginHorizontal: 10, borderBottomColor:colors.border},
//   titleText: {fontSize: 17, color: '#555', marginBottom: 10, },
//   textInput: {padding: 10, borderColor: colors.border, borderWidth: 1, height: 40, backgroundColor: colors.white},
//   phoneContainer: {height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
//   phoneInput1: {borderColor: colors.border, borderWidth: 1, height: 40, width: '20%', paddingLeft: 10, backgroundColor: colors.white},
//   phoneInput2: {borderColor: colors.border, borderWidth: 1, height: 40, width: '30%', paddingLeft: 10, backgroundColor: colors.white}
// });



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


export default class Signup extends React.PureComponent {
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
            Signup{' '}
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
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>
              {' '}
              Already have account?{' '}
              <Text style={{color: '#4F5EE8'}}> Login now </Text>
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
