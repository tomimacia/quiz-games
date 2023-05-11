import { useEffect, useState } from "react";

export const useTimer = (
  startingTime,
  currentQuestion,
  questionAnswered,  
  ready
) => {
  const [timer, setTimer] = useState(startingTime);

  useEffect(() => {
    setTimer(startingTime);
  }, [currentQuestion]);

  useEffect(() => {
    if(ready){
      const customTimeout = setInterval(() => {
        if (questionAnswered) return;
        if (timer > 0) setTimer((prev) => prev - 1);
      }, 1000);    
      return () => clearInterval(customTimeout);
    }
    
  }, [timer, questionAnswered,ready]);

  return timer;
};
