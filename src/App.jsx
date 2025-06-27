import { useState } from "react";
import Landing from "./components/Landing";

export default function App() {
  const [step, setStep] = useState("landing");

  return (
    <>
      {step === "landing" && <Landing onStart={() => setStep("auth")} />}
    </>
  );
}
