import Image from "next/image";
import ButtonOrange from "./shared/buttons/ButtonOrange";

export default function Hero() {
  return (
    <>
      <Image
        src={"/images/background.png"}
        alt="Background shapes"
        width={1440}
        height={801}
        quality={100}
        style={{
          position: "absolute",
          zIndex: -10,
          margin: "0 auto",
          height: "610px",
          objectFit: "cover",
          "@media (minWidth: 768px)": {
            bottom: "72px",
            height: "810px",
            opacity: 1,
            mixBlendMode: "luminosity",  
          },
          "@media (minWidth: 1024px)": {
            inset: 0, 
            marginTop: "67px",
            opacity: 0.8, 
            backgroundBlendMode: "normal",
          },
          maskImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0))",
        }}
      />

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 10,
          paddingTop: "68px",
          paddingRight: "16px",
          margin: "0 auto",
          width: "100%",
          maxWidth: "1220px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "112px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              Монетизируйте клиентскую базу, не снижая NPS
            </h1>
            <h3
              style={{
                display: "none",
                fontSize: "2rem",
                fontWeight: "normal",
                maxWidth: "688px",
              }}
            >
              Найдите идеальный баланс выручки и удовлетворённости пользователей
              с платформой рекламной монетизации
            </h3>
            <p
              style={{
                display: "block",
                fontSize: "1.125rem",
                fontWeight: "normal",
                maxWidth: "688px",
              }}
            >
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
