import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  I18nManager,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainHeader from '../Component/MainHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar} from 'react-native-elements';
import { Row, Col } from 'native-base';
import Modal from "react-native-modal";
export default class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      bike: true,
      showMape:false,
      Category: [
        {
          name: 'bikes',
          Image: require('../assets/images/tv.png'),
        },
        {
          name: 'mobile',
          Image: require('../assets/images/wash.png'),
        },
        {
          name: 'Home Appliencce',
          Image: require('../assets/images/bike.png'),
        },
        {
          name: 'fright',
          Image: require('../assets/images/phone.png'),
        },
        // {
        //   name: 'Washing machine ',
        //   Image: require('../assets/images/facebook.png'),
        // },
        // {
        //   name: 'bikes',
        //   Image: require('../assets/images/facebook.png'),
        // },
      ],
      productPics: [
        {
          name: 'bikes',
          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'mobile',
          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Home Appliencce',
          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'fright',
          Image: require('../assets/images/phone.png'),
        },
        // {
        //   name: 'Washing machine ',
        //   Image: require('../assets/images/facebook.png'),
        // },
        // {
        //   name: 'bikes',
        //   Image: require('../assets/images/facebook.png'),
        // },
      ],
      bikesArray: [
        {
          name: 'honda bike ',
          engineCapacity: '12 cc',
          price: ' 11,500 ',

          Image: require('../assets/images/21.png'),
        },
        {
          name: ' unique  bikes',
          engineCapacity: '12 cc',
          price: ' 18,500 ',

          Image: require('../assets/images/22.png'),
        },
        {
          name: ' super star bikes',
          engineCapacity: '12 cc',
          price: ' 81,500 ',

          Image: require('../assets/images/21.png'),
        },
        {
          name: ' honda  bikes',
          engineCapacity: '12 cc',
          price: ' 10,500 ',

          Image: require('../assets/images/scuty.png'),
        },
        // {
        //   name: 'bikes',
        //   engineCapacity:'12 cc',
        //   price:' 101 ,500 ',

        //   Image: require('../assets/images/facebook.png'),
        // },
      ],
      MobileArray: [
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/mobilephone.jpg'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/mobilephone.jpg'),
        },
      ],
      WachingMachine: [
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/mobilephone.jpg'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/mobilephone.jpg'),
        },
      ],
    };
  }
  updateSearch = search => {
    this.setState({search});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          height: 100,
        }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#f5f5f5',
            paddingBottom: 50,
          }}>
             <MainHeader navigation={this.props.navigation} />
             <Row
            style={{
              height: 40,
              width: '100%',
              // borderWidth: 1,
              backgroundColor: '#4195d1',
              flexDirection: 'row',
              paddingLeft: 20,
            //   alignItems: 'center',
            // justifyContent:'center',
            alignItems:'center'
            }}>
            <Col style={{ flexDirection: 'row',alignItems:'center'}}>
            <Entypo name={'phone'} size={20} color="white" />
            <Text
              style={{marginHorizontal: 5,fontSize:12, color: 'white', fontWeight: '400'}}>
              {' '}
              0300- 53193358{' '}
            </Text>
            </Col>
            <Col>
            <Text
              style={{textAlign:'right',marginHorizontal: 5,paddingLeft:10, color: 'white',fontSize:12, fontWeight: '400'}}>
              {' '}
              نقدوآسان اقساط کا بااعتماد ادارہ{' '}
            </Text>
            </Col>
          </Row>

         

         

        
          <View
            style={{
              width: '70%',
              alignSelf: 'center',
              borderBottomWidth: 4,
              height: 50,
              borderRadius: 10,
              borderColor: '#dadada',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '40%',
                alignSelf: 'center',
                borderBottomWidth: 4,
                position: 'absolute',
                bottom: -4,
                // height: 50,
                borderRadius: 10,
                borderColor: '#4195d1',
              }}></View>
            <Text
              style={{
                width: '40%',
                alignSelf: 'center',
                // borderBottomWidth: 4,
                borderColor: '#4195d1',
                textAlign: 'center',
                // height: 20,
                borderRadius: 15,
                fontSize: 20,
                fontWeight: '600',marginBottom:10
              }}>
              {' '}
              About Us
            </Text>
          </View>
          <View style={{padding:20,}}>
            <Text style={{color:'#231F20'}}>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek"s fun TV quiz game. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens</Text>
          </View>
          <View
            style={{
              width: '70%',
              alignSelf: 'center',
              borderBottomWidth: 4,
              height: 50,
              borderRadius: 10,
              borderColor: '#dadada',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '40%',
                alignSelf: 'center',
                borderBottomWidth: 4,
                position: 'absolute',
                bottom: -4,
                // height: 50,
                borderRadius: 10,
                borderColor: '#4195d1',
              }}></View>
            <Text
              style={{
                width: '100%',
                alignSelf: 'center',
                // borderBottomWidth: 4,
                borderColor: '#4195d1',
                textAlign: 'center',
                // height: 20,
                borderRadius: 15,
                fontSize: 20,
                fontWeight: '600',marginBottom:10
              }}>
              {' '}
              Our Website
            </Text>
          </View>
          <View
                  style={{
                    // height: 100,
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 10,
                    marginHorizontal: 10,
                    paddingVertical:15,
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                  }}
                  >
         
          <View style={{alignSelf:'center'}}>

                  <Text style={{textAlign:'center' ,color:'#231F20'}}>www.paradisecity.com</Text>
          </View>
          </View>
          <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P1</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Head Office</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>0300-8487711</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>headoffice@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Near Toyota Car Showroom, Peco Road Kot Lakhpat Lahore</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>this.setState({showMape:true})} style={{marginTop:10,alignSelf:'center'}}>
                        <Text style={{fontSize:15,textAlign:'center' ,color:'#4195d1'}}>See All Locations</Text>
                        {/* <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Near Toyota Car Showroom, Peco Road Kot Lakhpat Lahore</Text> */}
                </TouchableOpacity>
        

       
                <Modal isVisible={this.state.showMape}>
                  <ScrollView style={{flex:1,backgroundColor:'#F5F5F5',paddingVertical:20,paddingBottom:100}}>
                <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P1</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Head Office</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>0300-8487711</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>headoffice@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Near Toyota Car Showroom, Peco Road Kot Lakhpat Lahore</Text>
                </View>
            </View>
            <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P1</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Head Office</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>0300-8487711</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>headoffice@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Near Toyota Car Showroom, Peco Road Kot Lakhpat Lahore</Text>
                </View>
            </View>
            <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P1</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Head Office</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>0300-8487711</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>headoffice@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Near Toyota Car Showroom, Peco Road Kot Lakhpat Lahore</Text>
                </View>
            </View>
            <TouchableOpacity
           onPress={()=>this.setState({showMape:false})}
           style={{
             width: '80%',
           //   alignSelf: 'center',
           //   alignItems: 'center',
           //   justifyContent: 'center',
             // borderWidth: 1,
             backgroundColor: '#bd2e1e',
             paddingVertical: 10,
             marginVertical: 20,
             borderRadius: 5,
             borderBottomEndRadius:0,
             borderTopStartRadius:0,
             alignSelf:'center',
             marginBottom:20
           }}>
           <Text style={{textAlign:'center',color:'white',paddingHorizontal:80}}> Close</Text>
         </TouchableOpacity>
            </ScrollView>
            
              </Modal>
           
        </ScrollView>
      </View>
    );
  }
}
