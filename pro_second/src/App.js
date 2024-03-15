import { Component } from "react";

export class App extends Component {
  constructor() {
    super()
    this.state = {
      num: 200,
      friends: ["Mansi", "Mohit", "Monika", "Manas", "Manveer"],
      numbers: [22, 34, 65, 7, 56, 67, 54, 678, 5, 575, 75, 357, 46]
    }
  }
  decrement = () => this.setState({ num: this.state.num - 5 });
  increment = () => this.setState({ num: this.state.num + 5 })
  render() {
    return <div>
      <h1>App Component</h1>
      <div>&nbsp;&nbsp;&nbsp;
        <button onClick={this.decrement}>Decrement</button>
        &nbsp;&nbsp;&nbsp;<b>{this.state.num}</b>&nbsp;&nbsp;&nbsp;
        <button onClick={this.increment}>Increment</button>
      </div>
      <hr />
      {this.state.friends}
      <hr />

      <ol>
        {this.state.friends.map(name => <li>{name}</li>)}
      </ol>

      {/* <ol>
    <li>{this.state.friends[0]}</li>
    <li>{this.state.friends[1]}</li>
    <li>{this.state.friends[2]}</li>
    <li>{this.state.friends[3]}</li>
    <li>{this.state.friends[4]}</li>
   </ol> */}
      <hr />
      <ul>
        {this.state.numbers.map(num => {
          return <li>
            {num} : {num%2==0?"Even":"Odd"}
          </li>
        }
        )}
      </ul>
    </div>
  }
}