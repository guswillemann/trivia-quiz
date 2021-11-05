import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import GameReportCard from '../src/components/GameReportCard';
import { GameReport, gameService } from '../src/services/gameService';

export default function ReportPage() {
  const router = useRouter();
  const gameNumber = Number(router.query.game);
  const [gameReport, setGameReport] = useState({} as GameReport);
  
  useEffect(() => {
    const report = gameService.getReport(gameNumber);
    setGameReport(report);
  }, [gameNumber]);

  function handleBackClick() {
    router.push('/');
  }

  return (
    <>
      {gameReport?.questionsData ? (
        <GameReportCard gameReport={gameReport} />
      ) : (
        <Card>
          <CardContent>
            <Typography>
              Game report not found
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={handleBackClick}
              variant="contained"
              color="primary"
              fullWidth
            >
              Return to menu
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}
