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
import Share from 'react-native-share';
import RNSpeedometer from 'react-native-speedometer'
// import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationActions, StackActions} from 'react-navigation';
import { Row, Col } from 'native-base';
import { saveScore } from '../Apis/Apis';

const RNSlabels = [
    {
        name: '',
        labelColor: '#00ff6b',
        activeBarColor: '#00ff6b',
      },
      {
        name: '',
        labelColor: '#f2cf1f',
        activeBarColor: '#f2cf1f',
      },
        {
          name: '',
          labelColor: '#ff2900',
          activeBarColor: '#ff2900',
        },
      ]

export default class Result extends React.PureComponent {
  state = {
    value:0,data:[]
  };
    share=()=>{
      let ss =this.props.navigation.getParam('score')
      const options = Platform.select({
        ios: {
        //   activityItemSources: [
        //     {
        //       placeholderItem: { type: 'url', content: url },
        //       item: {
        //         default: { type: 'url', content: url },
        //       },
        //       subject: {
        //         default: title,
        //       },
        //       linkMetadata: { originalUrl: url, url, title },
        //     },
        //     {
        //       placeholderItem: { type: 'text', content: message },
        //       item: {
        //         default: { type: 'text', content: message },
        //         message: null, // Specify no text to share via Messages app.
        //       },
        //     },
        //   ],
        },
        default: {
          title:'Covid-19 Risk ',
          subject: 'My Risk Score',
          message: 'https://corona-tracking.com/   My Covid risk score '+ss,
        },
      });
        Share.open(options)
        .then((res) => { console.log(res) })
        .catch((err) => { err && console.log(err); });
    }
    formatDate = () => {
      date = new Date()
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
    
  }
  formatAMPM = () => {
      date = new Date()
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      return hours + ':' + minutes + '' + ampm;
  };
    save=async()=>{
      try {
        let value = await AsyncStorage.getItem('userid');
        console.log(value)
        if(value!=null)
        {
          const reponse = await saveScore(value,this.props.navigation.getParam('score'))
          console.log(reponse)
          this.props.navigation.navigate('DailyScore')
        }
          // if(value==null)
          // {
          //   this.state.scoreObj={score:this.props.navigation.getParam('score'),time:this.formatDate()+' '+this.formatAMPM()}
          //   this.state.data.push(this.state.scoreObj)
          //   await AsyncStorage.setItem('score',JSON.stringify(this.state.data));
          // }
          // else{
          //   value= JSON.parse(value)
          //   this.setState({
          //     data:value
          //   })
          //   this.state.scoreObj={score:this.props.navigation.getParam('score'),time:this.formatDate()+' '+this.formatAMPM()}
          //   this.state.data.push(this.state.scoreObj)
          //   await AsyncStorage.setItem('score',JSON.stringify(this.state.data));
          // }
         
          // We have data!!
       
          // this.setState({
          //     data:value
          // })
        
      } catch (error) {
        console.log(error)
        // Error retrieving data
      }
    }
    componentDidMount=()=>{
      if(this.props.navigation.getParam('score')<=2)
      {
        this.setState({
          value:15
        })
      }
      else if(this.props.navigation.getParam('score')==3){
        this.setState({
          value:50
        })
      }
      else if(this.props.navigation.getParam('score')==4){
        this.setState({
          value:85
        })
      }
    
    }
  render() {
    return (
    <View style={{flex:1,padding:20}}>
      <Image style={{height:100,width:100,alignSelf:'center',marginBottom:10}} source={require('./../assets/images/result.png')}/>
         <Text style={{textAlign:'center',marginBottom:22,fontSize:30,color:'black',fontWeight:'bold'}}>Score: {this.props.navigation.getParam('score')}</Text>
         
         <RNSpeedometer
            value={this.state.value}
            size={270}
            labels= {RNSlabels}
            labelStyle={{color:'white'}}
          />
        {/* <TouchableOpacity style={{alignSelf:'center'}} onPress={this.share}><Entypo name={'share'} color={'white'}/><Text>{' '}Share</Text></TouchableOpacity> */}
        <TouchableOpacity  onPress={this.share} style={{justifyContent:'center',flexDirection:'row',backgroundColor:'#007AFF',alignSelf:'center',alignItems:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:30, margin: 0,marginTop:30}} >
            <Text style={{color: 'white', fontSize: 13,fontWeight:'bold'}}>{' '}Recommendation{' '}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this.share} style={{justifyContent:'center',flexDirection:'row',backgroundColor:'#007AFF',alignSelf:'center',alignItems:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:30, margin: 0,marginTop:30}} >
            <Text style={{color: 'white', fontSize: 13,fontWeight:'bold'}}>{' '}Talk to Us{' '}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity  onPress={this.save} style={{justifyContent:'center',flexDirection:'row',backgroundColor:'#007AFF',alignSelf:'center',alignItems:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:30, margin: 0,marginTop:30}} >
            <Text style={{color: 'white', fontSize: 13,with:200,fontWeight:'bold'}}>{' '}{' '}{' '}{' '}Save{' '}{' '}{' '}{' '}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('UserSelection')} style={{justifyContent:'center',flexDirection:'row',backgroundColor:'#007AFF',alignSelf:'center',alignItems:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:30, margin: 0,marginTop:30}} >
            <Text style={{color: 'white', fontSize: 13,with:200,fontWeight:'bold'}}>{' '}{' '}{' '}{' '}Back{' '}{' '}{' '}{' '}</Text>
        </TouchableOpacity> */}
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
