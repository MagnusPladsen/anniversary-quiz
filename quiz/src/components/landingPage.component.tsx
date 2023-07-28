import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import loadingSpinner from "./loadingSpinner.component";

export default function LandingPage({
  setStepper,
}: {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Lås opp");
  const [approved, setApproved] = useState(false);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setApproved(true);
    }, 1500);
    setApproved(false);
    setTimeout(() => {
      setStepper(1);
    }, 2500);
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/landing.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      className="h-full w-full relative text-white"
    >
      <AnimatePresence inital="false">
        {loading && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
              hidden: { opacity: 0, y: -300 },
            }}
            transition={{ duration: 0.7 }}
            className="left-[32%] transform -translate-x-[60%] rounded-xl fixed bg-gray-800 h-[20vh] w-[35vw] flex items-end justify-center -top-10"
          >
            <Image
              src={!approved ? "/faceId.svg" : "/faceIdApproved.svg"}
              height={"60"}
              width={"60"}
              alt="Mock of FaceID"
              className="pb-7"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-[80vw] mx-auto  flex flex-col gap-5">
        <h1 className="text-4xl pt-5 text-center">1 ÅR SAMMEN</h1>
        <p className="text-xl">
          Denne siden kan kun låses opp av min TRUE LOVE
        </p>
        <p className="text-xl">Start med å verifisere FACEID</p>
        <p className="text-xl">
          Deretter skriv inn riktige koder og svar riktig på alle spørsmålene i
          QUIZen
        </p>
      </div>
      <div
        className={`w-[60vw] h-14 text-xl absolute bottom-28 mx-auto rounded left-1/2 transform -translate-x-1/2 cursor-pointer bg-primary text-white`}
        onClick={handleStart}
      >
        <div className="flex justify-center items-center h-full">
          {loading ? loadingSpinner() : buttonText}
        </div>
      </div>
    </div>
  );
}
