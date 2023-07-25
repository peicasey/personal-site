import './tab.css'

const bookmarks = [
  {
    title: 'Tailwind CSS',
    description: 'color chart because I always forget',
    link: 'https://tailwindcss.com/docs/customizing-colors',
    link_display: 'tailwindcss.com',
    symbol: '🍃',
  },
  {
    title: 'Radix UI',
    description: 'accessible and pretty!',
    link: 'https://www.radix-ui.com/',
    link_display: 'radix-ui.com',
    symbol: '®️',
  },
  {
    title: 'DevIcon',
    description: 'icons for tech and logos',
    link: 'https://devicon.dev/',
    link_display: 'devicon.dev',
    symbol: '💻',
  },
  {
    title: 'Website Carbon',
    description: 'measuring carbon footprint of your website',
    link: 'https://www.websitecarbon.com/',
    link_display: 'websitecarbon.com',
    symbol: '💨',
  },
  {
    title: 'UI.Dev',
    description: 'articles on UI stuff',
    link: 'https://ui.dev/',
    link_display: 'ui.dev',
    symbol: '🇺',
  },
]


export default function Tab3() {

    return (
      <div>
        <p className=" mb-4 text-neutral-500 dark:text-neutral-200">Useful things for myself!</p>
         <div>
          <ul bookmark="list" className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {bookmarks.map((bookmark) => (
            <li className="dark:text-white flex justify-between items-center gap-2 sm:gap-4 p-2 hover:rounded-md hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
                  
                <div className="overflow-hidden text-ellipsis flex items-center flex-grow-0">
                  <div className="aria-hidden select-none sm:text-lg mr-2">{bookmark.symbol}</div>
                  <div className="flex items-center gap-2 justify-normal">
                    <span className="truncate text-xs sm:text-md lg:text-md font-bold">{bookmark.title}</span>
                    <a href={bookmark.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden text-ellipsis text-sm sm:text-md lg:text-md underlined text-lime-700 dark:text-lime-200 hover:text-lime-500 dark:hover:text-lime-500">{bookmark.link_display}</a>
                  </div>
                </div>
                <div className="flex-grow h-[1px] min-w-[0px] bg-neutral-200 dark:bg-neutral-700"></div>
                <div className="text-sm text-neutral-500 dark:text-neutral-200 hidden lg:block">{bookmark.description}</div>
                    
            </li>
            ))}
          </ul>
        </div>
          
      </div>
    )
  }