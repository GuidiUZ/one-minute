import { useState } from 'react';
import down from '../assets/down-arrow.svg';

// eslint-disable-next-line react/prop-types
export default function Accordion({ question, answer }) {
  const [acorddion, setAcorddion] = useState(false);

  const handleAcorddion = () => {
    setAcorddion(!acorddion);
  };

  return (
    <div
      onClick={handleAcorddion}
      className="cursor-pointer border rounded-lg border-white p-2 select-none"
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-white text-xl font-bold">{question}</h1>
        {acorddion ? (
          <img
            className="w-10 h-10 rotate-180 duration-300"
            src={down}
            alt=""
          />
        ) : (
          <img className="w-10 h-10" src={down} alt="" />
        )}
      </div>

      <p
        className={`text-white text-lg mt-5 border-white ${
          acorddion ? 'block' : 'hidden'
        }`}
      >
        {answer}
      </p>
    </div>
  );
}
