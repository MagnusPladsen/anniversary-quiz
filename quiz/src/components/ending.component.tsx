import { use, useEffect, useState } from "react";
import loadingSpinner from "./loadingSpinner.component";

export default function Ending({
  setStepper,
}: {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [codeStepper, setCodeStepper] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const messages = [
    "1 ÅR SOM KJÆRESTER...",
    "JEG ELSKER DEG MER FOR HVER DAG SOM GÅR...",
    "DU ER DET BESTE SOM HAR NOEN GANG SKJEDD MEG NOEN GANG...",
    "DU ER DEN FINESTE OG VAKRESTE I HELE UNIVERSET...",
    "JEG ER VERDENS HELDIGSTE SOM HAR DEG I LIVET MITT...",
    "TUSEN TAKK FOR AT DU ER DEN DU ER...",
    "JEG GLEDER MEG MASSE TIL MANGE FLERE ÅR SAMMEN...",
  ];

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/ending.jpeg")`,
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
            <h1 className="text-4xl pt-5 text-center">VERIFISERING FULLFØRT</h1>
            <p className="text-xl text-center">
              Du har bevist at du er Patrycja, min kjære. Tusen takk for at du
              alltid er så fantastisk.
            </p>
            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() => {
                setCodeStepper(codeStepper + 1);
              }}
            >
              <div className="flex justify-center items-center h-full">
                Neste
              </div>
            </div>
          </>
        )}
        {codeStepper > 0 && (
          <>
            <h1 className="text-4xl pt-5 text-center">
              {messages[codeStepper - 1]}
            </h1>

            <div
              className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
              onClick={() => {
                setCodeStepper(codeStepper + 1);
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
