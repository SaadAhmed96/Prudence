// import React from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import Home from './Home';
// import Login from './Login';
// import Welcome from './Welcome';
// import Register from './Register';
// import Category from './Category';
// import ProductDetails from './ProductDetails';
// import AboutUs from './AboutUs';

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Welcome: {
//       screen: Welcome,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Login: {
//       screen: Login,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Register: {
//       screen: Register,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Category: {
//       screen: Category,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     ProductDetails: {
//       screen: ProductDetails,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     AboutUs: {
//       screen: AboutUs,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//   },
//   {
//     initialRouteName: 'AboutUs',
//   },
// );

// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
import React from 'react';
import { createSwitchNavigator, createDrawerNavigator,
  createStackNavigator, createAppContainer,
  createBottomTabNavigator } from "react-navigation";


import Home from './Home';
import Login from './Login';

import Signup from './Register';


import SideBar from './SideBar'
import Survey from './Survey';
import Agreement from './Agreement';
import UserSelection from './UserSelection';
import Result from './Result';
import DailyScore from './DailyScore';
import AppIntro from './AppIntro';




const AgreementNavigation = createStackNavigator({
  Agreement:{screen:Agreement},
  AppIntro:{screen:AppIntro}


},{
  initialRouteName: "Agreement",
  headerMode: "none"
});

const LoginNavigation = createStackNavigator({

  Login: { screen: Login },
  // UserSelection:{screen:UserSelection},
  Signup: { screen: Signup },
 

},{
  initialRouteName: "Login",
  headerMode: "none"
});

const HomeNavigator = createStackNavigator({
  Home: { screen: Home },
  Result:{screen:Result},
  DailyScore:{screen:DailyScore}
  // Category:{screen:Category},


},{
  initialRouteName: "Home",
  headerMode: "none"
});



const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Survey:{screen:Survey},
 



  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Agreement:{screen:AgreementNavigation},
    UserSelection: {screen: LoginNavigation},

    Dashboard: {screen: AppNavigator},
   
   
    
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}