import axios from 'axios'
// import { stat } from 'fs';
export const baseUrl = 'https://api.corona-tracking.com/api/'

  export const register = async (firstname,lastname,email,country,state,city,latitude,longitude,phone,password,age,gender) => {
   console.log(firstname,lastname,email,country,state,city,latitude,longitude,phone,password,age,gender)
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    const bodyconfig ={
      "firstname": firstname,
      "lastname": lastname,
      "city": city,
      "age": age,
      "latitude": latitude,
      "longitude": longitude,
      "email": email,
      "phone":phone,
      "country":country,
      "state":state,
      "password":password,
      "gender":gender
  }
  console.log(bodyconfig)

  
    var res = {}
    await axios.post(baseUrl + 'register',bodyconfig, headersconfig)
      .then(function (response) {
        console.log('response recieved in register : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in register : ', handleError)
        // res = handleError.data
        // res.status = handleError.status
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }
  
  export const login = async (email,password) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    const bodyconfig = JSON.stringify({
      email:email
    })

  
    var res = {}
    await axios.post(baseUrl + 'login',bodyconfig, headersconfig)
      .then(function (response) {
        console.log('response recieved in login : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in login : ', handleError)
        // res = handleError.data
        // res.status = handleError.status
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }

  export const saveScore = async (id,score) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    const bodyconfig = JSON.stringify({
      user_id:id,
      score:score
    })

  
    var res = {}
    await axios.post(baseUrl + 'response',bodyconfig, headersconfig)
      .then(function (response) {
        console.log('response recieved in saveScore : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in saveScore : ', handleError)
        // res = handleError.data
        // res.status = handleError.status
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }


  export const getScore = async (id) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    const bodyconfig = JSON.stringify({
      user_id:id,
      score:score
    })

  
    var res = {}
    await axios.get(baseUrl + 'response/'+id, headersconfig)
      .then(function (response) {
        console.log('response recieved in getScore : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getScore : ', handleError)
        // res = handleError.data
        // res.status = handleError.status
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }