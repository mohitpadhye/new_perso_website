import React from 'react';
import {FaLinkedinIn, FaGithub, FaTwitter, FaFileAlt} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="bg-terminal py-20 flex flex-col justify-center items-center">
    <p className="text-left md:text-center text-3xl font-bold pb-10 md:p-10 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Check me out here: </p>
    <div className="flex flex-col justify-center items-center mb-5 gap-10">
    <div className='flex gap-7'>
        <a href='https://www.linkedin.com/in/mohitpadhye/' target='_blank' rel='noreferrer'>
            <FaLinkedinIn size='2rem' className='text-white'/>
        </a>
        <a href='https://github.com/mohitpadhye' target='_blank' rel='noreferrer'>
            <FaGithub size='2rem' className='text-white'/>
        </a>
        <a href='https://twitter.com/whosmohitp' target='_blank' rel='noreferrer'>
            <FaTwitter size='2rem' className='text-white'/>
        </a>
        <a href='https://www.linkedin.com/in/mohitpadhye/' target='_blank' rel='noreferrer'>
            <FaFileAlt size='2rem' className='text-white'/>
          </a>
          
      </div>
      <p className="text-white text-center font-SourceCode">Email: mohitmpadhye@gmail.com</p>
    </div>
    
  </div>
  )
}
