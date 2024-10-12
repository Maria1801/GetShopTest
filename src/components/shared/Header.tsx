import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import LogoIcon from './icons/LogoIcon';
import Burger from './icons/Burger';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';
import Close from './icons/Close';
import classNames from 'classnames';
import { useActiveSection } from '@/providers/ActiveSectionContext';

export default function Header() {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { query } = router;
  const isMobile = useMediaQuery({ query: '(max-width: 320px)' });
  const modalRef = useRef<HTMLDivElement>(null);
  const { activeSection } = useActiveSection();

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <>
      {isModalOpened && (
        <nav
          ref={modalRef}
          className="fixed right-0 z-20 flex h-full w-full flex-col justify-center gap-5 bg-white md:w-[280px]"
        >
          <button
            onClick={() => setIsModalOpened(false)}
            className="absolute right-4 top-7 md:right-10"
          >
            {isMobile ? <Close size={32} /> : <Close size={55} />}
          </button>
          <Link
            href="/"
            onClick={() => setIsModalOpened(false)}
            className={classNames(
              'px-[32px] py-[10px] text-button-base font-bold hover:text-accent active:text-accent active:underline',
              {
                'text-accent': activeSection === 'advantages',
                'text-black': activeSection !== 'advantages',
              }
            )}
          >
            Преимущества
          </Link>
          <Link
            href="/"
            onClick={() => setIsModalOpened(false)}
            className={classNames(
              'px-[32px] py-[10px] text-button-base font-bold hover:text-accent active:text-accent active:underline',
              {
                'text-accent': activeSection === 'work',
                'text-black': activeSection !== 'work',
              }
            )}
          >
            Как работаем
          </Link>
        </nav>
      )}
      <header
        className={classNames(
          'fixed inset-x-0 z-20 mx-auto flex w-full flex-row bg-mist-gray transition-all duration-300 ease-in-out',
          { 'shadow-default-shadow': isScrolled }
        )}
      >
        <div className="mx-auto flex w-full max-w-[1220px] flex-row items-center justify-between px-[16px] py-4 md:px-[40px] lg:px-0">
          {!query.withLogo ? (
            <Logo />
          ) : isMobile ? (
            <LogoIcon size={32} />
          ) : (
            <LogoIcon size={55} />
          )}

          <div className="hidden items-center lg:inline-flex">
            <Link
              href="/"
              className={classNames(
                'px-8 py-[10px] text-button-base transition-colors duration-300 ease-in-out hover:text-accent active:text-accent active:underline',
                {
                  'text-accent': activeSection === 'advantages',
                  'text-black': activeSection !== 'advantages',
                }
              )}
            >
              Преимущества
            </Link>
            <Link
              href="/"
              className={classNames(
                'px-8 py-[10px] text-button-base transition-colors duration-300 ease-in-out hover:text-accent active:text-accent active:underline',
                {
                  'text-accent': activeSection === 'work',
                  'text-black': activeSection !== 'work',
                }
              )}
            >
              Как работаем
            </Link>
          </div>
          <button
            onClick={() => setIsModalOpened(true)}
            className="block lg:hidden"
          >
            {isMobile ? <Burger size={32} /> : <Burger size={55} />}
          </button>
        </div>
      </header>
    </>
  );
}
