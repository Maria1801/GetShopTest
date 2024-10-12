import Link from "next/link";
import ButtonBlack from "./shared/buttons/ButtonBlack";
import { useState } from "react";
import classNames from "classnames";
import CheckBoxFill from "./shared/icons/CheckBoxFill";
import CheckBoxEmpty from "./shared/icons/CheckBoxEmpty";

export default function FeedbackForm() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userEmail) {
      setErrorMessage("Введите e-mail");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)) {
      setErrorMessage("Неверный формат e-mail");
      return;
    }

    if (!question) {
      setErrorMessage("Введите ваш вопрос");
      return;
    }

    setErrorMessage("");
  };

  return (
    <section
      style={{
        margin: "0 auto",
        display: "flex",
        width: "100%",
        maxWidth: "1220px",
        flexDirection: "column",
        gap: "32px",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "120px",
      }}
    >
      <h2 style={{ fontSize: "2rem", paddingBottom: "40px", fontWeight: "bold" }}>Заполните форму</h2>

      <form onSubmit={handleSubmitForm}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            gap: "40px",
          }}
        >
          <textarea
            placeholder="Напишите свой вопрос"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{
              height: "216px",
              width: "100%",
              resize: "none",
              borderRadius: "12px",
              backgroundColor: "transparent",
              padding: "12px",
              outline: "2px solid slategray",
              transition: "all 300ms ease-in-out",
            }}
            onFocus={(e) => (e.target.style.outlineColor = "black")}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "48px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <input
                  placeholder="Введите e-mail"
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                  style={{
                    width: "100%",
                    borderBottom: `2px solid ${
                      errorMessage ? "red" : "slategray"
                    }`,
                    backgroundColor: "transparent",
                    padding: "12px 0",
                    outline: "none",
                    transition: "border-color 300ms ease-in-out",
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "black")}
                  onBlur={(e) =>
                    !errorMessage
                      ? (e.target.style.borderBottomColor = "slategray")
                      : null
                  }
                />
                {errorMessage && (
                  <p style={{ fontSize: "1rem", color: "red" }}>
                    {errorMessage}
                  </p>
                )}
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "12px" }}
              >
                <button
                  type="button"
                  onClick={() => setIsChecked(!isChecked)}
                  style={{ cursor: "pointer" }}
                >
                  {isChecked ? <CheckBoxFill /> : <CheckBoxEmpty />}
                </button>
                <p style={{ fontSize: "1rem" }}>
                  Я ознакомлен(а) с{" "}
                  <Link href="/" style={{ textDecoration: "underline" }}>
                    политикой конфиденциальности
                  </Link>{" "}
                  и согласен(на) на обработку{" "}
                  <Link href="/" style={{ textDecoration: "underline" }}>
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
