const adventures = [
  {
    description: 'Started as a SWE Internship @ Arbin Instruments',
    link: 'https://arbin.com/about-us/',
    date: 'May 2023',
    symbol: '💼',
    important: true,
  },
  {
    description: 'Survived CSCE 313H.',
    link: 'http://irl.cse.tamu.edu/courses/313/',
    date: 'May 2023',
    symbol: '🥹',
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
    description: 'saw my first Rainforest Cafe in San Antonio :O',
    link: 'https://www.rainforestcafe.com/location/rainforest-cafe-san-antonio-tx/',
    date: 'Jan 2023',
    symbol: '🦜',
    important: false,
  },
  {
    description: 'Added a Statistics minor o-o',
    link: 'https://catalog.tamu.edu/undergraduate/arts-and-sciences/statistics/minor/#text',
    date: 'Jan 2023',
    symbol: '📚',
    important: true,
  },
  {
    description: 'Made a virtual sequential processor (I cried)',
    link: 'https://csce312-final-project.readthedocs.io/en/main/index.html',
    date: 'Dec 2023',
    symbol: '🥹',
    important: true,
  },
  {
    description: 'Became Projects Chair @ Aggie Coding Club',
    link: 'https://aggiecodingclub.com/',
    date: 'Dec 2022',
    symbol: '🧑‍💻',
    important: true,
  },
  {
    description: 'Drank overpriced boba @ HowdyHack',
    link: 'https://tamuhack.org/hh/',
    date: 'Oct 2022',
    symbol: '⚡',
    important: true,
  },
  {
    description: 'Became Vice President @ ENGR TA Org',
    link: 'https://tx.ag/engr102dc',
    date: 'Oct 2022',
    symbol: '🧑‍💻',
    important: true,
  },
  {
    description: 'Started as a Hamill Research Intern @ Institute of Bioscience & Technology',
    link: 'https://ibt.tamu.edu/education/biotech-graduate-track/summer-research-program.html',
    date: 'May 2022',
    symbol: '💼',
    important: true,
  },
  {
    description: '1st Overall and Best in Design @ TAGD Game Jam',
    link: 'https://tagdigda.wixsite.com/gamedev/copy-of-fall-2021',
    date: 'May 2022',
    symbol: '🏆',
    important: true,
  },
  {
    description: 'Started breast cancer research using biostatistics w/ Dr. Zhang :D',
    link: 'https://ibt.tamu.edu/faculty/kurt-zhang.html',
    date: 'Apr 2022',
    symbol: '🧬',
    important: true,
  },
  {
    description: 'Ate lots of pasta',
    link: 'https://conway-fitzhugh.tamu.edu/',
    date: 'March 2022',
    symbol: '🇮🇹',
    important: false,
  },
  {
    description: 'Best in Programming @ TAGD Game Jam',
    link: 'https://itch.io/jam/tagd-fall-2021-semester-game-jam',
    date: 'Dec 2021',
    symbol: '🏆',
    important: true,
  },
  {
    description: 'Became Projects Officer @ Aggie Coding Club',
    link: 'https://aggiecodingclub.com/',
    date: 'Nov 2021',
    symbol: '🧑‍💻',
    important: true,
  },
  {
    description: 'Watched epic yo-yo tricks @ TAMU Datathon',
    link: 'https://2021.tamudatathon.com/',
    date: 'Oct 2021',
    symbol: '⚡',
    important: true,

  },
  {
    description: 'Started as an Honors Computer Science student @ Texas A&M!',
    link: 'https://engineering.tamu.edu/cse/academics/index.html',
    date: 'Aug 2021',
    symbol: '📚',
    important: true,

  },
  {
    description: 'Graduated Valedictorian from HS! >:)',
    link: 'https://www.aps.edu/schools/graduation/class-of-2021/la-cueva-high-school',
    date: 'May 2021',
    symbol: '🎓',
    important: true,

  },
]
  
export default function Tab1() {

  const handleClick = (myLink) => () => {
    window.open(myLink, '_blank');
  }

    return (
        <div>
            <p className=" mb-4 text-neutral-500">Some things that I've done!</p>
            <div>
              <ul role="list" className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {adventures.map((adventure) => (
                <li onClick={handleClick(adventure.link)} className="dark:text-white flex justify-between items-center gap-4 p-2 hover:rounded-md hover:cursor-pointer hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
                    
                    <div className="flex items-center flex-grow-0">
                      <div className="text-lg mr-2">{adventure.symbol}</div>
                      <span className="text-sm sm:text-md lg:text-md lg:max-w-[40em] md:max-w-[20em] sm:max-w-[15em]">{adventure.description}</span>
                    </div>
                    <div className="flex-grow h-[1px] min-w-[25px] bg-neutral-200 dark:bg-neutral-700"></div>
                    <div className="text-sm sm:text-md font-bold min-w-[5em]">{adventure.date}</div>
                      
                </li>
                ))}
            </ul>
            </div>
            
        </div>
    )
  }