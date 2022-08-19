import React, { Component } from 'react';
// Logos
import { BsPatchMinus } from 'react-icons/bs';
import { BsPlusSquare } from 'react-icons/bs';

export default class Counter extends Component {
  render() {
    return (
      <div className="mt-[48px]">
        <h3 className="text-[14px] font-bold text-[#333333] mb-[8px]">{this.props.name}</h3>
        <p className="text-[14px] text-[#BDBDBD] font-normal mb-[12px]">{this.props.description}</p>
        <div className="flex items-center">
          <BsPatchMinus className="mr-[15px]" />
          <p className="font-bold text-[14px] leading-[17.54px] text-[#333333]">0</p>
          <BsPlusSquare className="ml-[15px]" />
        </div>
      </div>
    );
  }
}
