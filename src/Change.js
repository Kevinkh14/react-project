import React, {Component} from 'react';

class Change extends Component{
    render(){
        return(
            <div className = 'buttons'>
                <button style ={{'background-color':'transparent','color':'white','borderColor':'transparent',
                 'fontSize':'30px', 'marginLeft':'14vw'}}>{'<'}Previous</button>
                 <button style ={{'background-color':'transparent','color':'white','borderColor':'transparent',
                 'fontSize':'30px', 'marginLeft':'54vw'}}>Next{'>'}</button>
                 <button id = 'middle'>Edit</button>
                 <button id = 'middle'>Delete</button>
                 <button id = 'middle'>new</button>
            </div>
        )
    }
}
export default Change
