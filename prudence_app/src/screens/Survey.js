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


import { Row, Col } from 'native-base';
import {  Form, Item, Picker, Radio, Icon, Left, ListItem, CheckBox, Body } from 'native-base';
import MainHeader from '../Component/MainHeader';

export default class Survey extends React.PureComponent {
    constructor() {
        super();
        this.state = {
          search: '',
          iconColour: true,
          washingMachine: true,
          bike: true,
          selected2:'key1'
        };
      }
      componentDidMount=async()=>{
     
      }
      onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }
      updateSearch = search => {
        this.setState({search});
      };
  render() {
    return (
        <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          height: 100,
        }}>
      
<MainHeader navigation={this.props.navigation}/>
          <View >
            <Text style={{marginLeft:15}}>What are your symptoms? </Text>
            <ListItem onPress={()=> this.setState({check1:!this.state.check1})}>
              <CheckBox  checked={this.state.check1} />
              <Body>
                <Text>{' '} Fever</Text>
              </Body>
            </ListItem>
            <ListItem onPress={()=> this.setState({check2:!this.state.check2})}>
              <CheckBox  checked={this.state.check2} />
              <Body>
                <Text>{' '} Cough</Text>
              </Body>
            </ListItem>
            <ListItem onPress={()=> this.setState({check3:!this.state.check3})}>
              <CheckBox  checked={this.state.check3} />
              <Body>
                <Text>{' '} Sore Throat</Text>
              </Body>
            </ListItem>
            <ListItem onPress={()=> this.setState({check4:!this.state.check4})}>
              <CheckBox  checked={this.state.check4} />
              <Body>
                <Text>{' '} Runny Nose</Text>
              </Body>
            </ListItem>
            <ListItem onPress={()=> this.setState({check5:!this.state.check5})}>
              <CheckBox  checked={this.state.check5} />
              <Body>
                <Text>{' '} Shortness of breath</Text>
              </Body>
            </ListItem>
            <ListItem onPress={()=> this.setState({check6:!this.state.check6})}>
              <CheckBox  checked={this.state.check6} />
              <Body>
                <Text>{' '} Nausea</Text>
              </Body>
            </ListItem>
            <ListItem onPress={()=> this.setState({check7:!this.state.check7})}>
              <CheckBox  checked={this.state.check7} />
              <Body>
                <Text>{' '} Diarrhoea</Text>
              </Body>
            </ListItem>
            <ListItem onPress={()=> this.setState({check8:!this.state.check8})}>
              <CheckBox  checked={this.state.check8} />
              <Body>
                <Text>{' '} No Symptom</Text>
              </Body>
            </ListItem>
 
          </View>
         
          <View >
            <Text style={{marginTop:20,marginLeft:15}}>Since when did you start developing any of the above symptom(s)</Text>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} Last 2 Days</Text>
            </Left>
          
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} 3-5 days</Text>
            </Left>
           
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
                <Radio selected={true} /><Text>{' '} 7 days</Text>
            </Left>
          
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} More than a week</Text>
            </Left>
            
        </ListItem>
     
   
          </View>

       
         <View >
            <Text style={{marginTop:20,marginLeft:15}}>Since how many days are you suffering from fever? *</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder=""
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="1-2 Days" value="key0" />
                <Picker.Item label="3-4 Days" value="key1" />
                <Picker.Item label="5-7 Days" value="key2" />
                <Picker.Item label="More than 7 Days" value="key3" />
                {/* <Picker.Item label="Net Banking" value="key4" /> */}
              </Picker>
            </Item>
          </View>
           <View >
            <Text style={{marginTop:20,marginLeft:15}}>What is your current temperature?
</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder=""
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="99" value="key0" />
                <Picker.Item label="100-103" value="key1" />
                {/* <Picker.Item label="5-7 Days" value="key2" /> */}
                <Picker.Item label="More Than 104" value="key3" />
                {/* <Picker.Item label="Net Banking" value="key4" /> */}
              </Picker>
            </Item>
          </View>



          <View >
            <Text style={{marginTop:20,marginLeft:15}}>During the duration of your fever has it ever dropped below 99 F
</Text>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} Yes</Text>
            </Left>
          
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} No</Text>
            </Left>
           
        </ListItem>
       
     
   
          </View>

       
          <View >
            <Text style={{marginTop:20,marginLeft:15}}>Do you experience cough while sleeping?
</Text>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} Yes</Text>
            </Left>
          
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} No</Text>
            </Left>
           
        </ListItem>
       
     
   
          </View>

          <View >
            <Text style={{marginTop:20,marginLeft:15}}>Do you have productive cough or sputum?
</Text>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} Yes</Text>
            </Left>
          
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} No</Text>
            </Left>
           
        </ListItem>
       
     
   
          </View>


          <View >
            <Text style={{marginTop:20,marginLeft:15}}>What is the color of sputum?
</Text>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} Yellow</Text>
            </Left>
          
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} White</Text>
            </Left>
           
        </ListItem>
       
     
   
          </View>


  
          <View >
            <Text style={{marginTop:20,marginLeft:15}}>Do you have blood in sputum
?
</Text>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} Yes</Text>
            </Left>
          
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} NO</Text>
            </Left>
           
        </ListItem>
       
     
   
          </View>

          <View >
            <Text style={{marginTop:20,marginLeft:15}}>Do you have difficulty swallowing
?
</Text>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} Yes</Text>
            </Left>
          
        </ListItem>
        <ListItem selected={false}  >
            <Left>  
            <Radio selected={true} /><Text>{' '} NO</Text>
            </Left>
           
        </ListItem>
       
     
   
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
