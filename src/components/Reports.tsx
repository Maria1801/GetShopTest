import Image from 'next/image';
import ButtonBlack from './shared/buttons/ButtonBlack';
import ArrowTopRight from './shared/icons/ArrowTopRight';

export default function Reports() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 top-1/2 -z-10 w-full -translate-y-1/2 transform bg-frost-gray md:h-[471px] lg:h-[647px]" />

        <div className="relative mx-auto flex w-full max-w-[1220px] flex-col gap-[32px] overflow-hidden px-[16px] md:px-[40px] lg:gap-[80px] lg:px-0">
          <div className="flex max-w-[320px] flex-col gap-[32px] lg:max-w-[497px]">
            <h2 className="text-balance text-heading-base font-bold">
              Подробные отчёты для вас и правообладателей
            </h2>
            <div className="flex flex-col gap-[20px]">
              {[
                'Выручка, CTR, показы и другие показатели в реальном времени.',
                'Инструменты контроля качества трафика.',
                'Ежемесячные автоматические отчёты для каждого правообладателя.',
              ].map((text, index) => (
                <div
                  key={index}
                  className="grid grid-cols-10 items-start gap-[16px] text-body-lg"
                >
                  <ArrowTopRight />
                  <p className="col-span-9 w-fit">{text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* ToDo: add className prop for black button to handle button width */}
          <div className="md:max-w-[210px]">
            <ButtonBlack text="Заказать звонок" onClick={() => {}} />
          </div>
          <Image
            src={'/images/reports.png'}
            alt="Reports dashboard"
            width={631}
            height={482}
            className="hidden md:absolute md:-right-16 md:block md:w-[399px] lg:right-0 lg:w-[482px]"
          />
        </div>
      </section>
      <Image
        src={'/images/reports.png'}
        alt="Reports dashboard"
        width={631}
        height={482}
        className="-mt-[30px] md:hidden"
      />
    </>
  );
}
