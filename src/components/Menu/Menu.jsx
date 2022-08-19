import React, { Component } from 'react';
// Icons
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

// Components
import Counter from '../Counter/Counter';
import SearchButton from '../SearchButton.jsx/SearchButton';

export default class Menu extends Component {
  render() {
    return (
      <div
        className="
        bg-white
        w-full
        absolute
        z-[2]
        top-0
        left-0
        px-[16px]
        pt-[18px]
        pb-[24px]
        shadow-lg
      ">
        <div className="flex items-center justify-between">
          <p
            className="
                text-[12px]
                font-bold
                text-[#333333]
            ">
            Edit your search
          </p>
          <div className="flex justify-center items-center scale-100 hover:scale-110 cursor-pointer border-[1px] border-white hover:border-black transition ease-in delay-10 bg-white hover:bg-slate-100">
            <AiOutlineClose />
          </div>
        </div>

        <div
          className="
          bg-white
          drop-shadow-md
          rounded-[16px]
          mt-[16px]
          sm:flex
          sm:justify-between
        ">
          <div
            className="
            py-[12px]
            border-b-[1px]
            px-[26px]
            border-[#F2F2F2]
            sm:flex
            sm:flex-col
            sm:justify-center
          ">
            <p
              className="
                text-[#333333]
                text-[9px]
                mb-[4px]
                sm:mb-[0px]
                font-extrabold
            ">
              Location
            </p>
            <h3
              className="
                text-[14px]
                font-normal
                text-[#333333]
            ">
              Helsinki, Finland
            </h3>
          </div>

          <div
            className="
            py-[12px]
            px-[26px]
            sm:flex
            sm:flex-col
            sm:justify-center
          ">
            <p
              className="
                text-[#333333]
                text-[9px]
                mb-[4px]
                font-extrabold
            ">
              Guest
            </p>
            <h3
              className="
                text-[#BDBDBD]
                text-[14px]
                font-normal
            ">
              Add guests
            </h3>
          </div>
          <div
            className="
            py-[12px]
            px-[26px]
          ">
            <SearchButton />
          </div>
        </div>

        <div
          className="
          hidden
          sm:block
        ">
          <Counter name="Adults" description="Ages 13 or above" />
          <Counter name="Children" description="Ages 2-12" />
        </div>

        <div className="mt-[35px] flex flex-col gap-[34.53px]">
          <div className="flex items-center px-[5px] pt-[2px] pb-[2.53px]">
            <FaMapMarkerAlt className="mr-[10px]" />{' '}
            <p className="text-[14px] text-[#4F4F4F] hover:underline transition ease-in delay-150 cursor-pointer">
              Helsinki, Finland
            </p>{' '}
          </div>
          <div className="flex items-center px-[5px] pt-[2px] pb-[2.53px]">
            <FaMapMarkerAlt className="mr-[10px]" />{' '}
            <p className="text-[14px] text-[#4F4F4F] hover:underline transition ease-in delay-150 cursor-pointer">
              Turku, Finland
            </p>{' '}
          </div>
          <div className="flex items-center px-[5px] pt-[2px] pb-[2.53px]">
            <FaMapMarkerAlt className="mr-[10px]" />{' '}
            <p className="text-[14px] text-[#4F4F4F] hover:underline transition ease-in delay-150 cursor-pointer">
              Oulu, Finland
            </p>{' '}
          </div>
          <div className="flex items-center px-[5px] pt-[2px] pb-[2.53px]">
            <FaMapMarkerAlt className="mr-[10px]" />{' '}
            <p className="text-[14px] text-[#4F4F4F] hover:underline transition ease-in delay-150 cursor-pointer">
              Vaasa, Finland
            </p>{' '}
          </div>
        </div>

        <div className="mt-[181.53px] sm:hidden">
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
      </div>
    );
  }
}
