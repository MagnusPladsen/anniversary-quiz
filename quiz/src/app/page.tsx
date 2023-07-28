"use client";

import Image from "next/image";
import { useState } from "react";
import LandingPage from "../components/landingPage.component";
import Codes from "@/components/codes.component";
import Quiz from "@/components/quiz.component";
import Ending from "@/components/ending.component";

export default function Home() {
  const [stepper, setStepper] = useState(0);

  return (
    <main className="bg-primary h-[100vh] w-[100vw] font-yeseva">
      {stepper === 0 && <LandingPage setStepper={setStepper} />}
      {stepper === 1 && <Codes setStepper={setStepper} />}
      {stepper === 2 && <Quiz setStepper={setStepper} />}
      {stepper === 3 && <Ending setStepper={setStepper} />}
    </main>
  );
}
