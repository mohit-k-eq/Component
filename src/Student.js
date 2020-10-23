
import React from 'react';

const Student = props => {
    return <h1> hello {props.name} </h1>;
};

export default Student ;


//Using Porps Functional Component
import React from 'react'
const Student = props =>{
    return (
        <div>
           <h1>Hello : {props.name}</h1>
           <h2>Your Roll: {props.roll}</h2>
           </div>
    );
};
export default Student;


//class based Component & using Props Types

import React, { Component } from 'react';
import PropsTypes from "prop-types";
class Student extends Component {
      render () { 
          return(
          <div>
             <h1>hello, {this.props.name}</h1>
             <h1>Your roll:{this.props.roll}</h1>
           </div>
          );
      }
};

Student.propTypes = {
    name:PropsTypes.string
};
export default Student;


STATE

import React, { Component } from 'react'

class Student extends Component {
    state = {
        name : "sarika",
    surname : "yadav"
    };
    render (){
    return <h1>Hello {this.state.name} my surname is {this.state.surname}</h1>;
    }
}
export default Student;

//Event Handling

import React, { Component } from 'react';
class Student extends Component{
    handleClick(){
        console.log("Button Clicked",this);
    }
    render (){
        return(
            <div>
                <h1>Hello Event</h1>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default Student;