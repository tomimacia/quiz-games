import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [fetchedQuestions, setFetchedQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchRef = useRef(true);
  useEffect(() => {
    if (fetchRef.current) {
      setLoading(true);
      fetchRef.current = false;
      console.log("FETCH");
      axios
        .get(url)
        .then((response) => {
          const newResponse = response.data.map((it) => {
            const { correctAnswer, incorrectAnswers } = it;
            const allAnswers = [...incorrectAnswers, correctAnswer];
            const shuffled = allAnswers.sort((a, b) => 0.5 - Math.random());
            it.shuffledAnswers = shuffled;
            return it;
          });
          setFetchedQuestions(newResponse);
        })
        .finally(() => setLoading(false));
    }
  }, [fetchRef.current]);
  const reFetch = () => {
    setFetchedQuestions([]);
    fetchRef.current = true;
  };
  return { fetchedQuestions, loading, reFetch };
};
