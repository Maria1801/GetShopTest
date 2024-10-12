import { FC } from 'react';

interface Props {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const ButtonBlack: FC<Props> = ({ text, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      className="h-[48px] w-full rounded-[10px] bg-black px-[20px] py-[12px] text-button-base text-white disabled:bg-cloud-gray disabled:text-white lg:w-[210px]"
    >
      {text}
    </button>
  );
};

export default ButtonBlack;
