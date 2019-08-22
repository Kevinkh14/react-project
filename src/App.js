import React, {Component} from 'react';
import Home from './Home'
import Info from "./Info"
import Data from './Data'

import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state ={
      users: [...Data],
      userNum:0
    }
  }
  render(){
    return(
      <div>
        <Home/>
        <Info>
        </Info>
        
        <style>{'body { background-color: #1d2024; }'}</style>
      </div>
     
    )
  }
}
export default  App 