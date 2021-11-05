import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { gameService, Question } from '../services/gameService';

type QuestionContextValues = {
  questionsData: Question[];
  updateQuestions: (quantity: number, errorAction: () => void) => void;
  updateAnswerStatus: (answer: string, questionIndex: number) => void;
  clearQuestions: () => void;
}

const QuestionsContext = createContext({} as QuestionContextValues);

type QuestionsProviderProps = {
  children: ReactNode;
}

export function QuestionsProvider({ children }: QuestionsProviderProps) {
  const router = useRouter();
  
  const [questionsData, setQuestionsData] = useState([] as Question[]);

  useEffect(() => {
    const savedGame = gameService.getSave();
    setQuestionsData(savedGame);
  }, [])
  
  useEffect(() => {
    if (questionsData.length === 0) return;
    gameService.save(questionsData);
  }, [questionsData])

  async function updateQuestions(quantity: number, errorAction: () => void) {
    try {
      const questions = await gameService.getQuestions(quantity);
      setQuestionsData(questions);
      router.push('/game');
    } catch {
      errorAction();
    }
  }

  function updateAnswerStatus(answer: string, questionIndex: number) {
    setQuestionsData(old => {
      const newData = [...old];
      newData[questionIndex].isAnswered = true;
      newData[questionIndex].selectedAnswer = answer;
      return newData;
    })
  }

  function clearQuestions() {
    setQuestionsData([]);
  }

  return (
    <QuestionsContext.Provider value={{
      questionsData,
      updateQuestions,
      updateAnswerStatus,
      clearQuestions,
    }}>
      {children}
    </QuestionsContext.Provider>
  );
}

export default function useQuestions() {
  return useContext(QuestionsContext);
}