import React, { Component } from 'react';
// Logos
import { BsPatchMinus } from 'react-icons/bs';
import { BsPlusSquare } from 'react-icons/bs';

// Context
import MyContext from '../../context/context';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="mt-[48px]">
        <h3 className="text-[14px] font-bold text-[#333333] mb-[8px]">{this.props.name}</h3>
        <p className="text-[14px] text-[#BDBDBD] font-normal mb-[12px]">{this.props.description}</p>
        <div className="flex items-center">
          <BsPatchMinus
            onClick={() => {
              if (this.state.counter !== 0) {
                this.setState({
                  counter: this.state.counter - 1,
                });
                setTimeout(() => {
                  this.props.changeGuestsAmount(this.state.counter, this.props.whosIsThis);
                }, 0);
              }
            }}
            className="mr-[15px]"
          />
          <p className="font-bold text-[14px] leading-[17.54px] text-[#333333]">
            {this.state.counter}
          </p>
          <BsPlusSquare
            onClick={() => {
              this.setState({
                counter: this.state.counter + 1,
              });
              setTimeout(() => {
                this.props.changeGuestsAmount(this.state.counter, this.props.whosIsThis);
              }, 0);
            }}
            className="ml-[15px]"
          />
        </div>
      </div>
    );
  }
}

Counter.contextType = MyContext;
