import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, FaTwitter, FaFileAlt} from 'react-icons/fa'
import Bitmoji from '../../src/bitmoji.png'

const Home = () => {
  useEffect(() => {
    Aos.init();
}, [])
  return (
    <div className='bg-terminal h-screen flex flex-col justify-center items-center md:items-center px-10'>
      <img src={Bitmoji} alt='' className="h-32 w-32 md:h-48 md:w-48"/>
      <h1 data-aos='fade-down' data-aos-delay='300' className='md:text-left text-center py-20 md: md:text-7xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-poppins'>
        Hello! I'm Mohit Padhye
      </h1>
      <div data-aos='fade-up' data-aos-delay='1000' className='hidden'>
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
      <AiOutlineArrowDown data-aos='fade-up' data-aos-delay='2000' size='3rem' className="text-white absolute bottom-0 animate-bounce"/>
    </div>
  );
};

export default Home;