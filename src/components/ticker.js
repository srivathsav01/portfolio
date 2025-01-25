import React, { useState, useEffect } from "react";

const Ticker = ({ items, speed = 30 }) => {
  const alphabet = `0123456789`;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(items[0].toUpperCase());

  const fillArray = (arr, length) => {
    while (arr.length < length) arr.push(" ");
    return arr;
  };

  const startTicker = (prev, next) => {
    const prevArr = fillArray(prev.split(""), next.length);
    const nextArr = fillArray(next.split(""), prev.length);

    let intervalIds = [];
    let tempDisplay = [...prevArr];

    nextArr.forEach((char, i) => {
      if (char === prevArr[i]) return;

      let index = alphabet.indexOf(prevArr[i]);
      const intervalId = setInterval(() => {
        index = index === alphabet.length - 1 ? 0 : index + 1;
        tempDisplay[i] = alphabet[index];
        setDisplayText(tempDisplay.join(""));

        if (tempDisplay[i] === char) {
          clearInterval(intervalId);
        }
      }, speed);

      intervalIds.push(intervalId);
    });

    return () => {
      intervalIds.forEach((id) => clearInterval(id));
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      const prevText = displayText;
      const nextText = items[nextIndex];
      startTicker(prevText, nextText);
      setCurrentIndex(nextIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, displayText, items]);

  return (
    <div id="ticker" style={{ cursor: "pointer" }}>
      {displayText.split("").map((char, index) => (
        <span key={index}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </div>
  );
};

export default Ticker;
