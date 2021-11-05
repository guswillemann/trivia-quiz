import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Slider,
  Theme,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { ChangeEvent, useState } from 'react';
import useQuestions from '../contexts/QuestionsContext';

const useStyle = makeStyles((theme: Theme) => ({
  quantitySlider: {
    flex: 1,
  },
  quantityInput: {
    width: 50,
  },
  confirmationOption: {
    width: '50%',
  },
  defautlGradientButton: {
    background: theme.defaultGradient,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      filter: 'brightness(0.85)',
    },
  },
}));

type FormStates = 'initial' | 'confirmation';

export default function GameSetupForm() {
  const { updateQuestions } = useQuestions();
  const theme = useTheme();
  const classes = useStyle(theme);
  const [formState, setFormState] = useState<FormStates>('initial');

  const [errorMessage, setErrorMessage] = useState('');

  const quantityForm = useFormik({
    initialValues: {
      quantity: 1,
    },
    onSubmit: async ({ quantity }) => {
      setErrorMessage('');
      updateQuestions(quantity, () => setErrorMessage('Failed to start the trivia game'))
    },
  });

  function handleSliderChange(_e: ChangeEvent<{}>, value: number | number[]) {
    quantityForm.handleChange({ target: { value, name: 'quantity' } })
  }

  function handleContinueClick() {
    setFormState('confirmation');
  }

  function handleCancelClick() {
    setErrorMessage('');
    setFormState('initial');
  }

  return (
    <Card id="setup-card">
      <CardContent
        component="form"
        onSubmit={quantityForm.handleSubmit}
      >
        {formState === 'confirmation' ? (
          <>
            <Typography id="info-question-amount">
              {`You have selected to answer ${quantityForm.values.quantity} Questions.`}
            </Typography>
            <Typography>
              Would you like to Start?
            </Typography>
            <Box display="flex" gridGap="1rem" marginTop="10px">
              <Button
                variant="outlined"
                className={classes.confirmationOption}
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                className={clsx([
                  classes.confirmationOption,
                  classes.defautlGradientButton,
                ])}
              >
                Start
              </Button>
            </Box>
            {errorMessage && (
              <Typography color="error">
                {errorMessage}
              </Typography>
            )}
          </>

        ) : (

          <>
            <Typography variant="body1">
              How many questions would you like to answer?
            </Typography>
            <Grid container spacing={2}>
              <Grid item className={classes.quantitySlider}>
                <Slider
                  value={Number(quantityForm.values.quantity)}
                  min={1}
                  max={50}
                  onChange={handleSliderChange}
                  color="secondary"
                />
              </Grid>
              <Grid item className={classes.quantityInput}>
                <Input
                  type="number"
                  name="quantity"
                  value={quantityForm.values.quantity}
                  onChange={quantityForm.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              name="continue"
              variant="contained"
              className={classes.defautlGradientButton}
              fullWidth
              onClick={handleContinueClick}
            >
              Continue
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
