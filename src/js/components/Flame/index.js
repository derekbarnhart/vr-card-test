import React, {Component, PropTypes} from 'react'
import {Entity} from 'aframe-react';
import update from 'react-addons-update';

import wobble from './animations/wobble'
import pulse from './animations/pulse'

const BURNING       = "BURNING"
const EXTINGUISHED  = "EXTINGUISHED"


const animations = {

  [BURNING] : {
    outerFlame: [
      wobble({dur:1000,to:'3 3 3'}),
      pulse({dur:600,to:'1.1 1.1 1.1'})
    ],
    innerFlame:[
      wobble({dur:1200,to:'3 3 3'}),
      pulse({dur:500,to:'1.1 1.1 1.1'})
    ]
  },
  [EXTINGUISHED]: {
    outerFlame: [
      pulse({dur:600, to:'0 0 0'})
    ],
    innerFlame:[
      pulse({dur:600,to:'0 0 0'})
    ]
  }

}



class Flame extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      show:false,
      state: BURNING
    }
  }
  componentDidMount(){

  }
  handleClick(){
    let newState = update(this.state,{
      state:{ $set: EXTINGUISHED}
    })
    this.setState(newState)
  }

  ignite(){
    let newState = update(this.state,{
      innerFlame: {$set: burningInnerFlameState},
      outerFlame: {$set: burningOuterFlameState}
    })
    this.setState(newState)
  }

  extinguish(){
    let newState = update(this.state,{
      innerFlame: {$set: extinguishedInnerFlameState},
      outerFlame: {$set: extinguishedOuterFlameState}
    })
    this.setState(newState)
  }

  render(){
    let show = this.state.show
    //let animation = wobble({dur:1000,to:'3 3 3'})
    let outerAnimations = animations[this.state.state].outerFlame
    let innerAnimations = animations[this.state.state].innerFlame

    return (
      <Entity
        geometry={{
          primitive:'cone',
          radiusBottom:.175,
          radiusTop:.04,
          height:.5
        }}
        material={{color: 'yellow', opacity: .5}}
        position={this.props.position}
        //animation__rot={this.state.outerFlame.rot }
        //animation__scale={this.state.outerFlame.scale }
        // events={{
        //   'mouseenter':this.props.mouseenter.bind(this),
        //   'mouseleave':this.props.mouseleave.bind(this),
        //   'click': this.handleClick.bind(this)
        // }}

        onClick={this.handleClick.bind(this)}>

        { outerAnimations }


          <Entity
            geometry={{
              primitive:'cone',
              radiusBottom:.07,
              radiusTop:.02,
              height:0.2
            }}
            height=".7"
            material={{color: 'red', opacity: .5}}
            position='0 -0.15 0'
            //animation__rot={this.state.innerFlame.rot}
            //animation__scale={this.state.innerFlame.scale}
            >
              {innerAnimations}
            </Entity>
        </Entity>

    )
  }
}

Flame.propTypes = {
  position: PropTypes.string
}
Flame.defaultProps = {
  mouseenter: ()=>{

  },
  mouseleave: ()=>{}
}

export default Flame
