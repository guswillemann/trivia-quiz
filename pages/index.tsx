import {
  Box, Button, Card, CardContent, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import GameHistory from '../src/components/GameHistory';
import GameSetupForm from '../src/components/GameSetupForm';
import useQuestions from '../src/contexts/QuestionsContext';

const useStyles = makeStyles({
  gridContainer: {
    display: 'grid',
    gridTemplateRows: '15rem 1fr',
    justifyItems: 'center',
    alignItems: 'center',
  },
  savedGame: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    marginBottom: '1rem',
  },
})

export default function Home() {
  const classes = useStyles();
  const { questionsData } = useQuestions();
  const router = useRouter();

  function handleLoadClick() {
    router.push('/game');
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gridGap="1rem"
    >
      <GameSetupForm />

      <Card id="extra-options-card">
        <CardContent>
          {questionsData.length > 0 && 
            <>
              <Typography variant="h2">
                Saved game:
              </Typography>
              <Box className={classes.savedGame}>
                <Typography>
                  You have a saved game. Would you like to load it?
                </Typography>
                <Button onClick={handleLoadClick}>Load</Button>
              </Box>
            </>
          }
          <GameHistory />
        </CardContent>
      </Card>
    </Box>
  );
}
