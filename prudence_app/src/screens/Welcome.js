import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from 'react-native';

export default class registration extends React.Component {
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {/* <Image
            source={require("./../assets/finallogo.png")}
            resizeMode="contain"
            style={{ height: 200, width: 200 }}
          ></Image> */}

          <Text style={styles.welcome}> Welcome </Text>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dummy}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy
                {/* <Image
                    source={require("./../assets/Artboardd.png")}
                    resizeMode="stretch"
                    style={{
                      height: 16,
                      marginLeft: 15,
                      width: 16,

                      borderColor: "red",
                      tintColor: "red"
                    }}
                  ></Image> */}
              </Text>
            </View>

            <Text style={styles.dummy}>
              text used in laying out print, graphic or web designs.
            </Text>
          </View>
        </View>

        <View style={styles.buttonview}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.loginbtn}>
            <View style={styles.tocenterview}>
              <Text style={styles.logintext}>LOGIN</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
            style={styles.signupbtn}>
            <View style={styles.tocenterview}>
              <Text style={styles.signuptext}>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    color: 'orange',
    fontSize: 25,
    marginTop: -30,
    fontFamily: 'opreg',
  },
  dummy: {
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20,
    color: '#A0A0A0',
    fontSize: 15,
    fontFamily: 'opreg',
    textAlign: 'center',
    // borderWidth: 1
  },
  buttonview: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  loginbtn: {
    height: 50,
    flex: 1,
    marginRight: 5,
    backgroundColor: '#103056',
    borderRadius: 5,
  },

  signupbtn: {
    height: 50,
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#C62930',
    borderRadius: 5,
  },
  logintext: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'opreg',
    alignItems: 'center',
  },
  tocenterview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signuptext: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'opreg',
    alignItems: 'center',
  },
});
