import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import IconButton from '@mui/material/IconButton';

import ToggleTheme from './toggleTheme/toggletheme'
import logo from '../assets/logo_512.png'
//import Hamburger from './hamburger/hamburger'
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavigationMenu.Root className="fixed z-[1] flex w-screen py-2 px-4 m-0 top-0 justify-between backdrop-blur">
      <div className='flex justify-center items-center'>
        <IconButton aria-label="delete">
          <img
            src={logo}
            className='w-8 h-8'
            onClick={() => navigate('/')}
          />
        </IconButton>
      </div>
      
      <NavigationMenu.List className="right shadow-blackA7 m-0 flex items-center list-none rounded-[6px] backdrop-blur-2xl p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-amber11 dark:text-amber-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:shadow-amber7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            About{' '}
            <CaretDownIcon
              className="text-amber10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-amber7 from-yellow7 to-lime10 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/about"
                  >
                    {/* <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg> */}
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Me
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      A 3rd-year CS Student interested in all things software dev :)
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem title="About" className="hover:cursor-pointer" onClick={() => navigate('/about')}>
                a longer description of me by me! 
              </ListItem>
              <ListItem title="Adventures" className="hover:cursor-pointer" onClick={() => navigate('/adventures')}>
                what I've been up to!
              </ListItem>
              <ListItem title="Links" className="hover:cursor-pointer" onClick={() => navigate('/links')}>
                some relevant (and irrelevant) links
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-amber11 dark:text-amber-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:shadow-amber7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Projects{' '}
            <CaretDownIcon
              className="text-amber10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="All Projects" className="hover:cursor-pointer" onClick={() => navigate('/projects')}>
                all my projects bwahahaha
              </ListItem>
              <ListItem title="Full Stack" className="hover:cursor-pointer" onClick={() => navigate('/projects/fullstack')}>
                my full stack work ranging from webdev to desktop
              </ListItem>
              <ListItem title="Games!!" className="hover:cursor-pointer" onClick={() => navigate('/games')}>
                the fun section of the website
              </ListItem>
              <ListItem title="AI/ML" className="hover:cursor-pointer" onClick={() => navigate('/aiml')}>
                when the robot uprising comes they will not be happy
              </ListItem>
              <ListItem title="Big Brain" className="hover:cursor-pointer" onClick={() => navigate('/bigbrain')}>
                ones that are complicated
              </ListItem>
              <ListItem title="Favorites" className="hover:cursor-pointer" onClick={() => navigate('/favorites')}>
                projects that I like the most
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-amber11 dark:text-amber-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:shadow-amber7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Experience{' '}
            <CaretDownIcon
              className="text-amber10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-2">
              <ListItem title="Experience" className="hover:cursor-pointer" onClick={() => navigate('/experience')}>
                my work and leadership experience.
              </ListItem>
              <ListItem title="Skills" className="hover:cursor-pointer" onClick={() => navigate('/experience/skills')}>
                my technical and soft skills.
              </ListItem>
              <ListItem title="Resume" className="hover:cursor-pointer" onClick={() => navigate('/resume')}>
                the almighty resume!
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="flex items-center pl-2">
          <ToggleTheme/>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white dark:bg-neutral-800" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full right-0 sm:right-4 flex w-full justify-center sm:justify-end">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[3px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white dark:bg-neutral-800 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'focus:shadow-[0_0_0_2px] focus:shadow-amber7 hover:bg-mauve3 dark:hover:bg-neutral-900 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-amber12 dark:text-amber-300 mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-mauve11 dark:text-neutral-200 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default Navbar;

