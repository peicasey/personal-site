import React, { useState, useEffect } from 'react';
import { BsFillPersonFill } from "react-icons/bs"; 
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { styled } from "@mui/material/styles";

import { project_data } from './project_data';
// import Project_Selector from './project_selector';

const popup =
`
    absolute 
    bg-white dark:bg-neutral-800 
    max-w-[250px] p-4 rounded-lg
    opacity-0 scale-0 translate-y-[-20px] translate-x-[-20px]
    shadow-lg
    group-hover:opacity-100 
    group-hover:scale-100 
    group-hover:translate-x-2 group-hover:translate-y-2
    duration-300
`

const tag =
`
    flex items-center 
    text-white text-sm 
    bg-amber-500 dark:bg-amber-700 
    pl-2 pr-4 rounded-lg
`

const exp_tag =
`
    flex items-center 
    text-white text-sm 
    px-2 rounded-lg
    translate-x-[-2px] 
`

const blankProject =
{
  name: "Click on a Project",
  idx: -1,
  icon: '🐊🍊',
  color: '#365314',
  timeline: "N/A",
  roles: ['Clicker of Projects'],
  tools: 
  [
      'N/A'
  ],
  categories: 
  [
      'Tags here'
  ],
  description: 
  `
   Click on project to see more >:O
  `,
  links: 
  [
    { link: '', icon: <a className='text-xs font-bold'>N/A</a> },   
  ]
  ,
}


const Project_Cards = () => {
  // const [selectedDisplay, setselectedDisplay] = useState(TYPES[1]);
  const [PROJECT_DATA, setPROJECT_DATA] = useState([]);
  const [selectedProject, setSelectedProject] = useState(blankProject);

  function initialSetProjects (res) {
    setPROJECT_DATA(res);
    setSelectedProject(res[0]);
  }

  useEffect(() => {
    project_data().then((res) => initialSetProjects(res));
  }, []);

  // console.log(selectedDisplay);

  return (
    <div className='flex flex-col sm:flex-row gap-16'>
      {/* <Project_Selector /> */}
      
      <div className='w-full sm:w-[50vw] sm:h-[10vh]'>
        <p className='mb-2'>Selected Project:</p>
        {
          selectedProject == null ?
            <div>
            </div>
          : 
          <div className="group flex flex-col border-[1px] border-amber-800 rounded-lg shadow-lg"
          >
          
            <div 
              className='flex justify-center items-center 
                         h-[15vh] w-full rounded-t-lg
                          text-4xl
                        ' 
              style={{ backgroundColor: selectedProject.color }}
            >
              {selectedProject.icon}
              
            </div>
            <div className="flex flex-col justify-between bg-white dark:bg-[#211e1d] p-4 rounded-b-lg flex-grow shadow-lg">
              <div>
                <p className="font-bold text-lg">{selectedProject.name}</p>
                <div className='text-xs mb-2 gap-1 flex items-center text-amber-800 dark:text-amber-500'>
                  <BsFillPersonFill/>
                  <p>|</p>
                  {selectedProject.roles.map((role) => (
                    <p className='truncate'>{role} | </p>
                  ))}
                </div>
                <p className='text-sm text-neutral-700 dark:text-neutral-400'>
                  {selectedProject.description}
                </p>
                <div className='flex flex-wrap gap-2 mt-4'>
                  {selectedProject.categories.map((category) => (
                    <div className="flex justify-center px-2 
                              rounded-lg text-xs
                              bg-amber-100 border-amber-500 dark:border-amber-800 border-[1px] dark:bg-neutral-950 text-amber-800 dark:text-amber-500">
                      <div>{category}</div>
                    </div>
                  ))}
                </div>
                <div className='flex flex-wrap gap-2 my-4'>
                  {selectedProject.tools.map((tool) => (
                    <div className="flex justify-center px-2 
                              rounded-lg text-xs
                              bg-amber-400 border-amber-900 
                              dark:border-amber-500 border-[1px] dark:bg-amber-900
                              text-amber-950 dark:text-amber-200"
                      >
                      <div>{tool}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-wrap gap-2 mt-4'>
                {selectedProject.links.map((link) => (
                  <a 
                    className='text-amber-700 hover:text-amber-800 
                    dark:hover:text-amber-200 
                    hover:scale-110 hover:cursor-pointer duration-100'
                    target='_blank' href={link.link}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        }

      </div>


      <div className='flex-grow w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4'>
        {PROJECT_DATA.map((project) => (
          <div className="group 
            flex flex-col border-[1px] border-amber-800 rounded-lg 
            hover-shadow hover:cursor-pointer hover:scale-[101%] duration-200"
            onClick={e => setSelectedProject(PROJECT_DATA[project.idx])}
            style={{ backgroundColor: project.color }}
          >
          
            <div 
              className='flex justify-center items-center 
                         h-[10vh] w-full rounded-t-lg
                         text-2xl md:text-4xl
                        ' 
              style={{ backgroundColor: project.color }}
            >
              {project.icon}
              
            
            </div>
            <div className="flex flex-col justify-between 
              bg-amber-50 dark:bg-neutral-900
              p-4 rounded-b-lg flex-grow shadow-lg"
            >
              <div>
                <p className="font-bold">{project.name}</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {project.categories.map((category) => (
                    <div className="flex justify-center px-2 
                              rounded-lg text-xs
                              bg-amber-100 border-amber-500 dark:border-amber-800 border-[1px] dark:bg-neutral-950 text-amber-800 dark:text-amber-500">
                      <div>{category}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-wrap gap-2 mt-4'>
                {project.links.map((link) => (
                  <a 
                    className='text-amber-700 hover:text-amber-800 
                    dark:hover:text-amber-200 
                    hover:scale-110 hover:cursor-pointer duration-100'
                    target='_blank' href={link.link}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    
  );
};

export default Project_Cards;



