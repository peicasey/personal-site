import './tab.css'

const people = [
  {
    name: 'Paul Taele',
    description: 'as a 🐐 and my CSCE 121 prof',
    link: 'http://www.paultaele.com/',
    link_display: 'paultaele.com',
    icon: '👨🏽‍🏫',
  },
  {
    name: 'Dakshika Srivastava',
    description: 'as President of ACC!',
    link: 'https://www.dakshika.live/',
    link_display: 'dakshika.live',
    icon: '🙋🏾‍♀️',
  },
  {
    name: 'Brady Langdale',
    description: "as who I replaced as ACC VP o-o''",
    link: 'https://bradylangdale.github.io/',
    link_display: 'bradylangdale.github.io',
    icon: '👨🏻‍🚀',
  },
  {
    name: 'Andrew Fennell',
    description: 'as ACC Projects Chair',
    link: 'https://www.linkedin.com/in/andrew-fennell/',
    link_display: 'linkedin/in/andrew-fennell',
    icon: '👨🏼‍💻',
  },
  {
    name: 'Kurt Zhang',
    description: "as my Principal Investigator",
    link: 'https://ibt.tamu.edu/faculty/kurt-zhang.html',
    link_display: 'ibt.tamu.edu/faculty/kurt-zhang',
    icon: '🧑🏻‍🔬',
  },
  {
    name: 'Stacey Jeon',
    description: "as my emotional-support grad student",
    link: 'https://www.linkedin.com/in/minsunjeon/',
    link_display: 'linkedin/in/minsunjeon',
    icon: '👩🏻‍🔬',
  },
  {
    name: 'Tiffany Pei',
    description: 'public health girlboss',
    link: 'https://www.linkedin.com/in/pei-tiffany/',
    link_display: 'linkedin/in/pei-tiffany',
    icon: '👩🏻',
  },
  {
    name: 'Jing Pei',
    description: 'owner of sharma',
    link: 'https://www.linkedin.com/in/jingjpei/',
    link_display: 'linkedin/in/jingpei',
    icon: '👩🏻‍💻',
  },
  {
    name: 'Lily Tang',
    description: "as co-PM of Twitter Bot project and cat-haver",
    link: 'https://www.linkedin.com/in/yushan-tang-083746219/',
    link_display: 'linkedin/in/yushan-tang-083746219',
    icon: '💇🏻‍♀️',
  },
  {
    name: 'Ryan Kabir',
    description: "as TAO president and 🦁",
    link: 'https://ryankbr.github.io/',
    link_display: 'ryankbr.github.io',
    icon: '🙎🏻',
  },
  {
    name: 'Christion Bradley',
    description: "as ACC Projects successor",
    link: 'https://www.linkedin.com/in/christion-bradley-152b78223/',
    link_display: 'linkedin/in/christion-bradley-152b78223',
    icon: '🙆🏿',
  },
  {
    name: 'Harsh Gangaramani',
    description: "as fellow ACC Projects officer",
    link: 'https://www.linkedin.com/in/harsh-gangaramani/',
    link_display: 'linkedin/in/harsh-gangaramani',
    icon: '🧑🏽‍💻',
  },
  {
    name: 'AJ Bamgbelu',
    description: "as ACC Projects officer-in-training",
    link: 'https://www.linkedin.com/in/ajbamgbelu/',
    link_display: 'linkedin/in/ajbamgbelu',
    icon: '🤷🏿',
  },
  {
    name: 'Yuqian Cao',
    description: "as 🌧️ and ACC Projects officer-in-training",
    link: 'https://www.linkedin.com/in/yuqian-cao-09ily/',
    link_display: 'linkedin/in/yuqian-cao-09ily',
    icon: '💁🏻‍♀️',
  },
  {
    name: 'Carol Geng',
    description: "as game jam teammate and ACC officer",
    link: 'http://www.carolgeng.tech/index.html',
    link_display: 'carolgeng.tech',
    icon: '👩🏻‍🎨',
  },
  {
    name: 'Dallas Coggins',
    description: "as game jam teammate and jasper stan",
    link: 'https://www.linkedin.com/in/dallas-coggins-1b568622b/',
    link_display: 'linkedin/in/dallas-coggins-1b568622b',
    icon: '🤦🏼',
  },
  {
    name: 'Peter Schlenker',
    description: "as game jam teammate and art intern",
    link: 'https://www.linkedin.com/in/peter-schlenker-939aa0236/',
    link_display: 'linkedin/in/peter-schlenker-939aa0236',
    icon: '🙋🏻‍♂️',
  },
  {
    name: 'Madison Sutton',
    description: "as game jam teammate",
    link: 'https://www.linkedin.com/in/madison-sutton-35378226b/',
    link_display: 'linkedin/in/madison-sutton-35378226b',
    icon: '👩🏻‍🦰',
  },
  
]


export default function Tab2() {

    return (
      <div>
        <p className=" mb-4 text-neutral-500 dark:text-neutral-200">People I've been lucky to work with and how I know them!</p>
         <div>
          <ul person="list" className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {people.map((person) => (
            <li className="dark:text-white flex justify-between items-center gap-4 p-2 hover:rounded-md hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
                  
                <div className="truncate flex items-center flex-grow-0">
                  <div className="aria-hidden select-none flex items-center justify-center text-md sm:text-lg mr-2 w-6 h-6 sm:w-8 sm:h-8 rounded-2xl bg-[#ebe5da] dark:bg-[#2f2d25]">{person.icon}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-md lg:text-md font-bold">{person.name}</span>
                    <a href={person.link} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-md lg:text-md underlined text-lime-700 dark:text-lime-200 hover:text-lime-500 dark:hover:text-lime-500">{person.link_display}</a>
                  </div>
                </div>
                <div className="flex-grow h-[1px] min-w-[0px] bg-neutral-200 dark:bg-neutral-700"></div>
                <div className="text-sm text-neutral-500 dark:text-neutral-200 hidden lg:block">{person.description}</div>
                    
            </li>
            ))}
          </ul>
        </div>
          
      </div>
    )
  }