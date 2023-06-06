// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  render() {
    const {number} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1>hi</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
