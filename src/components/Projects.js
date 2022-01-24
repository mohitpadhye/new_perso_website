import React, {useEffect} from 'react'
import { projects } from '../constants'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='bg-terminal flex flex-col justify-center'>
                <h1 className='text-left md:text-center text-3xl font-bold px-10 pt-10 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500'>Projects</h1>
                <div className='flex flex-no-wrap md:grid grid-cols-3 overflow-x-scroll scrollbar-hide scrolling-touch pl-5 md:pl-0 md:mx-20 md:mt-10'>
                    {projects.map((p, i) => {
                        return (
                            <div data-aos='flip-down' className='flex flex-col justify-center items-center bg-gray-800 rounded-xl shadow-3xl text-center m-5 p-5' key={i}>
                                <h3 className='text-white font-poppins pb-3 pt-4 text-xl font-black text-center'>{p.title}</h3>
                                <div className='text-white font-SourceCode font-thin text-center px-10 pb-5 text-sm'>
                                    {p.description}
                                </div>
                                <h4 className='font-SourceCode font-light text-white'>tech stack:</h4>
                                <ul className='flex space-x-7 justify-center font-mono pt-2 pb-10'>
                                    {p.tags.map((t, i) => {
                                        return <li className='text-white' key={i}>{t}</li>
                                    })}
                                </ul>
                                <ul className='flex space-x-7 justify-center items-center font-mono pt-2'>
                                    <a className='text-white' href={p.source}><FaGithub size='2rem'/></a>
                                    {p.visit ? <a className='text-white px-5 py-1 font-SourceCode cursor-pointer bg-transparent rounded-xl hover:border-red-50 border border-blue-300' href={p.visit} target='_blank' rel='noreferrer'>App</a> : <button className='hidden'>Nothing</button>}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            
        </div>
    )
}

export default Projects
