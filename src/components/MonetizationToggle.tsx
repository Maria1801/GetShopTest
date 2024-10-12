import { useEffect, useRef, useState } from 'react';
import ToggleButton from './shared/buttons/ToggleButton';
import { useActiveSection } from '@/providers/ActiveSectionContext';

export default function MonetizationToggle() {
  const [selectedButton, setSelectedButton] = useState<number>(0);
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
    <section
      id="advantages"
      ref={sectionRef}
      className="mx-auto flex w-full max-w-[1220px] flex-col justify-between gap-[22px] px-[16px] md:flex md:flex-row md:gap-[80px] md:px-[40px] lg:grid lg:grid-cols-2 lg:px-0"
    >
      <h2 className="text-heading-base font-bold md:max-w-72 lg:max-w-md">
        Дополнительные источники выручки для разных компаний
      </h2>
      <div className="flex flex-col gap-[22px] md:gap-[16px] lg:gap-[32px]">
        <ToggleButton
          firstButtonTitle={'Операторам'}
          secondButtonTitle={'ОТТ сервисам'}
          onSelectedButtonChange={setSelectedButton}
        />
        <p className="text-body-lg">
          {selectedButton === 0
            ? 'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации'
            : 'Дополнительные возможности обогащения данных об аудитории и монетизации'}
        </p>
      </div>
    </section>
  );
}
