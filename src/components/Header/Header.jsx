import React, { Component } from 'react';

// Images
import logoImage from '../../assets/img/logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';

// Context
import MyContext from '../../context/context';

class Header extends Component {
  render() {
    return (
      <header
        onClick={this.context.changeMenu}
        className="
                mx-auto
                container
                p-[13px]
                flex
                sm:flex-row
                sm:justify-between
                sm:items-center
                flex-col
                gap-[39px]
            ">
        {/* Logo */}
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        {/* Logo */}
        {/* SearchBar */}
        <div
          className="
            flex 
            drop-shadow-md 
            hover:drop-shadow-lg 
            bg-white w-[315px]
            mx-auto
            sm:m-[0px] 
            rounded-[20px]
            cursor-pointer
            ">
          <div
            className="
            py-[19px]
            px-[16px]
            text-center
            border-r-[1px]
            border-[#F2F2F2]
          ">
            <h3 className="text-[#333333] font-normal text-[14px]">{this.context.location}, Finland</h3>
          </div>
          <div
            className="
            py-[19px]
            px-[16px]
            text-center
            border-r-[1px]
            border-[#F2F2F2]
          ">
            <p className="text-[#BDBDBD] font-normal text-[14px]">Add guests</p>
          </div>
          <div
            className="
            py-[19px]
            px-[16px]
            text-center
          ">
            <AiOutlineSearch size={20} />
          </div>
        </div>
        {/* SearchBar */}
      </header>
    );
  }
}

Header.contextType = MyContext;

export default Header;
