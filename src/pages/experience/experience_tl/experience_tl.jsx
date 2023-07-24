import { useState, useRef, useEffect } from 'react'

const EXPERIENCES = 
[
  {
    company: 'Arbin Instruments',
    date: 'May 2023 - Aug 2023',
    location: 'College Station, TX',
    role: '💻 Software Engineer Intern',
    description: [
      "Improved UI and functionality of Python application (used by +3000 clients) that generated connection diagrams.",
      "Created an Electron and C# desktop application connected via API calls for the testing department to use."
    ]
  },
  {
    company: 'Texas A&M Health Science Center',
    date: 'Aug 2022 - Present',
    location: 'Houston, TX',
    role: '🔍 Research Assistant',
    description: [
      "Developed a k-Nearest Neighbors island-clustering program using C++ and R to detect methylation patterns of 68 million DNA reads for preliminary research in early breast cancer detection, with publication in work.",
      "Currently using statistical analysis in R to compare diseased and healthy ECG data for use in lab's workflow.",
    ]
  },
  {
    company: 'Institute of Biosciences and Technology',
    date: 'Jun 2022 - Aug 2022',
    location: 'Houston, TX',
    role: '🔍 Research Intern',
    description: [
      "Built a C++ and R package to read methylation data with findings from applying it to patient data presented at Research Day poster presentation, showing my research project to faculty and trainees.",
      "Attended lectures of the graduate course 'Foundations of Clinical and Research Sciences' and thesis dissertations.",
    ]
  },

]

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const container = 
` 
  min-w-[75vw] max-h-[400px] 
  px-8 pt-4 pb-8
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
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="w-[75vw] overflow-hidden">
      <div
        className="flex no-wrap gap-0 duration-500 ease-in-out"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
         {EXPERIENCES.map((exp, index) => (

            <div key={index} className={container}>
              <div className={content}>
                <div className='flex gap-8 items-center justify-between'>
                  <div>
                    <h2 className="text-md font-bold text-amber-700 dark:text-amber-500">{exp.company}</h2>
                    <h3>{exp.role}</h3>
                  </div>
                  
                  <div className='flex flex-col items-end'>
                    <p>{exp.date}</p>
                    <p className='text-sm text-neutral-500 flex items-center gap-1'>
                      {exp.location}
                    </p>
                  </div>
                  
                </div>
                <div className='pl-4'>
                  <ul className='text-sm list-disc'>
                  {exp.description.map((desc) => (
                    <li>{desc}</li>
                  ))}
                  </ul>
                </div>
                
              </div>
            </div>

        ))}
      </div>

      <div className='mt-8'>
        
        <div className='z-[1] flex justify-between px-14'>          
          {EXPERIENCES.map((exp, idx) => (
            <div className='flex flex-col items-center justify-center'>
              <div
                key={idx}
                className={TL_pnt + `${index === idx ? " bg-amber-500 scale-110" : "bg-neutral-50 dark:bg-neutral-800"}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
              <p className='mt-2 text-center text-sm text-amber-800 dark:text-amber-500'>
                {exp.date}
              </p>
            </div>
          ))}
        </div>
        <div className='z-[-1] bg-amber-500 h-1 w-[100vw] absolute left-0 translate-y-[-8.5vh] md:translate-y-[-40px]'></div>
      </div>
      
    </div>
  );
}



// // const timeline = "flex justify-left w-full px-8"
// // const line = "border-l-2 border-amber-700 py-20 flex flex-col gap-4"
// const container = "group hover:shadow-lg hover:translate-x-2 relative ml-8 mr-8 px-8 pt-4 pb-8 bg-white rounded-lg duration-500"
// const content = "flex flex-col gap-2"
// // const title = 
// // `
// //   text-amber-700 font-bold text-lg
// //   before:absolute before:w-[15px] before:h-[15px] before:bg-white before:rounded-xl before:left-[-40px] before:border-4 before:border-amber-500
// //   group-hover:before:bg-yellow-500 group-hover:before:translate-x-[-8px] before:duration-500
// // `

// export default function Experience_TL () {

  
//   return (
//     <div>
//       {/* timeline */}
//       <div>

//       </div>
//       {/* card */}
//       <div>
//         {EXPERIENCES.map((exp) => (
//           <li className="list-none">
              
//               <div className={container}>
//                 <div className={content}>
//                   <div className='flex gap-8 items-center justify-between'>
//                     <div>
//                       <h2 className="text-lg text-amber-700">{exp.company}</h2>
//                       <h3>{exp.role}</h3>
//                     </div>
                    
//                     <div className='flex flex-col items-end'>
//                       <p>{exp.date}</p>
//                       <p className='text-sm text-neutral-500 flex items-center gap-1'>
//                         {exp.location}
//                       </p>
//                     </div>
                    
//                   </div>
//                   <div className='pl-4'>
//                     <ul className='text-sm list-disc'>
//                     {exp.description.map((desc) => (
//                       <li>{desc}</li>
//                     ))}
//                     </ul>
//                   </div>
                  
//                 </div>
//               </div>
                
//           </li>
//         ))}
//       </div>
//     </div>
    
//   )
// }


{/* <div className='experience-body w-full fade-out-mask-bottom'>
      <div className={timeline}>
        <div className={line}>

          {EXPERIENCES.map((exp) => (
          <li className="list-none">
              
              <div className={container}>
                <div className={content}>
                  <div className='flex gap-8 items-center justify-between'>
                    <div>
                      <h2 className={title}>{exp.company}</h2>
                      <h3>{exp.role}</h3>
                    </div>
                    
                    <div className='flex flex-col items-end'>
                      <p>{exp.date}</p>
                      <p className='text-sm text-neutral-500 flex items-center gap-1'>
                        {exp.location}
                      </p>
                    </div>
                    
                  </div>
                  <div className='pl-4'>
                    <ul className='text-sm list-disc'>
                    {exp.description.map((desc) => (
                      <li>{desc}</li>
                    ))}
                    </ul>
                  </div>
                  
                </div>
              </div>
                
          </li>
          ))}
        </div>  
      </div> 
    </div> */}