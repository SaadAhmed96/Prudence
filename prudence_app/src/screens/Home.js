
import React, { Component } from "react";
import {FlatList, View, ScrollView, Text, ActivityIndicator, TouchableOpacity,
  Alert, Image, Dimensions, AsyncStorage} from 'react-native';
  import MainHeader from '../Component/MainHeader';
import {colors} from './../Component/index.style';
var {height, width} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/FontAwesome';
import { showMessage, hideMessage } from "react-native-flash-message";
import Modal from "react-native-modal";
import Form1 from './Forms/Form1';
import { RadioButton } from 'react-native-paper';
import { Row, Col } from "native-base";
import CheckboxList from "rn-checkbox-list";
const allSteps = [
  { name: "step 1", component: Form1 },
  // { name: "step 2", component: Step2 },
  // { name: "step 3", component: Step3 },
  // { name: "step 4", component: Step4 }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
          {
              id:'1a',
              nextQues:'2a',
              score:2,
              question:'What is the nature of your work?',
              options:['Directly Treating COVID Patients','Work in a Hospital with no direct contact with Covid Patients','Other']
         
            },
          {
              id:'2a',
              nextQues:'3a',
              score:2,
              question:'Are you satisfied with the PPE provide',
              options:['Yes','No']
          },
          {
              id:'3a',
              nextQues:'4a',
              score:2,
              question:'What is your current mood?',
              options:['Neutra','Sad', 'Happy']
          },
          {
            id:'4a',
            nextQues:'5a',
            score:2,
            question:'What is your current heart rate?',
            options:['Lower than 70','70-90','60-70', '91-120','Higher than 90']
        },
        {
          id:'5a',
          nextQues:'result',
          score:2,
          question:'How much did you sleep last night?',
          options:['Less than 4 hour','4-6 Hours', '6-8 Hours','More than 8 Hours']
      },

          {
            id:'1b',
            nextQues:'2b',
            score:2,
            question:'Have you had close contact with any person, who has returned from the following countries in the last 14 days?',
            options:['Mainland China','Iran','South Korea','Italy','Other high burden country of COVID-19 infection']
          },
          {
              id:'2b',
              nextQues:'3b',
              score:1,
              question:'Did you develop fever after close contact with any person, who has returned from the following countries in the last 14 days?',
              options:['Mainland China','Iran','South Korea','Italy','Other high burden country of COVID-19 infection']
          },
          {
              id:'3b',
              score:1,
              formType:'check',
              nextQues:'result',
              question:' Did you develop the following symptoms after close contact with any person , who has returned from  infected country in the last 14 days?',
              options:[  {id: 1, name: 'Cough' },
              {id: 2, name: 'Cold' },
              {id: 3, name: 'Sore Throat' },
              {id: 4, name: 'Shortness of Breath' },]
          },

          {
            id:'1c',
            score:2,
            nextQues:'2c',
            question:'Have you had close contact with a probable or confirmed case of COVID-19 in last 14 days?',
            options:[]
          },
          {
              id:'2c',
              score:1,
              nextQues:'3c',
              score:1,
              question:'Did you develop a fever after close contact with a probable or confirmed case of COVID-19 in last 14 days?',
              options:[]
          },
          {
              id:'3c',
              score:1,
              nextQues:'result',

              formType:'check',
              question:'Did you develop the following symptoms after close contact with a probable or confirmed case of COVID-19 in last 14 days?',
              options:[  {id: 1, name: 'Cough' },
              {id: 2, name: 'Cold' },
              {id: 3, name: 'Sore Throat' },
              {id: 4, name: 'Shortness of Breath' },]
          },

          {
            id:'1d',
            nextQues:'2d',
            score:2,
            question:'Are you currently living with a probable or confirmed case of Corona since last 14 days?',
            options:[]
          },
          {
              id:'2d',
              nextQues:'3d',
              score:1,
              question:' Did you develop a fever while living with a probable or confirmed case of COVID-19 ?',
              options:[]
          },
          {
              id:'3d',
              score:1,
              nextQues:'result',
              formType:'check',
              question:'Did you develop the following  while living with a probable or confirmed case of COVID-19 in last 14 days?',
              options:[
                 {id: 1, name: 'Cough' },
                 {id: 2, name: 'Cold' },
                 {id: 3, name: 'Sore Throat' },
                 {id: 4, name: 'Shortness of Breath' },
            ]
          }
      
      ],
      apiLoading:true,
      score:0,
      refresh: true,
      questionNo: 0,
      value:undefined,
      showError:false,
      visibleModal: null,
      final_score: 0
    };
    this.props.navigation.addListener('willFocus', this.componentWillFocus)
  }

  componentWillFocus = () => {
    this.componentDidMount()
    this.setState({score:0})
  }
  componentDidMount(){
    this.setState({
      data:this.state.questions[0],
      nextQues:this.state.questions[0].nextQues
    })
  }
  onYes=(id,score)=>{
    if( this.state.value==undefined)
    {
      if(this.state.data.options.length!=0)
      {     
        this.setState({showError:true})

      }
      else{
        this.setState({showError:false})
        if(id=='result'){
          this.state.score= this.state.score+score
     
          console.log(this.state.score)
          this.setState({value:undefined})
          this.props.navigation.navigate('Result',{score:this.state.score})
        }else{
          for (var i = 0; i <this.state.questions.length; i++)
          {
     
            if(id==this.state.questions[i].id)
            {      
               this.state.score= this.state.score+score
              //  this.setState({
              //   score:this.state.score
              // })
              console.log(this.state.score)
              this.setState({value:undefined})
              this.setState({data:this.state.questions[i]})
            }
          }
        }
      }
 
    }
    else{
      this.setState({showError:false})
      if(id=='result'){
        this.state.score= this.state.score+score
   
        console.log(this.state.score)
        this.setState({value:undefined})
        this.props.navigation.navigate('Result',{score:this.state.score})
      }else{
        for (var i = 0; i <this.state.questions.length; i++)
        {
   
          if(id==this.state.questions[i].id)
          {      
             this.state.score= this.state.score+score
            //  this.setState({
            //   score:this.state.score
            // })
            console.log(this.state.score)
            this.setState({value:undefined})
            this.setState({data:this.state.questions[i]})
          }
        }
      }
    }
  
 
  }
  onNo=(id,prevID)=>{
    this.setState({showError:false})
    if(id=='1a')
    {
      this.setState({
        data:this.state.questions[3]
        
      })
      this.setState({value:undefined})
    }
    else if(id=='1b')
    {
      this.setState({
        data:this.state.questions[6]
      })
      this.setState({value:undefined})
    }
    else if(id=='1c')
    {
      this.setState({
        data:this.state.questions[9]
      })
      this.setState({value:undefined})
    }
    else if(id=='1d')
    {
      this.setState({value:undefined})
      this.props.navigation.navigate('Result',{score:this.state.score})
    }
    else{
      if(prevID=='result')
      {
        this.state.score= this.state.score+0
        console.log(this.state.score)
        // this.setState({
        //   score:this.state.score
        // })
        this.setState({value:undefined})
        this.props.navigation.navigate('Result',{score:this.state.score})
      }
      else{
        for (var i = 0; i <this.state.questions.length; i++)
        {
         
          if(prevID==this.state.questions[i].id)
          {
            this.state.score=this.state.score+0
            // this.setState({
            //   score:this.state.score
            // })
            this.setState({value:undefined})
            console.log(this.state.score)
            this.setState({data:this.state.questions[i]})
          }
        }
      }
    
    }
  }
osam=(os)=>{
  console.log(os)
 this.state.value=os
}
  render() {
    return (
      <ScrollView style={{flex:1}}>
        {/* <MainHeader navigation={this.props.navigation}/> */}
       {this.state.data&&
        <View style={{padding:20}}>
           <Text style={{textAlign:'center',marginBottom:22,fontSize:25,color:'black',fontWeight:'bold'}}>{this.state.data.question}</Text>
         
           <RadioButton.Group
              onValueChange={value => this.setState({ value })}
              value={this.state.value}
            >
          { this.state.data.formType=='check'?
            
            <CheckboxList
                headerName="All"
                theme="#007AFF"
                listItems={this.state.data.options}
                onChange={(data) => this.osam(data)}
             
            />
            :
            this.state.data.options.map((option) =>
              <View style={{flexDirection:'row',marginBottom:7}}>
                <RadioButton color={'#007AFF'} value={option} />
                <Text style={{top:5,fontSize:17}}>{option}</Text>
              </View>
            )
          }
            </RadioButton.Group>
           {this.state.showError==true&&<Text style={{marginTop:20,color:'red',textAlign:'center'}}>Please select required field</Text>}
            <Row>
              <Col>
                <TouchableOpacity onPress={()=>this.onNo(this.state.data.id,this.state.data.nextQues)} style={{borderColor:'#007AFF',borderWidth:1,alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:20, margin: 25,marginTop:25,marginLeft:40}} >
                    <Text style={{color: '#007AFF', fontSize: 13,fontWeight:'bold'}}>No</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={()=>this.onYes(this.state.data.nextQues,this.state.data.score)} style={{borderColor:'#007AFF',borderWidth:1,alignSelf:'center', height: 40, justifyContent: 'center', borderRadius:25, paddingHorizontal:20, margin: 25,marginTop:25,marginLeft:40}} >
                    <Text style={{color: '#007AFF', fontSize: 13,fontWeight:'bold'}}>Yes</Text>
                </TouchableOpacity>
              </Col>
              </Row>
        </View>}
      </ScrollView>
      );
  }
}




// import React, { Component } from "react";
// import {FlatList, View, ScrollView, Text, ActivityIndicator, TouchableOpacity,
//   Alert, Image, Dimensions, AsyncStorage} from 'react-native';
//   import MainHeader from '../Component/MainHeader';
// import {colors} from './../Component/index.style';
// var {height, width} = Dimensions.get('screen');
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { showMessage, hideMessage } from "react-native-flash-message";
// import Modal from "react-native-modal";
// import Form1 from './Forms/Form1';

// const allSteps = [
//   { name: "step 1", component: Form1 },
//   // { name: "step 2", component: Step2 },
//   // { name: "step 3", component: Step3 },
//   // { name: "step 4", component: Step4 }
// ];

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       questions: [
//         {ques: 'Have you travelled from Mainland China/Iran/South Korea/ Italy /other high burden country of COVID-19 infection in the last 14 days?'+
//         '\n\nOR\n\n'+
//         'Have you had close contact with any person, who has returned from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?',
//           options: [
//             {name: 'Yes', icon: null, score: 2, color: '#4195d1'},
//             {name: 'No', icon: null, score: 0, color: '#4195d1'},
//           ],
//           selectedOption: null
//         },
//         {ques: 'Have you had close contact with a probable or confirmed case of COVID-19 in last 14 days?'+
//         '\n\nOR\n\n'+
//         'Are you currently living with a probable or confirmed case of Corona since last 14 days?',
//           options: [
//             {name: 'Yes', icon: null, score: 2, color: '#4195d1'},
//             {name: 'No', icon: null, score: 0, color: '#4195d1'},
//           ],
//           selectedOption: null
//         },
//         {ques: 'Did you develop fever after arrival from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?'+
//         '\n\nOR\n\n'+
//         'Did you develop fever after close contact with any person, who has returned from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?',
//           options: [
//             {name: 'Yes', icon: null, score: 1, color: '#4195d1'},
//             {name: 'No', icon: null, score: 0, color: '#4195d1'},
//           ],
//           selectedOption: null
//         },
//         {ques: 'Did you develop a fever after close contact with a probable or confirmed case of COVID-19 in last 14 days?'+
//         '\n\nOR\n\n'+
//         'Did you develop a fever while living with a probable or confirmed case of COVID-19 ?',
//           options: [
//             {name: 'Yes', icon: null, score: 1, color: '#4195d1'},
//             {name: 'No', icon: null, score: 0, color: '#4195d1'},
//           ],
//           selectedOption: null
//         },
//         {ques: 'Did you develop cough / cold / sore throat / shortness of breath after arrival from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?'+
//         '\n\nOR\n\n'+
//         'Did you develop cough / cold / sore throat / shortness of breath after close contact with any person, who has returned from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?',
//           options: [
//             {name: 'Yes', icon: null, score: 1, color: '#4195d1'},
//             {name: 'No', icon: null, score: 0, color: '#4195d1'},
//           ],
//           selectedOption: null
//         },
//         {ques: 'Did you develop cough / cold / sore throat / shortness of breath after close contact with a probable or confirmed case of COVID-19 in last 14 days?'+
//         '\n\nOR\n\n'+
//         'Did you develop cough / cold / sore throat / shortness of breath while living with a probable or confirmed case of COVID-19 in last 14 days?',
//           options: [
//             {name: 'Yes', icon: null, score: 1, color: '#4195d1'},
//             {name: 'No', icon: null, score: 0, color: '#4195d1'},
//           ],
//           selectedOption: null
//         }
//       ],
//       apiLoading:true,
//       refresh: true,
//       questionNo: 0,
//       scores: [],
//       visibleModal: null,
//       final_score: 0
//     };
//     this.props.navigation.addListener('willFocus', this.componentWillFocus)
//   }

//   componentWillFocus = () => {
//     console.log("Survey FOCUSED.")
//     AsyncStorage.setItem('drawerKey','Survey')
//     this.setState({scores: [], final_score: 0})
//   }

//   _renderOptions = ({item, index}) => (
//     <TouchableOpacity
//     onPress={async () => {
//       await (this.state.questions[this.state.questionNo].selectedOption = item.name);
//       this.state.scores[this.state.questionNo] = item.score;
//       this.setState({refresh: !this.state.refresh})
//       if((this.state.questions.length-1) > this.state.questionNo){
//         this.setState({questionNo: this.state.questionNo+1})
//       }
//       // console.log(this.state.questions[this.state.questionNo])
//       }}
//     style={{borderColor:item.color,borderWidth:1,flexDirection: 'column', alignItems: 'center', height: 40, justifyContent: 'center', width: 100, borderRadius: 20,
//     backgroundColor: (this.state.questions[this.state.questionNo].selectedOption === item.name)? item.color:colors.white,
//     }}>
//       {item.icon && <Image source={item.icon} style={{
//         width: (this.state.questions[this.state.questionNo].selectedOption === item.name)?65:50,
//         height: (this.state.questions[this.state.questionNo].selectedOption === item.name)?65:50
//         }} />}
//       <Text adjustsFontSizeToFit={true} numberOfLines={2} style={{width: width/this.state.questions[this.state.questionNo].options.length , textAlign: 'center',
//         fontSize: (this.state.questions[this.state.questionNo].selectedOption === item.name)?22:18,
//         color: (this.state.questions[this.state.questionNo].selectedOption === item.name)? colors.white:item.color}}>
//         {item.name}
//       </Text>
//     </TouchableOpacity>
//   );

//   _renderQPagi = ({item, index}) => (
//     <View
//     style={{width: width/(this.state.questions.length+1), height: 16, borderRadius: 8, borderWidth: 1,
//       borderColor: '#4195d1', backgroundColor: (index <= this.state.questionNo)?'#4195d1':'white'}}>
//     </View>
//   );

//   fillingSurvey = () => {
//     // if(this.state.scores.length == this.state.questionNo){
//     //   console.log('Select option first');
//     //   showMessage({
//     //     message: "Please select an option first.",
//     //     description: "",
//     //     type: "info",
//     //   });
//     //   return ;
//     // }
//     // if((this.state.questions.length-1) > this.state.questionNo){
//     //   this.setState({questionNo: this.state.questionNo+1})
//     // }else {
//       let final_score = 0
//       if(this.state.scores[0]+this.state.scores[1]>1){ final_score = final_score + 2 }
//       if(this.state.scores[2]+this.state.scores[3]>0){ final_score = final_score + 1 }
//       if(this.state.scores[4]+this.state.scores[5]>0){ final_score = final_score + 1 }
//       this.setState({final_score: final_score, visibleModal: 'covoidScoreModal'})
//       console.log('User wants to submit survey. ', final_score)
//     // }
//   }

//   render() {
//     return (
//       <View style={{flex: 1, }}>
//              <MainHeader navigation={this.props.navigation} />
//         <ScrollView keyboardShouldPersistTaps={'handled'} style={{height: '60%'}}>

//           <FlatList
//             horizontal={true}
//             style={{margin: 20}}
//             contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}
//             data={this.state.questions}
//             extraData={this.state.questionNo}
//             keyExtractor={(item, index) => item + index}
//             renderItem={this._renderQPagi}
//           />

//           <Text style={{textAlign: 'center', fontSize: 18, color: colors.Textlight, padding: 10}}>
//           {'Question '+(this.state.questionNo+1)}
//           </Text>
//           <Text style={{textAlign: 'center', fontSize: 18, color: colors.Textlight, padding: 10}}>
//           {this.state.questions[this.state.questionNo].ques}
//           </Text>

//         </ScrollView>

//         <FlatList
//           horizontal={true}
//           style={{}}
//           contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}
//           data={this.state.questions[this.state.questionNo].options}
//           extraData={this.state.refresh}
//           keyExtractor={(item, index) => item + index}
//           renderItem={this._renderOptions}
//         />

//         {this.state.questionNo?
//         (<TouchableOpacity onPress={()=> {if(this.state.questionNo){this.setState({questionNo: this.state.questionNo-1})}}}
//         style={{width: '35%', backgroundColor: colors.white, borderColor: colors.BGprimary,
//         borderWidth: 1, marginBottom: 10, marginRight: 10, alignSelf: 'flex-end', borderRadius: 25}}>
//           <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
//             <Icon name="step-backward" size={20} color={colors.BGprimary} />
//             <Text style={{fontSize: 18, color: colors.Textprimary, padding: 5}}>
//             Previous
//             </Text>
//           </View>
//         </TouchableOpacity>)
//           :
//         <View />}

//         { this.state.questions.length == this.state.scores.length &&
//         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Result')}
//           style={{backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center',
//                   borderColor: colors.BGprimary, borderTopWidth: 2}}>
//           <Text style={{fontSize: 18, color: colors.Textprimary, paddingVertical: 12}}>
//             {'Calculate Score'}
//           </Text>
//         </TouchableOpacity>}

//         <Modal
//           isVisible={this.state.visibleModal === 'covoidScoreModal'}
//           onBackButtonPress={() => this.setState({visibleModal: null})}
//           onBackdropPress={() => this.setState({visibleModal: null})}
//           animationInTiming={1000}
//           animationOutTiming={1000}
//           backdropTransitionInTiming={800}
//           backdropTransitionOutTiming={800}
//           animationIn="zoomInDown"
//           animationOut="zoomOutUp"
//           >
//           <View style={{padding: 10, flexDirection: 'column', backgroundColor: 'white'}}>
//             <Text style={{color: '#073761', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>Your Score: -</Text>

//             <View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 10, width: 80, height: 80, borderRadius: 40,
//             backgroundColor: this.state.final_score < 3?'green':(this.state.final_score < 4?'yellow':'red')}}>
//               <Text style={{fontSize: 30, color: 'white'}}>
//                 {this.state.final_score}
//               </Text>
//             </View>

//             <Text style={{fontSize: 16, color: '#073761', margin: 10}}>
//               {this.state.final_score < 3?'No Chance for development of COVID -19 disease':
//                 (this.state.final_score < 4?'Low probability of COVID -19':
//                 'Moderate to High probability of COVID -19')
//               }
//             </Text>

//             <TouchableOpacity
//               style={{backgroundColor: '#073761', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}
//               onPress={() => {this.setState({visibleModal: null});}}>
//               <Text style={{color: 'white', fontSize: 18, paddingVertical: 5}}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </Modal>

//       </View>
//     );
//   }
// }


