import './about_cards.css'

const handleClick = (myLink) => () => {
  window.location.href = myLink;
}

const cards = [
  {
    tabindex: 1,
    title: 'Links',
    description: "Cool things I've collected",
    link: '/links',
    symbols: '🔗🦝',
    color: '#fde68a',
    cover: "bg-amber-200 dark:bg-amber-500 rounded-t-md text-4xl sm:text-4xl md:text-6xl p-4 sm:p-8 text-center duration-500",
  },
  {
    tabindex: 2,
    title: 'Adventures',
    description: "What I've been up to",
    link: '/adventures',
    symbols: '🌎🛸',
    color: '#fde68a',
    cover: "bg-yellow-200 dark:bg-amber-900 rounded-t-md text-4xl sm:text-4xl md:text-6xl p-4 sm:p-8 text-center duration-500",
  },
];

const About_Cards = () => (

  <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 items-stretch'>
    {cards.map((card) => (
      <div tabIndex={30 + card.tabindex} onClick={handleClick(card.link)} className="flex flex-col hover-shadow hover:cursor-pointer">
        <div className={card.cover}>
          {card.symbols}
        </div>
        <div className="bg-neutral-50 dark:bg-[#211e1d] p-4 rounded-b-md flex-grow">
          <p className="font-bold">{card.title}</p>
          <p className="text-sm text-neutral-500">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default About_Cards;