import { Box, Button, ButtonGroup, Card, CardContent, makeStyles, Theme, Typography } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import QuestionCard from '../src/components/QuestionCard';
import useQuestions from '../src/contexts/QuestionsContext';
import { gameService } from '../src/services/gameService';

const useStyles = makeStyles((theme: Theme) => ({
  counterBar: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    textAlign: 'center',
    marginTop: '1rem',
    [theme.breakpoints.up(400)]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  },
}));

export default function GamePage() {
  const router = useRouter();
  const classes = useStyles();
  const { questionsData, updateAnswerStatus, clearQuestions } = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const currentQuestionData = questionsData[currentQuestion - 1];
  const isFirstQuestion = currentQuestion === 1;
  const isLastQuestion = currentQuestion === questionsData.length;
  const answeredQuestions = questionsData.filter((questionData) => questionData.isAnswered).length;
  const correctAnswers = questionsData.filter((questionData) => questionData.selectedAnswer === questionData.correctAnswer).length;
  const isAllAnswered = answeredQuestions === questionsData.length;

  function handleAnswerClick(answer: string) {
    updateAnswerStatus(answer, currentQuestion - 1);
  }

  function handleFinishGame() {
    const lastGameReport = gameService.finish(questionsData);
    router.push({ pathname: '/report', query: { game: lastGameReport } })
    clearQuestions();
  }

  function handlePreviousQuestion() {
    setCurrentQuestion(old => isFirstQuestion ? 1 : old - 1);
  }

  function handleNextQuestion() {
    setCurrentQuestion(old => isLastQuestion ? questionsData.length : old + 1)
  }

  return (
    <>
      <QuestionCard
        answerClickCallBack={handleAnswerClick}
        questionData={currentQuestionData}
      />
      <Box marginTop="1rem">
        <Card id="stats-card">
          <CardContent>
            <div className={classes.counterBar}>
              <Box width="100%">
                <Typography>Total:</Typography>
                <Typography>{questionsData.length}</Typography>
              </Box>
              <Box width="100%">
                <Typography>Current:</Typography>
                <Typography>{currentQuestion}</Typography>
              </Box>
              <Box width="100%">
                <Typography>Answered:</Typography>
                <Typography>{answeredQuestions}</Typography>
              </Box>
              <Box width="100%">
                <Typography>Correct:</Typography>
                <Typography>{correctAnswers}</Typography>
              </Box>
            </div>
            <ButtonGroup fullWidth>
              <Button
                onClick={handlePreviousQuestion}
                disabled={isFirstQuestion}
              >
                Prev
              </Button>
              {isLastQuestion ? (
                  <Button
                    name="finish"
                    color='primary'
                    variant='contained'
                    onClick={handleFinishGame}
                    disabled={!isAllAnswered}
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                    name="next"
                    color='default'
                    variant='outlined'
                    onClick={handleNextQuestion}
                  >
                    Next
                  </Button>
              )}
            </ButtonGroup>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
