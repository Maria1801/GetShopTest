import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <p className="inline-flex h-[32px] w-[113px] items-center justify-center self-center rounded-[10px] bg-white font-black uppercase tracking-[0.77px] md:h-[40px] md:w-[161px] md:text-[21px] lg:h-auto lg:w-[180px] lg:text-[37px]">
        Logo
      </p>
    </Link>
  );
}
