// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    const {number} = this.state

    this.setState(prevState => {
      return {
        number: Math.random() * 100,
      }
    })
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div className="btn">
            <button type="button" onClick={this.generateNumber}>
              Generate
            </button>
          </div>
          <p className="random">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
