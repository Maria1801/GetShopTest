import { FC } from 'react';

interface Props {
  size?: number;
}

const Burger: FC<Props> = ({ size }) => {
  return (
    <svg
      width={!size ? '44' : size}
      height={!size ? '44' : size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="9"
        stroke="#FF5900"
        strokeWidth="2"
      />
      <path
        d="M11.4783 14H33"
        stroke="#FF5900"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.4783 22H33"
        stroke="#FF5900"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.4783 30H33"
        stroke="#FF5900"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Burger;
