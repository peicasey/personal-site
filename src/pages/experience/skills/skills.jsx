import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from "@mui/material/styles";
import { skill_data } from './skill_items';

const StyledAutocomplete = styled(Autocomplete)({
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
    },
    "&.Mui-focused .MuiInputLabel-outlined": {
      color: "#d97706"
    },
    "& .MuiInputLabel-root": {
        color: "#d97706"
    },
    "& .MuiButtonBase-root ": {
        color: "#d97706"
    },
    "& .MuiAutocomplete-inputRoot": {
      color: "#d97706",
      backgroundColor: "rgba(217, 159, 0, 0.30)",
      // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
      '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
        // Default left padding is 6px
        paddingLeft: 6
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#d97706"
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fef3c7"
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#b45309"
      }
    }
  });
  

const TYPES = [
    { 
        id: 1, 
        name: '😵‍💫 All',
        description: "If I've breathed near it, then that's enough to be listed here."
    },
    { 
        id: 2, 
        name: '🌟 Main Picks',
        description: "My most used / favorite stuff!"
    },
    { 
        id: 3, name: '💬 Languages',
        description: "Not including Scheme or Assembly here out of pure spite."
    },
    { 
        id: 4, 
        name: '📚 Libraries/Frameworks/Engines',
        description: "Code by other people that I find very helpful yes."
    },
    { 
        id: 5, 
        name: '💾 Databases',
        description: "Unfortunately google sheets does not count."
    },
    { 
        id: 6, 
        name: '🛠️ Developer Tools',
        description: "Tools for my toolbox."
    },
    { 
        id: 7, 
        name: '🌐 Hosting/Containers',
        description: "DevOps is crazy."
},
    { 
        id: 8, 
        name: '📆 Project Management', 
        description: "Soft skill central :]"
},
]

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

const Skills = () => {
  const [selectedDisplay, setselectedDisplay] = useState(TYPES[1]);
  const [SKILL_ITEMS, setSKILL_ITEMS] = useState([]);

  useEffect(() => {
    skill_data().then((res) => setSKILL_ITEMS(res));
  }, []);

  console.log(selectedDisplay);

  return (
    <div className='px-8 sm:px-28 pb-8'>
        <div className='flex flex-col md:flex-row gap-12'>
            <div className='w-full md:w-3/6'>
                <h2 className='text-2xl font-bold mb-4 text-amber-700 dark:text-amber-500'>Skills</h2>
                <p className='mb-4 dark:text-white'>Pick what you want to see :D</p>
                <StyledAutocomplete
                    id="types"
                    options={TYPES}
                    renderInput={params => (
                        <TextField {...params} label="Types" variant="outlined" />
                    )}
                    getOptionLabel={option => option.name}
                    disableClearable={true}
                    style={{ width: "100%" }}
                    value={selectedDisplay}
                    onChange={(_event, newDisplay) => {
                        setselectedDisplay(newDisplay);
                    }}
                />
                <p className='mt-4 text-amber-700 dark:text-neutral-500'>
                    If there's something that you think I should learn, let me know -- I'm always down
                    to learn new things!
                </p>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center bg-amber-200 dark:bg-neutral-900 p-4 pb-6 rounded-lg duration-500'>
                <div className='flex w-full gap-2 pb-2 border-b-[1px] border-amber-400 dark:border-neutral-700 mb-6'>
                    <p className='text-amber-600 dark:text-amber-800 font-bold'>Selected: </p>
                    <div className={tag}>{selectedDisplay.name}</div>
                </div>
                <div className='flex flex-wrap gap-y-2 gap-x-4'>
                    {SKILL_ITEMS.map((skill) => (
                        <div class={skill.display.includes(selectedDisplay.id) ? "visible group" : "hidden"}>
                            <div className='text-3xl duration-200 group-hover:translate-y-[-2px] cursor-help hover:text-amber-950 text-amber-900 dark:hover:text-amber-400 dark:text-amber-500'>
                                {skill.icon}
                            </div>
                            <div className={popup}>
                                <p className='dark:text-white font-bold'>{skill.name}</p>
                                
                                <div className='flex gap-2'>
                                    <div className={exp_tag + skill.exp_color}>
                                        {skill.experience}
                                    </div>
                                    <div className={exp_tag + skill.use_color}>
                                        {skill.use}
                                    </div>
                                </div>
                                
                                <p className='dark:text-white mt-2 text-sm'>{skill.description}</p>
                                <div className='dark:text-white flex flex-col gap-1'>
                                    {skill.projects.map((project) => (
                                        <div>
                                            <p>{project}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 
                <div className='flex w-full border-t-[1px] mt-4 border-amber-400 dark:border-neutral-700'>
                    <p className='text-amber-600 dark:text-amber-800 mt-2 italic'>
                        {selectedDisplay.description}
                    </p>
                </div> 
            </div>
        </div>
        
    </div>
    
  );
};

export default Skills;



