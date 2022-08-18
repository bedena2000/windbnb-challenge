import React, { Component } from 'react';

// Context
import MyContext from '../../context/context';

// EachRoom
import EachRoom from '../EachRoom/EachRoom';

export default class Main extends Component {
  componentDidMount() {
    console.log(this.context);
  }
  componentDidUpdate() {
    console.log(this.context);
  }

  render() {
    return (
      <div
        className="
      container
      mx-auto
      px-[13px]
      ">
        <div
          className="
            flex
            justify-between
            items-center
            mt-[37px]
        ">
          <h2 className="text-[#333333] text-[18px] font-bold">Choose Your Room</h2>
          <p className="text-[#4F4F4F] text-[14px] font-medium ">12+ Stays</p>
        </div>

        <div className='
            mt-[24px]
            flex
            flex-col
            gap-[32px]
        '>
          {this.context.rooms
            ? this.context.rooms.map((item) => {
                return (
                  <EachRoom
                    key={item.photo}
                    image={item.photo}
                    superHost={item.superHost}
                    type={item.type}
                    title={item.title}
                    rating={item.rating}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

Main.contextType = MyContext;
