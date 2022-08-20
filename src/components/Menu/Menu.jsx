import React, { Component } from 'react';
// Icons
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

// Components
import Counter from '../Counter/Counter';
import MyContext from '../../context/context';

// Motion Framer
import { motion } from 'framer-motion';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenProperties: 'location',
      chosenCity: 'Helsinki',
      adults: 0,
      children: 0,
    };
    this.changeGuestsAmount = this.changeGuestsAmount.bind(this);
  }

  changeGuestsAmount(amount, whosAmount) {
    this.setState({
      [whosAmount]: amount,
    });
  }

  render() {
    return (
      <motion.div
        initial={{
          translateX: -100,
        }}
        animate={{
          translateX: 0,
        }}
       
        className="
        bg-white
        w-full
        absolute
        z-[21]
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
            <AiOutlineClose onClick={this.context.changeMenu} />
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
            cursor-pointer
          "
            onClick={() => {
              this.setState({
                chosenProperties: 'location',
              });
            }}>
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
              {this.state.chosenCity}, Finland
            </h3>
          </div>

          <div
            className="
            py-[12px]
            px-[26px]
            sm:flex
            sm:flex-col
            sm:justify-center
            cursor-pointer

          "
            onClick={() => {
              this.setState({
                chosenProperties: 'guests',
              });
            }}>
            <p
              className="
                text-[#333333]
                text-[9px]
                mb-[4px]
                font-extrabold
            ">
              Guest
            </p>
            <input
              className="
                text-[14px]
                font-normal
              text-[#333333]
                outline-none
                border-none
                border-w-[0px]
            "
              readOnly
              placeholder="Add guests"
              value={
                this.state.adults !== 0 || this.state.children !== 0
                  ? `Adults: ${this.state.adults}, Children: ${this.state.children}`
                  : ''
              }
            />
          </div>
          <div
            className="
            sm:py-[12px]
            sm:px-[26px]
          ">
            <button
              onClick={() => {
                this.context.changeLocation(this.state.chosenCity);
                this.context.changeGuest(this.state.adults + this.state.children);
              }}
              className="sm:flex hidden items-center shadow-lg bg-[#EB5757] pt-[15px] pb-[15.94px] pl-[27px] pr-[24px] rounded-[16px] mx-auto">
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

        {this.state.chosenProperties === 'guests' ? (
          <div
            className="
          
        ">
            <Counter
              changeGuestsAmount={this.changeGuestsAmount}
              whosIsThis="adults"
              name="Adults"
              description="Ages 13 or above"
            />
            <Counter
              changeGuestsAmount={this.changeGuestsAmount}
              whosIsThis="children"
              name="Children"
              description="Ages 2-12"
            />
          </div>
        ) : (
          <div className="mt-[35px] flex flex-col gap-[34.53px]">
            <div
              onClick={() =>
                this.setState({
                  chosenCity: 'Helsinki',
                })
              }
              className="flex items-center px-[5px] pt-[2px] pb-[2.53px]">
              <FaMapMarkerAlt className="mr-[10px]" />{' '}
              <p className="text-[14px] text-[#4F4F4F] hover:underline transition ease-in delay-150 cursor-pointer">
                Helsinki, Finland
              </p>{' '}
            </div>
            <div
              onClick={() =>
                this.setState({
                  chosenCity: 'Turku',
                })
              }
              className="flex items-center px-[5px] pt-[2px] pb-[2.53px]">
              <FaMapMarkerAlt className="mr-[10px]" />{' '}
              <p className="text-[14px] text-[#4F4F4F] hover:underline transition ease-in delay-150 cursor-pointer">
                Turku, Finland
              </p>{' '}
            </div>
            <div
              onClick={() =>
                this.setState({
                  chosenCity: 'Oulu',
                })
              }
              className="flex items-center px-[5px] pt-[2px] pb-[2.53px]">
              <FaMapMarkerAlt className="mr-[10px]" />{' '}
              <p className="text-[14px] text-[#4F4F4F] hover:underline transition ease-in delay-150 cursor-pointer">
                Oulu, Finland
              </p>{' '}
            </div>
            <div
              onClick={() =>
                this.setState({
                  chosenCity: 'Vaasa',
                })
              }
              className="flex items-center px-[5px] pt-[2px] pb-[2.53px]">
              <FaMapMarkerAlt className="mr-[10px]" />{' '}
              <p className="text-[14px] text-[#4F4F4F] hover:underline transition ease-in delay-150 cursor-pointer">
                Vaasa, Finland
              </p>{' '}
            </div>
          </div>
        )}

        <div className="mt-[181.53px] sm:hidden">
          <button
            onClick={() => {
              this.context.changeLocation(this.state.chosenCity);
              this.context.changeGuest(this.state.adults + this.state.children);
            }}
            className="flex items-center shadow-lg bg-[#EB5757] pt-[15px] pb-[15.94px] pl-[27px] pr-[24px] rounded-[16px] mx-auto">
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
      </motion.div>
    );
  }
}

Menu.contextType = MyContext;
