import Image from 'next/image';

export default function Partners() {
  return (
    <section className="mx-auto flex w-full max-w-[1220px] flex-col items-center justify-between gap-[16px] px-[16px] md:h-[120px] md:flex-row md:gap-0 md:px-[40px] lg:h-[317px] lg:px-0">
      <h3 className="text-heading-md font-bold md:max-w-36 lg:max-w-full">
        Наши партнёры по монетизации
      </h3>
      <div className="flex flex-row flex-wrap items-center justify-center md:gap-[55px] lg:gap-[81px]">
        <Image
          src={'/images/logos/clickwave-logo.png'}
          alt="Clickwave Logo"
          width={355}
          height={109}
          className="h-11 w-fit md:h-[45px] lg:h-16"
        />
        <Image
          src={'/images/logos/zyphronix-logo.png'}
          alt="Clickwave Logo"
          width={204}
          height={142}
          className="order-last h-16 w-fit md:order-none md:h-[45px] lg:h-16"
        />
        <Image
          src={'/images/logos/novasphere-logo.png'}
          alt="Clickwave Logo"
          width={384}
          height={122}
          className="h-11 w-fit md:h-[45px] lg:h-16"
        />
      </div>
    </section>
  );
}
