// Write your code here let a = Math.ceil(Math.random()*100);
// console.log(a);

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state
    let even
    if (count % 2 === 0) {
      even = 'Even'
    } else {
      even = 'Odd'
    }
    return (
      <div className="bg-container">
        <h1 className="count"> Count {count}</h1>
        <p className="para"> Count is {even}</p>
        <button className="btn" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="desc">
          <sup>*</sup>Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
