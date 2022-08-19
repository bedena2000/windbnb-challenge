import React, { Component } from 'react'
import MyContext from '../../context/context'

export default class Background extends Component {
  render() {
    return (
      <div onClick={this.context.changeMenu} className='absolute bg-slate-800 top-0 left-0 w-full h-full z-[20] opacity-[0.6]'>
        
      </div>
    )
  }
}

Background.contextType = MyContext;