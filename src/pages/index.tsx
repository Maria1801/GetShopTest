import FeedbackForm from "@/components/FeedbackForm";
import Hero from "@/components/Hero";
import MonetizationToggle from "@/components/MonetizationToggle";
import Partners from "@/components/Partners";
import Reports from "@/components/Reports";
import RevenueOptimization from "@/components/RevenueOptimization";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="GetShopTV - Монетизируйте клиентскую базу, не снижая NPS"
        description="Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации."
      />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "200px",
          "@media (min-width: 1024px)": {
            gap: "300px",
          },
          "@media (min-width: 768px)": {
            gap: "240px",
          },
        }}
      >
        <Hero />
        <MonetizationToggle />
        <RevenueOptimization />
        <Partners />
        <Reports />
        <FeedbackForm />
      </main>
    </>
  );
}
