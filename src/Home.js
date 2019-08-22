import React, {Component} from 'react';


class Home extends Component{

 
    render(){
        return(
            <div className = 'home' style ={{'height': '13vh','margin-top':'-2vh'}}>
                <h1 style = {{'position':'relative','left':'3vw','top':'3vh'}}>Home</h1>
                <style>{'.home { background-color: #34c9eb; }'}</style>
                <style>{'h1 { font-size: 3vw; }'}</style>
                
            </div>
        )
    }
}                                                                
export default Home