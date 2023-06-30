import { ConfigProvider, Tabs } from 'antd';

// components
import BackButton from '../../components/backbutton'

// tabs
import Tab1 from './link_tabs/tab1'


const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: <span className="dark:text-white font-bold p-2 dark:bg-stone-800 dark:hover:bg-stone-700 hover:rounded-lg rounded-md">💼 Work</span>,
    children: <Tab1/>,
  },
  {
    key: '2',
    label: <span className="dark:text-white font-bold p-2 dark:bg-stone-800 dark:hover:bg-stone-700 hover:rounded-lg rounded-md">🙋 People</span>,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: <span className="dark:text-white font-bold p-2 dark:bg-stone-800 dark:hover:bg-stone-700 hover:rounded-lg rounded-md">📌 Bookmarks</span>,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '4',
    label: <span className="dark:text-white font-bold p-2 dark:bg-stone-800 dark:hover:bg-stone-700 hover:rounded-lg rounded-md">🌟 Fun</span>,
    children: `Content of Tab Pane 4`,
  },
];

export default function Links() {

    return (
        <div className="bg-[#ffc846] dark:bg-[#3a270e] h-full dark:text-white duration-500 drop-shadow-lg">
            <div className="p-4 pt-24 pb-24 md:p-24 md:pb-32">
                <BackButton />
                <div className="bg-stone-50 dark:bg-neutral-900 rounded-lg p-8 pb-16 drop-shadow-lg">
                    <div className="relative mb-2">
                        <div >
                            <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">LINKS</h1>
                        </div>
                        <div className="absolute top-0 left-1 aria-hidden select-none">
                            <h1 className="text-6xl font-bold text-amber-500 text-stroke">LINKS</h1>
                        </div>
                    </div>
                    <p className="mb-4 text-neutral-500">My ever-expanding collection of cool things from all over.</p>
                    <ConfigProvider
                        theme={{
                        token: {
                            colorPrimary: '#4d7c0f',
                        },
                        }}
                    >
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </ConfigProvider>
                </div>
            </div>
            
            
        </div>
    )
}