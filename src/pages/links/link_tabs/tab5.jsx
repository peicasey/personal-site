import './tab.css'

const inspos = [
  {
    title: 'Godly.Website',
    description: "the most derangedly good websites the heck",
    link: 'https://godly.website/',
    link_display: 'godly.website',
    symbol: '😇',
  },
  {
    title: "Quinn Ha Personal Site",
    description: "using the description style",
    link: 'https://www.quinnha.xyz/',
    link_display: 'quinnha.xyz',
    symbol: '🏔️',
  },
  {
    title: "Anthony Teo Personal Site",
    description: "basically the entire structure o__o''",
    link: 'https://anthonyteo.com/',
    link_display: 'anthonyteo.com',
    symbol: '🔷',
  },
  {
    title: "Tamara Personal Site",
    description: "accessibility + carbon",
    link: 'https://www.iamtamara.design/',
    link_display: 'iamtamara.com',
    symbol: '🟢',
  },
  {
    title: "Casey Personal Site",
    description: "my old personal site",
    link: 'https://people.tamu.edu/~caseypei/#',
    link_display: 'people.tamu.edu/~caseypei',
    symbol: '😢',
  },
]


export default function Tab5() {

    return (
      <div>
        <p className=" mb-4 text-neutral-500 dark:text-neutral-200">The inspiration behind this site specifically :)</p>
         <div>
          <ul inspo="list" className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {inspos.map((inspo) => (
            <li className="dark:text-white flex justify-between items-center gap-2 sm:gap-4 p-2 hover:rounded-md hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
                  
                <div className="overflow-hidden text-ellipsis flex items-center flex-grow-0">
                  <div className="aria-hidden select-none sm:text-lg mr-2">{inspo.symbol}</div>
                  <div className="flex items-center gap-2 justify-normal">
                    <span className="truncate text-xs sm:text-md lg:text-md font-bold">{inspo.title}</span>
                    <a href={inspo.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden text-ellipsis text-sm sm:text-md lg:text-md underlined text-lime-700 dark:text-lime-200 hover:text-lime-500 dark:hover:text-lime-500">{inspo.link_display}</a>
                  </div>
                </div>
                <div className="flex-grow h-[1px] min-w-[0px] bg-neutral-200 dark:bg-neutral-700"></div>
                <div className="text-sm text-neutral-500 dark:text-neutral-200 hidden lg:block">{inspo.description}</div>
                    
            </li>
            ))}
          </ul>
        </div>
          
      </div>
    )
  }