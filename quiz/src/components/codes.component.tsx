import { use, useEffect, useState } from "react";
import loadingSpinner from "./loadingSpinner.component";

export default function Codes({
  setStepper,
}: {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [codeStepper, setCodeStepper] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const firstCodeAnswer = "Maihaugen";
  const [firstCode, setFirstCode] = useState("");
  const [showFirstHint, setShowFirstHint] = useState(false);
  const firstCodeHint = "Hint: Lokasjon";

  const secondCodeAnswer = "Kirke";
  const [secondCode, setSecondCode] = useState("");
  const [showSecondHint, setShowSecondHint] = useState(false);
  const secondCodeHint = "Hint: Se etter en høy bygning";

  const thirdCodeAnswer = "Krakow";
  const [thirdCode, setThirdCode] = useState("");
  const [showThirdHint, setShowThirdHint] = useState(false);
  const thirdCodeHint = "Hint: Se på bildet";

  const fourthCodeAnswer = "05.08";
  const [fourthCode, setFourthCode] = useState("");
  const [showFourthHint, setShowFourthHint] = useState(false);
  const fourthCodeHint = "Hint: Dato";

  const handleCheckCode = (
    code: string,
    input: string,
    setCode: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (code.toLowerCase() === input.toLowerCase()) {
      setCodeStepper(codeStepper + 1);
      resetCountdown();
      /* setTimeout(() => {
            setShowHelp(true);
        }, 10000); */
    } else {
      setCode("");
    }
  };

  if (codeStepper === 5) {
    setStepper(2);
  }

  const resetCountdown = () => {
    setCountdown(10);
    setShowHelp(false);
  };

  useEffect(() => {
    resetCountdown(); // Reset countdown whenever codeStepper changes
  }, [codeStepper]);

  useEffect(() => {
    const handleCountdown = () => {
      if (countdown === 0 && !showHelp) {
        setShowHelp(true);
        setCountdown(10);
      } else {
        setCountdown(countdown - 1);
      }
    };
    const interval = setInterval(() => {
      handleCountdown();
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown, showHelp]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/codes.jpg")`,
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
            <h1 className="text-4xl pt-5 text-center">LÅS OPP KODENE</h1>
            <p className="text-xl text-center">
              Dette er andre steg i verifiseringen. Du må nå låse opp kodene for
              å komme videre.
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
            <h1 className="text-4xl pt-5 text-center">KODE 1</h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2">
              <div
                className={`${showHelp ? "opacity-100" : "opacity-60"}`}
                onClick={showHelp ? () => setShowFirstHint(true) : () => null}
              >
                {showFirstHint ? firstCodeHint : "Hint?"}
                {!showHelp ? ` Låses opp om ${countdown} sekunder` : ""}
              </div>
              <input
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary`}
                value={firstCode}
                onChange={(e) => setFirstCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCheckCode(firstCodeAnswer, firstCode, setFirstCode);
                  }
                }}
              />
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() =>
                handleCheckCode(firstCodeAnswer, firstCode, setFirstCode)
              }
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 2 && (
          <>
            <h1 className="text-4xl pt-5 text-center">KODE 2</h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2">
              <div
                className={`${showHelp ? "opacity-100" : "opacity-60"}`}
                onClick={showHelp ? () => setShowSecondHint(true) : () => null}
              >
                {showSecondHint ? secondCodeHint : "Hint?"}
                {!showHelp ? ` Låses opp om ${countdown} sekunder` : ""}
              </div>
              <input
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary`}
                value={secondCode}
                onChange={(e) => setSecondCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCheckCode(
                      secondCodeAnswer,
                      secondCode,
                      setSecondCode
                    );
                  }
                }}
              />
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() =>
                handleCheckCode(secondCodeAnswer, secondCode, setSecondCode)
              }
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 3 && (
          <>
            <h1 className="text-4xl pt-5 text-center">KODE 3</h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2">
              <div
                className={`${showHelp ? "opacity-100" : "opacity-60"}`}
                onClick={showHelp ? () => setShowThirdHint(true) : () => null}
              >
                {showThirdHint ? thirdCodeHint : "Hint?"}
                {!showHelp ? ` Låses opp om ${countdown} sekunder` : ""}
              </div>
              <input
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary`}
                value={thirdCode}
                onChange={(e) => setThirdCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCheckCode(thirdCodeAnswer, thirdCode, setThirdCode);
                  }
                }}
              />
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() =>
                handleCheckCode(thirdCodeAnswer, thirdCode, setThirdCode)
              }
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 4 && (
          <>
            <h1 className="text-4xl pt-5 text-center">KODE 4</h1>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2">
              <div
                className={`${showHelp ? "opacity-100" : "opacity-60"}`}
                onClick={showHelp ? () => setShowFourthHint(true) : () => null}
              >
                {showFourthHint ? fourthCodeHint : "Hint?"}
                {!showHelp ? ` Låses opp om ${countdown} sekunder` : ""}
              </div>
              <input
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary`}
                value={fourthCode}
                onChange={(e) => setFourthCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCheckCode(
                      fourthCodeAnswer,
                      fourthCode,
                      setFourthCode
                    );
                  }
                }}
              />
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() =>
                handleCheckCode(fourthCodeAnswer, fourthCode, setFourthCode)
              }
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
