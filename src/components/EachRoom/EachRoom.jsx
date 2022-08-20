import React, { Component } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default class EachRoom extends Component {
  render() {
    return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true
        }}
        className="
          sm:w-[395px]
      ">
        {/* image */}
        <div
          className="
            mb-[13.29px]
            w-full
            h-[238.35px]
            rounded-[20px]
            overflow-hidden
         ">
          <img
            src={this.props.image}
            className="
                    w-full
                    h-full
                    object-cover
                "
            alt="roomImage"
          />
        </div>
        {/* image */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {this.props.superHost && (
              <div
                className="
                        border-[#4F4F4F]
                        border-[1px]
                        mr-[9.75px]
                        px-[8.86px]
                        py-[6.2px]
                        rounded-[20px]
                        text-[10px]
                    ">
                SUPER HOST
              </div>
            )}
            <p
              className="
            text-[14px]
            font-medium
          ">
              {this.props.type} {this.props.beds && '.' + this.props.beds}
            </p>
          </div>

          <div className="flex items-center">
            <AiFillStar
              className="
                mr-[7.12px]
            "
            />
            <p
              className="
                text-[#4F4F4F]
                text-[14px]
                font-medium
            ">
              {this.props.rating}
            </p>
          </div>
        </div>
        <h2
          className="
            font-semibold
            text-[16px]
            text-[#333333]
            mt-[12px]
        ">
          {this.props.title}
        </h2>
      </motion.div>
    );
  }
}
