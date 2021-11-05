import { Box, Button, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/dist/client/router';
import { ReactNode, useEffect, useState } from 'react';
import { GameReport, gameService } from '../services/gameService';

const useStyles = makeStyles({
  gameHistoryItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
});

type GamesListProps = {
  history: GameReport[];
};

function GamesList({ history }: GamesListProps) {
  const classes = useStyles();
  const router = useRouter();
  
  function handleViewReport(index: number) {
    router.push({ pathname: '/report', query: { game: index + 1 } })
  }

  return (
    <List>
      {history.length > 0
        ? (history.map((game, i) => (
            <ListItem
              key={`gameReport ${i}`}
              className={classes.gameHistoryItem}
              divider
            >
              <Typography>
                Questions: {game.totalQuestions}
              </Typography>
              <Typography>
                Correct: {game.correctAnswers}
              </Typography>
              <Typography>
                Incorrect: {game.incorrectAnswers}
              </Typography>
              <Button onClick={() => handleViewReport(i)}>
                View
              </Button>
            </ListItem>
          )).reverse()
        ) : (
          <ListItem>
            There's no game report.
          </ListItem>
        )}
    </List>
  );
}

export default function GameHistory() {
  const [gameHistory, setGameHistory] = useState<ReactNode>();

  useEffect(() => {
    const history = gameService.getHistory();
    setGameHistory(<GamesList history={history} />);
  }, []);

  return (
    <Box>
      <Typography variant="h2">
        Game Reports:
      </Typography>
      {gameHistory}
    </Box>
  );
}
