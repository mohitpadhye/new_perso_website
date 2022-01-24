import { FaReact } from 'react-icons/fa'
import {SiTailwindcss, SiRedux, SiStyledComponents, SiHtml5, SiCss3, SiFirebase} from 'react-icons/si'

export const projects = [
    {
      title: 'This Website',
      description: "One of my first projects. Always making small changes",
      tags: [<FaReact size='2rem'/>, <SiTailwindcss size='2rem'/>],
      source: 'https://github.com/mohitpadhye',
      id: 0,
    },
    {
      title: 'Gamescovery',
      description: "A simple web application that fetches data from rawg.io api enpoints and takes user input to search for games",
      tags: [<FaReact size='2rem'/>, <SiRedux size='2rem'/>, <SiStyledComponents size='2rem'/>],
      source: 'https://github.com/mohitpadhye',
      id: 1,
  },
  {
    title: 'Sound House',
    description: "A social media style application, but for music. Check out the demo of v1.0 below!",
    tags: [<FaReact size='2rem'/>, <SiHtml5 size='2rem'/>, <SiCss3 size='2rem'/>, <SiFirebase size='2rem'/>],
    source: 'https://github.com/mohitpadhye',
    visit: 'https://soundhousev1.herokuapp.com/',
    id: 2,
  },
  ];