import { Onest } from 'next/font/google';
import Header from './Header';

export const onest = Onest({
  display: 'block',
  subsets: ['cyrillic', 'latin'],
  preload: true,
  weight: 'variable',
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={onest.style}>
      <div className="pb-[100px]">
        <Header />
      </div>
      {children}
    </div>
  );
}
