import { useState } from "react";

import KPICalcForm from "./components/KPICalcForm";

export default function Home() {
  // This is a placeholder. You may alter as much as you'd like.
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between">
        <h1>Beregn prisendring</h1>
        <p>
          Regn ut hvor mye prisene har endret seg. Kalkulatoren er basert på{" "}
          <a href="https://www.ssb.no/kpi">konsumprisindeksen</a>.
        </p>
        <KPICalcForm />
        <a href="https://www.ssb.no/kalkulatorer/priskalkulator/om-priskalkulatoren">
          Les om kalkulatoren
        </a>
      </div>
    </main>
  );
}
