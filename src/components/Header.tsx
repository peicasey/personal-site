"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import { jost } from "@/app/fonts";

const workPages: { title: string; href: string; description: string }[] = [
  {
    title: "Projects",
    href: "/work/projects",
    description: "Cool things I've worked on :D",
  },
  {
    title: "Logs",
    href: "/work/logs",
    description: "Writings and write-ups",
  },
];

const morePages: { title: string; href: string; description: string }[] = [
  {
    title: "Adventures",
    href: "/more/adventures",
    description: "Casual record of what I've been up to",
  },
  {
    title: "Links",
    href: "/more/links",
    description: "Some important links (me, bookmarks, etc.)",
  },
  {
    title: "Archives",
    href: "/more/archives",
    description: "Records from university",
  },
];

export function Header() {
  return (
    <header className="fixed w-full flex items-center justify-between p-4 z-50">
      <a>O</a>
      <div className="flex items-center gap-2">
        <NavigationMenu className="bg-primary rounded-3xl border-[1px] border-black dark:border-white dark:yellow-glow-md">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "rounded-l-3xl")}
                >
                  about
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>work</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {workPages.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-r-3xl">
                more
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/more"
                        className={cn(
                          "cursor-pointer h-full outline border border-stone-300 dark:border-stone-500 bg-stone-100 dark:bg-stone-900 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-200 dark:hover:bg-stone-800 dark:focus:bg-stone-800 dark:focus:text-stone-800"
                        )}
                      >
                        <div className="text-md leading-none">More</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          adventures, archives, links
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {morePages.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block h-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
