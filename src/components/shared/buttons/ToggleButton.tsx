import classNames from 'classnames';
import { FC, useState } from 'react';

interface Props {
  firstButtonTitle: string;
  secondButtonTitle: string;
  onSelectedButtonChange: (selectedButtonNumber: number) => void;
}

const ToggleButton: FC<Props> = ({
  firstButtonTitle,
  secondButtonTitle,
  onSelectedButtonChange,
}) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleSelectedButton = () => {
    if (selectedButton === 0) {
      setSelectedButton(1);
      onSelectedButtonChange(1);
    } else {
      setSelectedButton(0);
      onSelectedButtonChange(0);
    }
  };

  return (
    <div className="group-[toggle] flex w-full flex-row overflow-hidden rounded-[14px] bg-frost-gray p-[4px]">
      <button
        onClick={() => handleSelectedButton()}
        className={classNames(
          'w-full rounded-[5px] px-[19px] py-[5px] text-[12px] font-bold transition-colors duration-200 ease-in-out md:rounded-[6px] md:px-[37px] md:py-[10px] md:text-heading-md lg:rounded-[10px]',
          {
            'bg-black text-white': selectedButton === 0,
            'bg-transparent text-slate-gray group-[toggle]:hover:text-white':
              selectedButton !== 0,
          }
        )}
      >
        {firstButtonTitle}
      </button>
      <button
        onClick={() => handleSelectedButton()}
        className={classNames(
          'w-full rounded-[5px] px-[19px] py-[5px] text-[12px] font-bold transition-colors duration-200 ease-in-out md:rounded-[6px] md:px-[37px] md:py-[10px] md:text-heading-md lg:rounded-[10px]',
          {
            'bg-black text-white': selectedButton === 1,
            'bg-transparent text-slate-gray group-[toggle]:hover:text-white':
              selectedButton !== 1,
          }
        )}
      >
        {secondButtonTitle}
      </button>
    </div>
  );
};

export default ToggleButton;
