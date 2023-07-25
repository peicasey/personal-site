import './tab.css'

const roles = [
  {
    title: 'Arbin Instruments',
    description: 'SWE intern here',
    link: 'https://arbin.com/about-us/',
    link_display: 'arbin.com',
    symbol: '💼',
  },
  {
    title: 'Aggie Coding Club (ACC)',
    description: 'VP here',
    link: 'https://aggiecodingclub.com/',
    link_display: 'aggiecodingclub.com',
    symbol: '💻',
  },
  {
    title: 'ENGR TA Org (TAO)',
    description: 'VP here also',
    link: 'https://tx.ag/engr102dc',
    link_display: 'tx.ag/engr102dc',
    symbol: '🧑‍🏫',
  },
  {
    title: 'Biostats Research',
    description: "link to my PI's page :]",
    link: 'https://ibt.tamu.edu/faculty/kurt-zhang.html',
    link_display: 'ibt.tamu.edu/facult/kurt-zhang',
    symbol: '🧬',
  },
  {
    title: 'AI4ALL',
    description: "changemaker",
    link: 'https://ai-4-all.org/',
    link_display: 'ai-4-all.org',
    symbol: '🤖',
  },
  {
    title: 'Aggie Competitive Coding Club (ACPC)',
    description: 'competitor',
    link: 'https://tamuacpc.com/home',
    link_display: 'tamuacpc.com',
    symbol: '🧑‍💻',
  },
  {
    title: 'Texas A&M Game Developer (TAGD)',
    description: "game jammer",
    link: 'https://tagdigda.wixsite.com/gamedev',
    link_display: 'tagdigda.wixsite.com/gamedev',
    symbol: '🎮',
  },
  {
    title: 'Itch.io',
    description: 'my games',
    link: 'https://pengso0o.itch.io/',
    link_display: 'pengso0o/itch.io',
    symbol: '👾',
  },
  {
    title: 'Devpost',
    description: 'my other projects',
    link: 'https://devpost.com/peicasey',
    link_display: 'devpost/peicasey',
    symbol: '💡',
  },
  {
    title: 'Github',
    description: 'git-ing good',
    link: 'https://github.com/peicasey',
    link_display: 'github/peicasey',
    symbol: '🐙',
  },
  {
    title: 'LinkedIn',
    description: 'job hunting grounds >:)',
    link: 'https://www.linkedin.com/in/casey-pei/',
    link_display: 'linkedin/in/casey-pei',
    symbol: '👔',
  },
]


export default function Tab1() {

    return (
      <div>
        <p className=" mb-4 text-neutral-500 dark:text-neutral-200">Some things that I've done!</p>
         <div>
          <ul role="list" className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {roles.map((role) => (
            <li className="dark:text-white flex justify-between items-center gap-2 sm:gap-4 p-2 hover:rounded-md hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
                  
                <div className="overflow-hidden text-ellipsis flex items-center flex-grow-0">
                  <div className="aria-hidden select-none sm:text-lg mr-2">{role.symbol}</div>
                  <div className="flex items-center gap-2 justify-normal">
                    <span className="truncate text-xs sm:text-md lg:text-md font-bold">{role.title}</span>
                    <a href={role.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden text-ellipsis text-sm sm:text-md lg:text-md underlined text-lime-700 dark:text-lime-200 hover:text-lime-500 dark:hover:text-lime-500">{role.link_display}</a>
                  </div>
                </div>
                <div className="flex-grow h-[1px] min-w-[0px] bg-neutral-200 dark:bg-neutral-700"></div>
                <div className="text-sm text-neutral-500 dark:text-neutral-200 hidden lg:block">{role.description}</div>
                    
            </li>
            ))}
          </ul>
        </div>
          
      </div>
    )
  }