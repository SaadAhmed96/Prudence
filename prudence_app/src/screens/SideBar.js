import React, { Component } from "react";
import {Image, FlatList, View, StyleSheet, Dimensions, Text, TouchableOpacity,AsyncStorage} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

// const default_person = require("../../../assets/dummy.png");

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas : [],
      selectedID: 1,
      userName:'',
      userType:'',
    }
  }
  componentDidMount(){
    this._retrieveData()
    
  }
  _retrieveData = async () => {
  
          this.setState({datas : [
            { id: '1', name: "Contact", key: "UserSelection", icon:<Entypo name={'home'} color={'#4195d1'} size={17}/>},
            { id: '2', name: "Risk Assesment", key: "Home",icon:<Entypo name={'user'} color={'#4195d1'} size={17}/>  },
            { id: '5', name: "Score History", key: "DailyScore",icon:<MaterialIcons name={'settings-backup-restore'} color={'#4195d1'} size={17}/>  },
            // { id: '6', name: "Suspects", key: "Favourite",icon:<Entypo name={'heart'} color={'#4195d1'} size={17}/>  },
            // { id: '7', name: "Survey", key: "Survey", icon:<Entypo name={'info'} color={'#4195d1'} size={17}/> },
            // { id: '8', name: "Logout", key: "Login", icon:<Entypo name={'log-out'} color={'#4195d1'} size={17}/> },
          ]})
      
      
     
   
  };
  _keyExtractor = (item, index) => item.id;
logout=async()=>{
  await AsyncStorage.clear()
  this.props.navigation.navigate('Login')
}
  _renderItem = ({item}) => (
    <TouchableOpacity activeOpacity={1} style={{ paddingLeft:20,flexDirection: 'row', backgroundColor:'white',alignItems:"center"}}
          onPress={()=> this.props.navigation.navigate(item.key)}
           >
        <View style={{zIndex:30,padding:10,paddingVertical: 15,backgroundColor:'#fffff',borderTopStartRadius:item.name=='Home'?20:0,borderTopEndRadius:item.name=='Home'?20:0}}>       
          {item.icon}
        </View>
        <View style={{marginLeft:20,width:'60%',borderBottomColor:"#cccccc",borderBottomWidth:1}}>
        <Text style={{fontSize: 16, color:'#171717',marginBottom:10}}>
          {item.name}
        </Text>
        </View>
    </TouchableOpacity>
    
  );

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{paddingTop:100}}>
                {/* <Text style={{textAlign:'center',color:'#171717' , fontSize:18,fontWeight:'bold'}}>Bastian Schweinsteiger</Text> */}
            </View>
          <FlatList
            data={this.state.datas}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            extraData={this.state}
            style={{backgroundColor:'white',marginTop:30}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 4.5,
    width: null,
    position: "relative",
    justifyContent: 'center',
    backgroundColor:'white'

  },
  drawerImage: {
    width: 100,
    height: 100,
    borderRadius:50,
    borderWidth: 2,
    borderColor: 'white'
  }
});
