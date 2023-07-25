import React, { useState, useEffect } from 'react';
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

const Project_Cards = () => {
  // const [selectedDisplay, setselectedDisplay] = useState(TYPES[1]);
  const [PROJECT_DATA, setPROJECT_DATA] = useState([]);
  const [selectedProject, setSelectedProject] = useState(0);

  useEffect(() => {
    project_data().then((res) => setPROJECT_DATA(res));
  }, []);

  // console.log(selectedDisplay);

  return (
    <div >
      {/* <Project_Selector /> */}
      
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 items-stretch'>
        {PROJECT_DATA.map((project) => (
          <div className="group flex flex-col hover-shadow hover:cursor-pointer hover:scale-[101%] duration-200">
            <div 
              className='flex justify-center items-center 
                         h-[10vh] w-full rounded-t-lg 
                          text-4xl
                        ' 
              style={{ backgroundColor: project.color }}
            >
              {project.icon}
            </div>
            <div className="bg-neutral-50 dark:bg-[#211e1d] p-4 rounded-b-md flex-grow">
              <p className="font-bold">{project.name}</p>
              <div className='flex flex-wrap gap-2 mt-2'>
                {project.categories.map((category) => (
                  <div className="flex justify-center px-2 
                            rounded-lg text-xs
                            bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200">
                    <div>{category}</div>
                  </div>
                ))}
              </div>
              <div className='flex flex-wrap gap-2 mt-8 '>
                {project.links.map((link) => (
                  <a 
                    className='text-neutral-500 hover:text-black 
                    dark:hover:text-white 
                    hover:scale-110 duration-100'
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



