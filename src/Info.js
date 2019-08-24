import React, {Component} from 'react';
import Data from "./Data"
import data from './Data';
import './App.css'

class Info extends Component{
    constructor(){
        super()
        this.state={
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment= ()=>{
        this.setState({counter:this.state.counter+1});
    }
    decrement= ()=>{
        this.setState({counter:this.state.counter-1});
        
    }
   

    changeCounter = (num) => {
        if(this.state.counter === data.length - 1 && num > 0) {
            this.setState({counter: 0});
        } else if(this.state.counter <= 0 && num < 0) {
            this.setState({counter: data.length - 1});
        } else {
            this.setState({counter: this.state.counter + num});
        }

    }

    render(){
        return(
        <div className ='first'>
            <div className = 'card' style = {{'height': '50vh','background-color':'white',
            'width':'70vw', 'margin-top': '15vh','margin-left':'15vw'}}>
                <h1 className ="counter">{this.state.counter+1}/{Data.length}</h1>
                <h1 className ="name">{Data[this.state.counter].name.first} {Data[this.state.counter].name.last}</h1>
                <h1 className ='state'>From: {Data[this.state.counter].city}, {Data[this.state.counter].country}</h1>
                <h1 className = 'job'>Job title: {Data[this.state.counter].title}</h1>
                <h1 className ='employer'>Employer: {Data[this.state.counter].employer}</h1>
                <h1 className ='mov'>Favorite movies:</h1>
                <ul className ='fav'>
                    <l1>{Data[this.state.counter].favoriteMovies[0]}</l1>
                    <l1>{Data[this.state.counter].favoriteMovies[1]}</l1>
                    <l1>{Data[this.state.counter].favoriteMovies[2]}</l1>
                </ul>
            </div>
            <div className = 'buttons'>
                <button onClick = {()=>this.changeCounter(-1)} style ={{'background-color':'transparent','color':'white','borderColor':'transparent',
                 'fontSize':'2.5vw','margin-left':'15vw','cursor':'pointer'}}>{'<'}Previous</button>
                 <button onClick ={()=>this.changeCounter(1)} style ={{'background-color':'transparent','color':'white','borderColor':'transparent',
                 'fontSize':'2.5vw','marginLeft':'50vw','cursor':'pointer'}}>Next{'>'}</button>
                
            </div>
            <div className = 'h'>
                <button id = 'but'>Edit</button>
                 <button id = 'but'>Delete</button>
                 <button id = 'but'>new</button>
            </div>
        </div>  
        )
    }
    
}

export default Info