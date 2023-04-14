import {
  Button,
  Flex,
  Heading,
  Progress,
  Stack
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Answer } from "../components/trivia/answer";
import { Question } from "../components/trivia/question";
import { getAnswerBg } from "../functions/getAnswerBg";
import { useFetch } from "../hooks/useFetch";
import { useTimer } from "../hooks/useTimer";
import { NotReady } from "../components/trivia/notReady";

function trivia() {
  const url = "https://the-trivia-api.com/api/questions";
  const [selected, setSelected] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const { fetchedQuestions, loading, reFetch } = useFetch(url);
  const [ready, setReady] = useState(false);  
  const timer = useTimer(20, currentQuestion, questionAnswered);
  const { question, shuffledAnswers, correctAnswer } =
    fetchedQuestions.length &&
    currentQuestion < 10 &&
    fetchedQuestions[currentQuestion];
  useEffect(() => {
    if (timer === 0 && currentQuestion < 10) setSelected(5), setQuestionAnswered(true);
  }, [timer]);
  const restart = () => {
    reFetch();
    setCurrentQuestion(0);
    setQuestionsCorrect(0);
  };  
  const handleAnswer = (a, i) => {
    if (questionAnswered) return;
    setSelected(i);
    setQuestionAnswered(true);
    if (a === correctAnswer) {
      setQuestionsCorrect(questionsCorrect + 1);
    }
  };
  const handleNext = () => {
    setQuestionAnswered(false);
    setSelected(0);
    setCurrentQuestion((prev) => prev + 1);
  };
  
  return (
    <Flex
      p={10}
      align="center"
      minH="100vh"
      background="yellow.300"
      flexDir="column"
      opacity={(timer === 0 && currentQuestion < 10 && ready) && 0.7}
    >
      <Flex flexDir="column">
        <Heading mb={5}>Trivia game!</Heading>
        <Link href="/">Back home</Link>
      </Flex>
      {!ready && (
        <NotReady callback={()=>setReady(true)}/>
      )}
      {loading && ready && (
        <Progress bg="transparent" mt={10} colorScheme="blue" isIndeterminate />
      )}
      {!loading && ready && currentQuestion < 10 && (
        <Flex flexDir="column" ml={12} p={10}>
          <Heading
            p={5}
            placeSelf="center"
            color={timer <= 5 && "red"}
          >
            {timer}
          </Heading>
          <Stack>
            {fetchedQuestions.length && (
              <Question question={question}>
                {shuffledAnswers.map((q, i) => {
                  return (
                    <Answer
                      key={i}
                      correctAnswer={correctAnswer}
                      questionAnswered={questionAnswered}
                      clickAnswer={() => handleAnswer(q, i)}
                      answerBg={getAnswerBg(
                        correctAnswer,
                        selected,
                        questionAnswered,
                        q,
                        i
                      )}
                      a={q}
                    />
                  );
                })}
              </Question>
            )}
            {questionAnswered && (
              <Button
                onClick={handleNext}
                placeSelf="center"
                w="50%"
                className="nes-btn"
              >
                Go next
              </Button>
            )}
          </Stack>
        </Flex>
      )}

      {currentQuestion === 10 && (
        <Flex flexDir="column" align="center" p={10} m={10}>
          <Heading>The End!</Heading>
          <Heading>Anserwers correct: {questionsCorrect}</Heading>
          <Button mt={5} className="nes-btn" onClick={restart}>
            Play again
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

export default trivia;
