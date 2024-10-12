import Link from 'next/link';
import ButtonBlack from './shared/buttons/ButtonBlack';
import { useState } from 'react';
import classNames from 'classnames';
import CheckBoxFill from './shared/icons/CheckBoxFill';
import CheckBoxEmpty from './shared/icons/CheckBoxEmpty';

export default function FeedbackForm() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userEmail) {
      setErrorMessage('Введите e-mail');
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)) {
      setErrorMessage('Неверный формат e-mail');
      return;
    }

    if (!question) {
      setErrorMessage('Введите ваш вопрос');
      return;
    }

    // fetch(...)
    setErrorMessage('');
  };

  return (
    <section className="mx-auto flex w-full max-w-[1220px] flex-col gap-[32px] px-[16px] pb-[80px] md:px-[40px] lg:gap-[64px] lg:px-0">
      <h2 className="text-heading-base font-bold">Заполните форму</h2>

      <form onSubmit={handleSubmitForm}>
        <div className="flex w-full flex-col gap-[40px] lg:flex-row">
          <textarea
            placeholder="Напишите свой вопрос"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            className="h-[216px] w-full resize-none rounded-[12px] bg-transparent p-3 outline outline-2 outline-slate-gray transition-all duration-300 ease-in-out focus:outline-black"
          />
          <div className="flex flex-col gap-[32px] md:gap-[64px] lg:gap-[48px]">
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-3">
                <input
                  placeholder="Введите e-mail"
                  onChange={e => setUserEmail(e.target.value)}
                  value={userEmail}
                  className={classNames(
                    'w-full border-b-2 bg-transparent py-3 outline-none transition-all duration-300 ease-in-out',
                    {
                      'border-error focus:border-error': errorMessage,
                      'border-slate-gray focus:border-black': !errorMessage,
                    }
                  )}
                />
                {errorMessage && (
                  <p className="text-body-md text-error">{errorMessage}</p>
                )}
              </div>
              <div className="flex flex-row items-start gap-3">
                <button type="button" onClick={() => setIsChecked(!isChecked)}>
                  {isChecked ? <CheckBoxFill /> : <CheckBoxEmpty />}
                </button>
                <p className="items-center text-body-md">
                  Я ознакомлен(а) с{' '}
                  <Link href="/" className="underline">
                    политикой конфиденциальности
                  </Link>{' '}
                  и согласен(на) на обработку{' '}
                  <Link href={'/'} className="underline">
                    персональных данных.
                  </Link>
                </p>
              </div>
            </div>

            <ButtonBlack type="submit" text="Отправить" />
          </div>
        </div>
      </form>
    </section>
  );
}
