import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, CardHeader, IconButton, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import he from 'he';
import { useState } from 'react';
import { GameReport } from '../services/gameService';


const useStyles = makeStyles((theme: Theme) => ({
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  accordionAnswer: {
    padding: '0.5rem',
    width: '100%',
    '&.correct': {
      background: theme.defaultGradient,
      color: theme.palette.primary.contrastText,
    },
    '&.selected:not(.correct)': {
      backgroundColor: theme.palette.error.light,
      color: theme.palette.error.contrastText,
    }
  },
}));

type GameReportCardProps = {
  gameReport: GameReport;
}

export default function GameReportCard({ gameReport }: GameReportCardProps) {
  const classes = useStyles();
  const { questionsData } = gameReport;
  const [accordionState, setAccordionState] = useState<boolean[]>(
      () => questionsData.map(() => false));

  function handleAccordion(index: number) {
    setAccordionState((old) => {
      const newState = [...old];
      newState[index] = !newState[index];
      return newState;
    });
  }

  function handleCollapseAll() {
    setAccordionState((old) => {
      return old.map(() => false);
    })
  }
  
  function handleExpandAll() {
    setAccordionState((old) => {
      return old.map(() => true);
    })
  }

  return (
    <Card id="report-card">
      <CardHeader
        disableTypography
        title={(
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h2">
              Game Report
            </Typography>
            <Button id="home-btn" variant="outlined" href="/">
              Home
            </Button>
          </Box>
        )}
        subheader={(
          <Box
            display="flex"
            justifyContent="space-between"
            marginTop="1rem"
            textAlign="center"
          >
            <Box width="100%">
              <Typography>Total Questions:</Typography>
              <Typography>{gameReport.totalQuestions}</Typography>
            </Box>
            <Box width="100%">
              <Typography>Correct Answers:</Typography>
              <Typography>{gameReport.correctAnswers}</Typography>
            </Box>
            <Box width="100%">
              <Typography>Inorrect Answers:</Typography>
              <Typography>{gameReport.incorrectAnswers}</Typography>
            </Box>
          </Box>
        )}
      />
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginBottom="0.5rem"
        >
          <Typography variant="h3">
            Questions:
          </Typography>
          <div>
            <IconButton
              onClick={handleCollapseAll}
              aria-label="Collapse all questions summarys"
            >
              <ExpandLessIcon />
            </IconButton>
            <IconButton
              onClick={handleExpandAll}
              aria-label="Expand all questions summarys"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
        </Box>
        {questionsData?.map((questionData, i) => {
          return (
            <Accordion
              role="question-report"
              key={questionData.question}
              expanded={accordionState[i]}
              onChange={() => handleAccordion(i)}
            >
              <AccordionSummary
                id={`questionReport${i+1}`}
                aria-controls={`questionReportContent${i+1}`}
                expandIcon={<ExpandMoreIcon />}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  {`${i+1}. ${he.decode(questionData.question)}`}
                  {questionData.selectedAnswer === questionData.correctAnswer && (
                    <CheckIcon />
                  )}
                </Box>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                {questionData.allAnswers.map((answer) => {
                  return (
                    <Paper key={answer} className={clsx({
                      [classes.accordionAnswer]: true,
                      'correct': answer === questionData.correctAnswer,
                      'selected': answer === questionData.selectedAnswer,
                    })}>
                      <Typography>
                        {he.decode(answer)}
                      </Typography>
                    </Paper>
                )})}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </CardContent>
    </Card>
  );
}