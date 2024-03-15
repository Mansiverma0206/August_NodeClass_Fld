import { Component} from 'react';

export class App extends Component
{
  constructor()
  {
    super()
    this.state ={
      cities : ["Indore","dewas"]
    }
  }
  add=()=>{
    var city =   document.getElementById('inBox').value;
    // var arr =  this.state.cities
    // arr.push(city)
    // this.setState({cities : arr})
    
    this.setState({cities : [...this.state.cities,city]})
  }
  render()
  {
    return<div>
      <h1>City List</h1>
      <hr/>
      &nbsp;&nbsp; <input type='text' id='inBox' placeholder='Enter your City'/>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={this.add}>Add City</button><hr/>
      <ol>
        {this.state.cities.map(city=><li>{city}</li>)}
      </ol>
    </div>
  }

}