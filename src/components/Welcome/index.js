import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {value: 'Subscribe'}

  onClicking = () => {
    this.setState(previous =>
      previous.value === 'Subscribe'
        ? {value: 'Subscribed'}
        : {value: 'Subscribe'},
    )
  }

  render() {
    const {value} = this.state
    return (
      <div className="for_outer">
        <h1 className="forHeader">Welcome</h1>
        <p className="forPara">Thank you! Happy Learning</p>
        <button className="for_button" type="button" onClick={this.onClicking}>
          {value}
        </button>
      </div>
    )
  }
}

export default Welcome
