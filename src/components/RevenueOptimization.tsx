import { useMediaQuery } from 'react-responsive';
import ArrowTopRight from './shared/icons/ArrowTopRight';
import LogoIcon from './shared/icons/LogoIcon';
import { useActiveSection } from '@/providers/ActiveSectionContext';
import { useEffect, useRef } from 'react';

export default function RevenueOptimization() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const { setActiveSection } = useActiveSection();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        entries => {
          let topMostSectionId: string | null = null;
          let topMostSectionY: number | null = null;

          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const currentSectionTop = entry.boundingClientRect.top;

              if (
                topMostSectionId === null ||
                currentSectionTop < (topMostSectionY as number)
              ) {
                topMostSectionId = entry.target.id;
                topMostSectionY = currentSectionTop;
              }
            }
          });

          if (topMostSectionId !== null) {
            setActiveSection(topMostSectionId);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, [setActiveSection]);

  return (
    <section id="work" ref={sectionRef} className="relative">
      <div className="absolute inset-0 top-1/2 -z-10 w-full -translate-y-1/2 transform bg-frost-gray md:h-[471px] lg:h-[647px]" />
      <div className="relative mx-auto flex w-full max-w-[1220px] flex-col px-[16px] md:items-center md:gap-[60px] md:px-[40px] lg:items-center lg:gap-[80px] lg:px-0">
        <h2 className="text-heading-base font-bold md:max-w-lg md:text-center lg:max-w-full">
          Баланс между выручкой и удовлетворённостью пользователей
        </h2>
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex flex-col gap-[16px] p-[24px] md:w-[216px] lg:w-[300px] lg:p-[32px]">
            <ArrowTopRight />
            <h3 className="text-heading-md font-bold">
              Частотность под контролем
            </h3>
            <p className="text-body-base">
              Чтобы не ронять NPS и не увеличивать отток пользователей
            </p>
          </div>
          <div className="grid grow grid-cols-1 place-items-center">
            <div className="relative flex h-[175px] w-0.5 flex-row bg-accent md:h-0.5 md:w-full">
              {/* Верхний круг */}
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 transform rounded-full bg-accent md:left-0 md:top-1/2 md:-translate-y-1/2" />

              {/* Логотип */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                {isDesktop ? <LogoIcon /> : <LogoIcon size={80} />}
              </div>

              {/* Нижний круг */}
              <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 transform rounded-full bg-accent md:left-full md:right-0 md:top-1/2 md:-translate-y-1/2" />
            </div>
          </div>

          <div className="flex flex-col gap-[16px] p-[24px] md:w-[216px] lg:w-[300px] lg:p-[32px]">
            <ArrowTopRight />
            <h3 className="text-heading-md font-bold">Максимальная выручка</h3>
            <p className="text-body-base">
              За счёт заполенения всех рекламных мест по высокой цене
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
