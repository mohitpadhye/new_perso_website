import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import BitmojiHello from '../../src/bitmojiHello.png'
import Desktop from '../../src/desktop.png'

const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='bg-terminal flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col justify-center items-center md:flex-row md:mx-48 mt-10 rounded-lg md:max-w-4xl'>
                <div className='flex flex-col justify-center items-start'>
                    <h1 data-aos='fade' className='text-center md:text-left text-3xl font-bold px-10 pt-10 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500'>About Me</h1>
                    <p data-aos='fade' className='text-left md:text-left text-s md:text-lg font-normal text-white p-10 font-SourceCode'>
                    Hello! Thanks for stopping by. I'm currently a senior mechanical engineering major and computer science minor at Texas A&M University. I'm passionate about software engineering, machine learning, and full stack development.
                    Currently working on building side projects, researching at university, and learning daily from colleagues, friends, and the internet.
                    </p>
                </div>
                <img src={BitmojiHello} alt='' className="hidden md:block md:h-52 md:w-52"/>
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row md:mx-48 mb-10 rounded-lg md:max-w-4xl'>
                <div className='flex flex-col justify-center items-start md:items-end order-2'>
                    <h1 data-aos='fade' className='text-left text-3xl font-bold px-10 py-10 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500'>Experience</h1>
                    <p data-aos='fade' className='text-left md:text-right text-s md:text-lg font-normal text-white px-10 font-SourceCode'>
                        - Summer 2021: SWE Intern at Tech For Good Inc
                    </p>
                    <p data-aos='fade' className='text-left md:text-right text-s md:text-lg font-normal text-white px-10 font-SourceCode'>
                        - Summer 2019: Mechanical Engineering Intern at AECOM
                    </p>
                </div>
                <img src={Desktop} alt='' className="hidden md:block order-1 md:h-52 md:w-52"/>
            </div>
        </div>
    )
}

export default About
