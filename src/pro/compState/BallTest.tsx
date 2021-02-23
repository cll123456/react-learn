import React, { Component } from 'react'
import BallSport from './demo/BallSport'

export default class BallTest extends Component {
  render() {
    return (
      <div>
        <BallSport  width={100} height={100} top={200} left={250} xSpeed={100} ySpeed={200}/>
        <BallSport  width={100} height={100} top={20} left={25} xSpeed={300} ySpeed={100}/>
      </div>
    )
  }
}
