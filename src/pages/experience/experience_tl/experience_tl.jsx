import { useState, useRef, useEffect } from 'react'

const EXPERIENCES = 
[
  {
    company: 'Arbin Instruments',
    date: 'May 2023 - Aug 2023',
    location: 'College Station, TX',
    role: '💻 Software Engineer Intern',
    description: [
      "Refactored diagram design software in Python, reducing time spent manually designing by 98% for 3k+ clients", 
      "Designed enterprise-grade Electron employee monitoring application with REST API endpoints, embedded ASP.NET core and Access Database, decreasing time spent manually tracking employee tasks by 70%",
      "Effected modern redesign of proprietary MITS X software from WinForms to Electron with TypeScript and React"
    ]
  },
  {
    company: 'Texas A&M Health Science Center',
    date: 'Aug 2022 - Present',
    location: 'Houston, TX',
    role: '🔍 Research Assistant',
    description: [
      "Developed parallelized kNN island-clustering program with C++ and R used on 68M+ DNA reads processed on a Linux high-performance computing cluster, for use in an in-progress publication on early breast cancer detection",
      "Created R script to identify unique cycle features in diseased ECG reads, lowering time on manual analysis by 80%",
    ]
  },
  {
    company: 'Institute of Biosciences and Technology',
    date: 'Jun 2022 - Aug 2022',
    location: 'Houston, TX',
    role: '🔍 Research Intern',
    description: [
      "Built a C++ and R package to read methylation data with findings from applying it to patient data presented at Research Day poster presentation, presenting research to faculty and PhD candidates.",
      "Attended graduate-level course 'Foundations of Clinical and Research Sciences' and thesis dissertations.",
    ]
  },

]

const delay = 2500;

const container = 
` 
  min-w-[90vw] sm:min-w-[75vw] h-[375px] sm:h-[300px] md:h-[250px] lg:h-[210px]
  px-8 pt-8 pb-12
  bg-white dark:bg-neutral-800
`
const content = "w-full flex flex-col"

const TL_pnt = 
`
  w-6 h-6 rounded-[50%]
  border-4 border-amber-500
  cursor-pointer
  hover:bg-amber-300 dark:hover:bg-amber-900
  duration-500
`

export default function Experience_TL() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === EXPERIENCES.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='w-full flex flex-col justify-center'>
      <div className='w-full flex justify-center'>
        <div className="w-[90vw] sm:w-[75vw] rounded-lg overflow-hidden">
          <div
            className="flex no-wrap gap-0 duration-500 ease-in-out"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {EXPERIENCES.map((exp, index) => (

                <div key={index} className={container}
                  style={{
                    '-webkit-mask-image': 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    'mask-image': 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  }}
                >
                  <div className={content}>
                    <div className='flex gap-8 items-center justify-between dark:text-white'>
                      <div>
                        <h2 className="text-md font-bold text-amber-700 dark:text-amber-500">{exp.company}</h2>
                        <h3>{exp.role}</h3>
                      </div>
                      
                      <div className='flex flex-col items-end'>
                        <p className='text-xs sm:text-sm'>{exp.date}</p>
                        <p className='text-xs sm:text-sm text-neutral-500 flex items-center gap-1'>
                          {exp.location}
                        </p>
                      </div>
                      
                    </div>
                    <div className='mt-2 pl-4'>
                      <ul className='text-sm list-disc dark:text-neutral-400'>
                      {exp.description.map((desc) => (
                        <li>{desc}</li>
                      ))}
                      </ul>
                    </div>
                    
                  </div>
                </div>

            ))}
          </div>
        </div>
        
      </div>
      <div className='mt-8'>
        <div className='flex items-stretch justify-between w-[100vw]'>   
          <div className='flex-grow h-6 flex items-center'>
            <div className='bg-amber-500 h-1 w-full'></div>
          </div>
          <div className='flex items-center'>     
            {EXPERIENCES.map((exp, idx) => (
              <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center w-full '>
                  <div className=' bg-amber-500 h-1 flex-grow'></div>
                  <div
                    key={idx}
                    className={TL_pnt + `${index === idx ? " bg-amber-500 scale-110" : "bg-neutral-50 dark:bg-neutral-800"}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                  <div className=' bg-amber-500 h-1 flex-grow'></div>
                </div>
                <p className='mt-2 px-2 sm:px-4 text-center text-xs md:text-sm text-amber-800 dark:text-amber-500'>
                  {exp.date}
                </p>
              </div>
            ))}
          </div>
          <div className='flex-grow h-6 flex items-center'>
            <div className='bg-amber-500 h-1 w-full'></div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
}

