import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="text-center font-medium text-[14px] text-[#828282] mt-[60px] pb-[10px]">
        created by{' '}
        <a
          alt="creatorLink"
          href="https://github.com/bedena2000"
          target="_blank"
          className="font-bold underline"
          rel='noreferrer'  
        >
          bedena2000
        </a>{' '}
        - devChallenges.io
      </div>
    );
  }
}
