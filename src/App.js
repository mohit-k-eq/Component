import React, { Component } from 'react';

class App extends Component{
  render() {
      return  <h1>hello world</h1>;
  }
}

export default App;

import React, { Component } from 'react'

class App extends Component{
    render() {
        return <>
        <h1> hello rocks </h1>
          <h2> world </h2>
          </> 
    }
}

export default App;

import React from "react";
import Student from "./Student";

const App = () =>{
    return (
        <div>
            <Student name="sonam" />
            <Student name="mohit" />
            <Student name="dhara" />
        </div>
    );
};

export default App;



import React from 'react'

//simple string
const el = <h1>hello moto</h1>;
export default el;

//math exppresion
const el = <h1>{10+20}</h1>;
export default el;

//Variable
const name = "mohit";
const el =<h1>hello{name}</h1>;
export default el;

//Function
function show(name) {
    return name;
}
const el = <h1>hello{show("sonam")}</h1>;
export default el;

//Property
let user = {
    firstname: "priya"
};
const el = <h1>hello {user.firstname}</h1>;
export default el;

//Attributes
import "./App.css";
const el =<h1 className="bg">Hello</h1>;
export default el;













