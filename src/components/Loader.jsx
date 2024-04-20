import React from 'react';
import logo from "../assets/Images/Logo.png";


const Loader = () => {
  return (
    <div className='flex bg-black h-screen justify-center items-center'>
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-28 h-28 mb-4 sm:w-52 sm:h-36" />
        <p className='text-white'>Please Wait...</p>
      </div>
    </div>
  );
}

export default Loader;
