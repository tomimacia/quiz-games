import { Button, Flex, Heading, Progress, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Answer } from "../components/trivia/Answer";
import { Question } from "../components/trivia/Question";
import { getAnswerBg } from "../functions/getAnswerBg";
import { useFetch } from "../hooks/useFetch";
import { useTimer } from "../hooks/useTimer";
import { NotReady } from "../components/trivia/NotReady";
import Layout from "../components/Layout";
function Trivia() {
  const URL = "https://the-trivia-api.com/api/questions";
  const [selected, setSelected] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const { fetchedQuestions, loading, reFetch } = useFetch(URL);
  const [ready, setReady] = useState(false);
  const timer = useTimer(20, currentQuestion, questionAnswered, ready);
  const { question, shuffledAnswers, correctAnswer } =
    fetchedQuestions.length &&
    currentQuestion < 10 &&
    fetchedQuestions[currentQuestion];
  useEffect(() => {
    if (timer === 0 && currentQuestion < 10)
      setSelected(5), setQuestionAnswered(true);
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
    <Layout
      isTrivia
      title={"Trivia"}
      opacity={timer === 0 && currentQuestion < 10 && ready && 0.7}
    >
      {!ready && <NotReady callback={() => setReady(true)} />}
      {loading && ready && (
        <Progress bg="transparent" mt={10} colorScheme="blue" isIndeterminate />
      )}
      {!loading && ready && currentQuestion < 10 && (
        <Flex
          justify="flex-start"
          w={["100%", "100%", "100%", "940px"]}
          flexDir="column"
          pl={12}
        >
          <Heading
            p={5}
            placeSelf="center"
            color={timer <= 5 ? "red" : "black"}
          >
            {timer}
          </Heading>
          <Stack gap={3} minW="90%">
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
                className="nes-btn"
                bg="white"
              >
                Go next
              </Button>
            )}
          </Stack>
        </Flex>
      )}

      {currentQuestion === 10 && (
        <Flex flexDir="column" p={10} m={10}>
          <Text fontSize={17} fontWeight="bold" color="black">
            The End!
          </Text>
          <Text fontSize={17} fontWeight="bold" color="black">
            Answers correct: {questionsCorrect}
          </Text>
          <Button bg="white" mt={5} className="nes-btn" onClick={restart}>
            Play again
          </Button>
        </Flex>
      )}
    </Layout>
  );
}

export default Trivia;
