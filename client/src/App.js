import React, { useState,useEffect } from 'react'
import './App.css';
import Web3 from "web3";
import axios from 'axios';

function App() {

  const [isWeb3enabled, setWeb3Enabled] = useState(false)
  const jwt = localStorage.getItem('jwt');
  const user = JSON.parse(localStorage.getItem('user'));


  const connectWithWallet = () =>{
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable().then(()=>{
        console.log('Connected')
        setWeb3Enabled(true)
      })
    }
    else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      const errMess = "Non-Ethereum browser detected, try installing Metamask";
      throw new Error(errMess);
    }
  }

  const register = async(address) =>{
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/${address}/v1/register`);
      return response
    } catch(err){
      console.log("error", err.message);
    }
  }

  const login = async () => {
    try {
      const accounts = await window.web3.eth.getAccounts();
      const current_account = accounts[0];
      let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${current_account}/v1/nonce`);
      const nonce = response.data.nonce;
      const signature = await window.web3.eth.personal.sign(
        `I am signing my one-time nonce: ${nonce}`,
        current_account
      );
      if(!response.isRegistered){
        register(current_account)
      }
      response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/${current_account}/v1/signature`, {signature});
      localStorage.setItem('jwt', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.reload();
      console.log("success", "Successfully Logged in!")
    } catch (err) {
      console.log("error", err);
    }
  } 

  const logout = () => {
    try{
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      window.location.reload();
      console.log("success", "Successfully Logged out!");
    } catch( error ){
      console.log("error", error.message);
    }
  }

  useEffect(() => {
    if(isWeb3enabled && !jwt && !user){
      (async()=>{
        const account = await window.web3.eth?.getAccounts();
        console.log(account)
        login()
       })()
    }
  }, [isWeb3enabled])
  
  return (
    <div className="App">
      <div className="App-header">
        <p>{user?user.public_address:"Not logged in"}</p>
        {
          user?
          <button onClick={()=>logout()}>Logout</button>
          :
          <button onClick={()=>connectWithWallet()}>Sign in</button>
        }
      
      </div>
    </div>
  );
}

export default App;
