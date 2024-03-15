import { Component } from 'react';

import { First , Second} from './Demo';
import MyComponent from './Demo';

// import React from 'react';
// class App extends React.Component{}

export class App extends Component {
  render() {
    var title = "InfoGrains"
    var num = 100;
    return <div>
      <h1>App Component</h1>
      <b>{title}</b>
      <br/>
      <b>{num+100}</b>
      <hr/>
      <First />
      <Second/>
      <MyComponent/><hr/>
    </div>
  }
}
 
