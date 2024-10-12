import { FC } from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

const ButtonOrange: FC<Props> = ({ text, onClick }) => {
  return (
    <button className="text-button-base bg-accent hover:bg-dark-accent disabled:text-slate-gray disabled:bg-cloud-gray h-[48px] w-full rounded-[10px] px-[20px] py-[12px] text-white lg:w-[210px]">
      {text}
    </button>
  );
};

export default ButtonOrange;
