import { use, useEffect, useState } from "react";
import loadingSpinner from "./loadingSpinner.component";

export default function Codes({
  setStepper,
}: {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [codeStepper, setCodeStepper] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const firstCodeAnswer = "Maihaugen";
  const [firstCode, setFirstCode] = useState("");
  const [showFirstHint, setShowFirstHint] = useState(false);
  const firstCodeHint = "Hint: Lokasjon";

  const secondCodeAnswer = "Kirke";
  const [secondCode, setSecondCode] = useState("");
  const [showSecondHint, setShowSecondHint] = useState(false);
  const secondCodeHint = "Hint: Veldig høy bygning";

  const thirdCodeAnswer = "Krakow";
  const [thirdCode, setThirdCode] = useState("");
  const [showThirdHint, setShowThirdHint] = useState(false);
  const thirdCodeHint = "Hint: Se på bildet";

  const fourthCodeAnswer = "05.08";
  const [fourthCode, setFourthCode] = useState("");
  const [showFourthHint, setShowFourthHint] = useState(false);
  const fourthCodeHint = "Hint: Dato";

  const fifthCodeAnswer = "Vingrom";
  const [fifthCode, setFifthCode] = useState("");
  const [showFifthHint, setShowFifthHint] = useState(false);
  const fifthCodeHint = "Hint: Sex";

  const sixthCodeAnswer = "Høyskolen";
  const [sixthCode, setSixthCode] = useState("");
  const [showSixthHint, setShowSixthHint] = useState(false);
  const sixthCodeHint = "Hint: Bachelor";

  const seventhCodeAnswer = "Lillehammer";
  const [seventhCode, setSeventhCode] = useState("");
  const [showSeventhHint, setShowSeventhHint] = useState(false);
  const seventhCodeHint = "Hint: Bynavn";

  const eigthCodeAnswer = "Mojito";
  const [eigthCode, setEigthCode] = useState("");
  const [showEigthHint, setShowEigthHint] = useState(false);
  const eigthCodeHint = "Hint: Chłopczyk";

  const handleCheckCode = (
    code: string,
    input: string,
    setCode: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (code.toLowerCase() === input.toLowerCase()) {
      setCodeStepper(codeStepper + 1);
      resetCountdown();
    } else {
      setCode("");
    }
  };

  if (codeStepper === 9) {
    setStepper(2);
  }

  const resetCountdown = () => {
    setCountdown(30);
    setShowHelp(false);
  };

  useEffect(() => {
    resetCountdown(); // Reset countdown whenever codeStepper changes
  }, [codeStepper]);

  useEffect(() => {
    const handleCountdown = () => {
      if (countdown === 0 && !showHelp) {
        setShowHelp(true);
        setCountdown(30);
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/codes.jpeg")`,
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
                }, 30000);
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
            <h1 className="text-4xl pt-5 text-center">KODE {codeStepper}</h1>
            <p className="text-xl text-center">
              Sted i lillehammer som har en måned i navnet
            </p>

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
            <h1 className="text-4xl pt-5 text-center">KODE {codeStepper}</h1>
            <p className="text-xl text-center">Bygning i nærheten</p>

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
            <h1 className="text-4xl pt-5 text-center">KODE {codeStepper}</h1>
            <p className="text-xl text-center">Svaret er på skjermen</p>

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
            <h1 className="text-4xl pt-5 text-center">KODE {codeStepper}</h1>
            <p className="text-xl text-center">
              Jeg fikk ikke sove, vekte deg flere ganger for å si noe viktig
            </p>

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
        {codeStepper === 5 && (
          <>
            <h1 className="text-4xl pt-5 text-center">KODE {codeStepper}</h1>
            <p className="text-xl text-center">
              Der jeg fant ut at jeg elsket deg
            </p>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2">
              <div
                className={`${showHelp ? "opacity-100" : "opacity-60"}`}
                onClick={showHelp ? () => setShowFifthHint(true) : () => null}
              >
                {showFifthHint ? fifthCodeHint : "Hint?"}
                {!showHelp ? ` Låses opp om ${countdown} sekunder` : ""}
              </div>
              <input
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary`}
                value={fifthCode}
                onChange={(e) => setFifthCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCheckCode(fifthCodeAnswer, fifthCode, setFifthCode);
                  }
                }}
              />
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() =>
                handleCheckCode(fifthCodeAnswer, fifthCode, setFifthCode)
              }
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}

        {codeStepper === 6 && (
          <>
            <h1 className="text-4xl pt-5 text-center">KODE {codeStepper}</h1>
            <p className="text-xl text-center">
              Starter på effekten av et drug, vi har vært der flere ganger
              sammen
            </p>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2">
              <div
                className={`${showHelp ? "opacity-100" : "opacity-60"}`}
                onClick={showHelp ? () => setShowSixthHint(true) : () => null}
              >
                {showSixthHint ? sixthCodeHint : "Hint?"}
                {!showHelp ? ` Låses opp om ${countdown} sekunder` : ""}
              </div>
              <input
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary`}
                value={sixthCode}
                onChange={(e) => setSixthCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCheckCode(sixthCodeAnswer, sixthCode, setSixthCode);
                  }
                }}
              />
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() =>
                handleCheckCode(sixthCodeAnswer, sixthCode, setSixthCode)
              }
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 7 && (
          <>
            <h1 className="text-4xl pt-5 text-center">KODE {codeStepper}</h1>
            <p className="text-xl text-center">
              Hva trenger man til en liten spiker?
            </p>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2">
              <div
                className={`${showHelp ? "opacity-100" : "opacity-60"}`}
                onClick={showHelp ? () => setShowSeventhHint(true) : () => null}
              >
                {showSeventhHint ? seventhCodeHint : "Hint?"}
                {!showHelp ? ` Låses opp om ${countdown} sekunder` : ""}
              </div>
              <input
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary`}
                value={seventhCode}
                onChange={(e) => setSeventhCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCheckCode(
                      seventhCodeAnswer,
                      seventhCode,
                      setSeventhCode
                    );
                  }
                }}
              />
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() =>
                handleCheckCode(seventhCodeAnswer, seventhCode, setSeventhCode)
              }
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper === 8 && (
          <>
            <h1 className="text-4xl pt-5 text-center">KODE {codeStepper}</h1>
            <p className="text-xl text-center">
              Voff voff drink
            </p>

            <div className="flex flex-col gap-2 absolute bottom-48 mx-auto left-1/2 transform -translate-x-1/2">
              <div
                className={`${showHelp ? "opacity-100" : "opacity-60"}`}
                onClick={showHelp ? () => setShowEigthHint(true) : () => null}
              >
                {showEigthHint ? eigthCodeHint : "Hint?"}
                {!showHelp ? ` Låses opp om ${countdown} sekunder` : ""}
              </div>
              <input
                className={`w-[60vw] h-14 text-xl  rounded  cursor-pointer bg-white text-primary px-3 border-2 border-primary`}
                value={eigthCode}
                onChange={(e) => setEigthCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCheckCode(eigthCodeAnswer, eigthCode, setEigthCode);
                  }
                }}
              />
            </div>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() =>
                handleCheckCode(eigthCodeAnswer, eigthCode, setEigthCode)
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
