import './adventures_brief.css'

const adventures = [
  {
    description: 'Started as a SWE Intern @ Arbin Instruments',
    link: 'https://arbin.com/about-us/',
    date: 'May 2023',
    symbol: '💼',
    important: true,
  },
  {
    description: 'Best in Sound @ TAGD Game Jam',
    link: 'https://itch.io/jam/tagd-fall-2021-semester-game-jam',
    date: 'May 2023',
    symbol: '🏆',
    important: true,
  },
  {
    description: 'Best in Visuals @ Chillenium Game Jam',
    link: 'https://chillennium.com/chillenium2023.html',
    date: 'Feb 2023',
    symbol: '🏆',
    important: true,
  },
  {
    description: 'Ruined my sleep schedule @ TAMUHack',
    link: 'https://tagdigda.wixsite.com/gamedev/copy-of-fall-2021',
    date: 'Jan 2023',
    symbol: '⚡',
    important: true,
  },
  {
    description: 'Became Vice President @ Aggie Coding Club',
    link: 'https://aggiecodingclub.com/',
    date: 'Dec 2022',
    symbol: '🧑‍💻',
    important: true,
  },
]
  
export default function Adventures_Brief() {

  const handleClick = (myLink) => () => {
    window.open(myLink, '_blank');
  }

  return (
    <div className="fade-out-mask bg-neutral-50 dark:bg-neutral-800 dark:text-white rounded-lg sm:p-8 p-4 pb-16">
        <div>
          <ul role="list" className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {adventures.map((adventure) => (
            <li onClick={handleClick(adventure.link)} className="flex justify-between items-center gap-4 p-2 hover:rounded-md hover:cursor-pointer hover:bg-amber-100 dark:hover:bg-[#644527]">
                
                <div className="flex items-center flex-grow-0">
                  <div className="aria-hidden select-none text-lg mr-2">{adventure.symbol}</div>
                  <span className="text-sm sm:text-md lg:text-md lg:max-w-[40em] md:max-w-[20em] sm:max-w-[15em]">{adventure.description}</span>
                </div>
                <div className="flex-grow h-[1px] min-w-[4px] sm:min-w-[25px] bg-neutral-400 dark:bg-neutral-700"></div>
                <div className="text-xs sm:text-md font-bold min-w-[5em] ">{adventure.date}</div>
                  
            </li>
            ))}
        </ul>
        </div>
    </div>
        
    )
  }