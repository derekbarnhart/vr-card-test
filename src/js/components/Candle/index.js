import React, {Component, PropTypes} from 'react'
import {Entity} from 'aframe-react';
import Flame from '../Flame'

class Candle extends Component {
  constructor(){
    super(...arguments);

  }
  render(){
    return (
      <Entity
        geometry={{
          primitive:'cylinder',
          radius:0.15,
          height:1
        }}
        scale={this.props.scale}
        material={{color: this.props.color, opacity: 1}}
        position={this.props.position}>
        <Flame
          position='0 .85 0'
          ></Flame>
        <Entity
          geometry={{
            primitive:'cylinder',
            radius:0.02,
            height:.5
          }}
          material={{color: 'black', opacity: .6}}
          position='0 .5 0'
          ></Entity>
      </Entity>

    )
  }
}

Candle.propTypes = {
  position: PropTypes.string,
  color: PropTypes.string,
  scale: PropTypes.string
}

Candle.defaultProps = {
  position: '0 0 0',
  color: 'blue',
  scale: '1 1 1'
}

export default Candle
