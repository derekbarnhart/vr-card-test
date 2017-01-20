import React, {Component, PropTypes} from 'react'
import {Entity} from 'aframe-react';
import Candle from './Candle'

class Cake extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      candles : [
        {
          color:'red'
        },
        {
          color:'green'
        },
        {
          color:'blue'
        },
        {
          color:'yellow'
        },
        {
          color:'purple'
        }
      ]
    }
  }

  render(){
    let radians = Math.PI*2/ this.state.candles.length
    let candles = this.state.candles.map((candle, i,len)=>{
      let x = Math.cos( i*radians) * .5
      let z = Math.sin( i*radians) * .5
      return (
        <Candle
          key={i}
          scale='0.5 0.5 0.5'
          position={[ x, 0.5, z]}
          color={candle.color}/>
        )
    })

    return (
      <Entity
        geometry={{
          primitive:'cylinder',
          radius:1,
          height:.5
        }}
        material={{color: 'white', opacity: 1}}
        position={this.props.position}>
          {candles}
      </Entity>
    )
  }
}

Cake.propTypes = {
  position : PropTypes.string
}

export default Cake
