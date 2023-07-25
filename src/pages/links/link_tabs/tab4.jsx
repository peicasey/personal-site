import './tab.css'

const funs = [
  {
    title: 'Free Rice',
    description: 'play games to donate rice :D',
    link: 'https://play.freerice.com/categories/english-vocabulary',
    link_display: 'play.freerice.com',
    symbol: '🍚',
  },
  {
    title: 'Neal.Fun',
    description: 'cool mini projects!',
    link: 'https://neal.fun/',
    link_display: 'neal.fun',
    symbol: '✨',
  },
  {
    title: 'Am I dead?',
    description: 'answers.',
    link: 'https://amided.com/',
    link_display: 'amided.com',
    symbol: '💀',
  },
]


export default function Tab4() {

    return (
      <div>
        <p className=" mb-4 text-neutral-500 dark:text-neutral-200">Websites that amuse me.</p>
         <div>
          <ul fun="list" className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {funs.map((fun) => (
            <li className="dark:text-white flex justify-between items-center gap-2 sm:gap-4 p-2 hover:rounded-md hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
                  
                <div className="overflow-hidden text-ellipsis flex items-center flex-grow-0">
                  <div className="aria-hidden select-none sm:text-lg mr-2">{fun.symbol}</div>
                  <div className="flex items-center gap-2 justify-normal">
                    <span className="truncate text-xs sm:text-md lg:text-md font-bold">{fun.title}</span>
                    <a href={fun.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden text-ellipsis text-sm sm:text-md lg:text-md underlined text-lime-700 dark:text-lime-200 hover:text-lime-500 dark:hover:text-lime-500">{fun.link_display}</a>
                  </div>
                </div>
                <div className="flex-grow h-[1px] min-w-[0px] bg-neutral-200 dark:bg-neutral-700"></div>
                <div className="text-sm text-neutral-500 dark:text-neutral-200 hidden lg:block">{fun.description}</div>
                    
            </li>
            ))}
          </ul>
        </div>
          
      </div>
    )
  }