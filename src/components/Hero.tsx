import Image from 'next/image';
import ButtonOrange from './shared/buttons/ButtonOrange';

export default function Hero() {
  return (
    <>
      <Image
        src={'/images/background.png'}
        alt="Background shapes"
        width={1440}
        height={801}
        quality={100}
        className="absolute -z-10 mx-auto h-[410px] object-cover md:bottom-72 md:h-[810px] md:object-cover md:opacity-100 md:mix-blend-luminosity lg:inset-0 lg:mt-[67px] lg:object-cover lg:opacity-80 lg:bg-blend-normal"
        style={{
          maskImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0))',
        }}
      />

      <section className="flexflex-col relative z-10 px-[16px] pt-[48px] md:px-[40px] md:pt-[80px] lg:px-0 lg:pt-[100px]">
        <div className="mx-auto flex flex-col gap-[112px] md:max-w-[688px] md:gap-[60px] lg:max-w-[1220px] lg:gap-[80px]">
          <div className="flex flex-col gap-[32px]">
            <h1 className="text-heading-lg font-bold">
              Монетизируйте клиентскую базу, не снижая NPS
            </h1>
            <h3 className="hidden text-heading-md font-normal md:max-w-md lg:block lg:max-w-2xl">
              Найдите идеальный баланс выручки и удовлетворённости пользователей
              с платформой рекламной монетизации
            </h3>
            <p className="block text-pretty text-body-lg font-normal md:max-w-md lg:hidden lg:max-w-2xl">
              Найдите идеальный баланс выручки и удовлетворённости пользователей
              с платформой рекламной монетизации
            </p>
          </div>
          <ButtonOrange text="Заказать звонок" onClick={() => {}} />
        </div>
      </section>
    </>
  );
}
