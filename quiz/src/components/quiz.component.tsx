import { use, useEffect, useState } from "react";
import loadingSpinner from "./loadingSpinner.component";

export default function Quiz({
  setStepper,
}: {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [codeStepper, setCodeStepper] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const questions = [
    "Hvor lenge  skal vi være sammen?",
    "Hva er det viktigste for meg?",
    "Hva elsker jeg mest med deg?",
    "Hva er favoritt turen min?",
    "Er dette det beste spillet du noen ganger har spilt?",
  ];

  const answers = [
    "For alltid!",
    "At du har det bra",
    "ALT, absolutt alt",
    "Alicante",
    "Ja!",
  ];

  const [choice, setChoice] = useState("");

  const handleVerify = () => {
    if (answers[codeStepper - 1].toLowerCase() === choice.toLowerCase()) {
      setChoice("");
      setCodeStepper(codeStepper + 1);
    } else {
    }
  };

  const handleWrongChoice = (e: any) => {
    setChoice("");
    const target = e.target as HTMLDivElement;
    target.style.borderColor = "red";
    target.style.backgroundColor = "gray";
    target.style.color = "red";
  };

  const handleCorrectChoice = (e: any) => {
    const target = e.target as HTMLDivElement;
    target.style.borderColor = "green";
    target.style.color = "green";
  };

  if (codeStepper === answers.length) {
    setStepper(3);
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/quiz.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      className="h-full w-full relative text-white"
    >
      <div className="w-[80vw] mx-auto  flex flex-col gap-5">
        {codeStepper === 0 && (
          <>
            <h1 className="text-4xl pt-5 text-center">QUIZ</h1>
            <p className="text-xl text-center">
              Dette er siste steg i verifiseringen! Om du greier dette så har du
              bevist at du er riktig person.
            </p>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() => {
                setCodeStepper(1);
                setTimeout(() => {
                  setShowHelp(true);
                }, 10000);
              }}
            >
              <div className="flex justify-center items-center h-full">
                Start
              </div>
            </div>
          </>
        )}
        {codeStepper === 1 && (
          <>
            <h1 className="text-4xl pt-5 text-center">
              {codeStepper + ": " + questions[codeStepper - 1]}
            </h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2 ">
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center `}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                2 år
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  setChoice(answers[codeStepper - 1]);
                  handleCorrectChoice(e);
                }}
              >
                {answers[codeStepper - 1]}
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                10 år
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                20 år
              </div>
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer   ${
                choice === ""
                  ? "bg-gray-400 text-gray-700"
                  : "bg-primary text-white"
              }`}
              onClick={() => {
                if (choice !== "") {
                  handleVerify();
                }
              }}
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 2 && (
          <>
            <h1 className="text-4xl pt-5 text-center">
              {codeStepper + ": " + questions[codeStepper - 1]}
            </h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2 ">
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center `}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Å vinne i Mariokart
              </div>

              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Penger
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Sex
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  setChoice(answers[codeStepper - 1]);
                  handleCorrectChoice(e);
                }}
              >
                {answers[codeStepper - 1]}
              </div>
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer   ${
                choice === ""
                  ? "bg-gray-400 text-gray-700"
                  : "bg-primary text-white"
              }`}
              onClick={() => {
                if (choice !== "") {
                  handleVerify();
                }
              }}
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 3 && (
          <>
            <h1 className="text-4xl pt-5 text-center">
              {codeStepper + ": " + questions[codeStepper - 1]}
            </h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2 ">
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center `}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Smilet ditt
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  setChoice(answers[codeStepper - 1]);
                  handleCorrectChoice(e);
                }}
              >
                {answers[codeStepper - 1]}
              </div>

              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Øynene dine
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Dupa dupa
              </div>
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer   ${
                choice === ""
                  ? "bg-gray-400 text-gray-700"
                  : "bg-primary text-white"
              }`}
              onClick={() => {
                if (choice !== "") {
                  handleVerify();
                }
              }}
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 4 && (
          <>
            <h1 className="text-4xl pt-5 text-center">
              {codeStepper + ": " + questions[codeStepper - 1]}
            </h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2 ">
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center `}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Budapest
              </div>

              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Oslo
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Sverige
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  setChoice(answers[codeStepper - 1]);
                  handleCorrectChoice(e);
                }}
              >
                {answers[codeStepper - 1]}
              </div>
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer   ${
                choice === ""
                  ? "bg-gray-400 text-gray-700"
                  : "bg-primary text-white"
              }`}
              onClick={() => {
                if (choice !== "") {
                  handleVerify();
                }
              }}
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 5 && (
          <>
            <h1 className="text-4xl pt-5 text-center">
              {codeStepper + ": " + questions[codeStepper - 1]}
            </h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2 ">
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center `}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Nei
              </div>

              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Meh
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  setChoice(answers[codeStepper - 1]);
                  handleCorrectChoice(e);
                }}
              >
                {answers[codeStepper - 1]}
              </div>
              <div
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary flex justify-center items-center`}
                onClick={(e) => {
                  handleWrongChoice(e);
                }}
              >
                Njaaaa
              </div>
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer   ${
                choice === ""
                  ? "bg-gray-400 text-gray-700"
                  : "bg-primary text-white"
              }`}
              onClick={() => {
                if (choice !== "") {
                  handleVerify();
                }
              }}
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
