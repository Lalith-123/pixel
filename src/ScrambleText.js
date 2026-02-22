import React, { useEffect, useState } from "react";

const ScrambleText = ({ text }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-1234567890";
    const speed = 15;
    const increment = 8;

    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";
    const clen = text.length;
    let i = clen * increment + 1;

    const rustle = () => {
      const nextFrame = () => {
        for (let j = 0; j < clen - stri; j++) {
          const num = Math.floor(theLetters.length * Math.random());
          const letter = theLetters.charAt(num);
          block += letter;
        }
        if (si === increment - 1) stri++;
        if (si === increment) {
          fixed += text.charAt(stri - 1);
          si = 0;
        }
        setOutput(fixed + block);
        block = "";
      };

      setTimeout(() => {
        if (--i) rustle();
        nextFrame();
        si++;
      }, speed);
    };

    rustle();
  }, [text]);

  return <div className="text-3xl md:text-4xl font-extrabold text-[#cab06f]" >{output}</div>;
};

export default ScrambleText;
