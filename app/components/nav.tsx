import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://github.com/hjunyoung': {
    name: 'github',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="flex justify-between lg:sticky lg:top-20 bg">
        <nav
          className="flex w-full justify-between flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            href="/"
            className="text-md md:text-lg whitespace-nowrap font-bold"
          >
            <span className="cursor-default pr-2">Joonyoung Hong</span>
          </Link>
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
        <ThemeSwitcher />
      </div>
    </aside>
  );
}
