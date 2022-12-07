import react, { useContext } from "react";
import { useEffect, useState } from "react";
import alertContex from "../contex/alertContex";
export default function Alert() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState(false);
  const i = useContext(alertContex);
  const passFunc = (message) => {
    setMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };
  useEffect(() => {
    i.alertFunc(passFunc);
  }, []);
  return (
    <div
      className={`p-3 ${
        showAlert ? "-translate-y-1" : "-translate-y-24"
      } fixed duration-150 w-full top-0 z-30 flex justify-center`}
    >
      <div className="box z-30 bg-pink-600 mx-auto rounded-lg text-center  px-20 py-4 text-white font-semibold">
        {message}
      </div>
    </div>
  );
}
