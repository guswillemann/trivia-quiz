import { Button, Card, CardActions, CardContent, CardHeader, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import he from 'he';
import { Question } from '../services/gameService';

const useStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    display: 'grid',
    gridTemplateRows: '15rem 1fr',
    justifyItems: 'center',
    alignItems: 'center',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  correctAnswer: {
    '&.MuiButtonBase-root:disabled': {
      background: theme.defaultGradient,
      color: theme.palette.primary.contrastText,
    },
  },
  incorrectAnswer: {
    '&.MuiButtonBase-root:disabled': {
      background: theme.palette.error.light,
      color: theme.palette.error.contrastText,
    }
  },
  difficultyText: {
    textAlign: 'end',
  },
}));

type QuestionCardProps = {
  questionData: Question;
  answerClickCallBack: (answer: string) => void;
}

export default function QuestionCard({ questionData, answerClickCallBack }: QuestionCardProps) {
  const classes = useStyles();

  return (
    <Card id="question-card">
        <CardHeader
          titleTypographyProps={{ variant: 'h2' }}
          title={he.decode(questionData?.question || '')}
        />
        <CardContent>
          <Typography variant="subtitle1" className={classes.difficultyText}>
            {`Difficulty: ${questionData?.difficulty}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          {questionData?.allAnswers.map((answer) => (
            <Button
              key={answer}
              name="answer"
              className={clsx({
                [classes.correctAnswer]: answer === questionData?.correctAnswer && questionData?.isAnswered,
                [classes.incorrectAnswer]: answer !== questionData?.correctAnswer && answer === questionData?.selectedAnswer,
              })}
              fullWidth
              onClick={() => answerClickCallBack(answer)}
              disabled={questionData?.isAnswered}
            >
              {he.decode(answer)}
            </Button>
          ))}
        </CardActions>
      </Card>
  );
}
