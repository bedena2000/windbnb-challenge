import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default class SearchButton extends Component {


  render() {
    console.log(this.props);
    return (
        <div className='hidden sm:block'>
        <button className="flex items-center shadow-lg bg-[#EB5757] pt-[15px] pb-[15.94px] pl-[27px] pr-[24px] rounded-[16px] mx-auto">
          <IconContext.Provider
            value={{
              color: '#F2F2F2',
              size: '17.05px',
            }}>
            <AiOutlineSearch className="mr-[10.95px]" />
          </IconContext.Provider>
          <p className="text-[#F2F2F2] text-[14px] font-bold leading-[17.57px]">Search</p>
        </button>
      </div>
    )
  }
}
