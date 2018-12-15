import React, {Component} from 'react';

//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onClick={() => {console.log("I am clicked.")}} />

//      </React.Fragment>
//    )
//  }
//
const App = () => ( <Counter></Counter>)
class Counter extends Component{
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    console.log("handleplust");
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    console.log("handleminus");
    this.setState({count: this.state.count -1 })
  }

  render(){
    console.log(this.state)
    return(
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button　onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>

    )
  }

}


export default App;
