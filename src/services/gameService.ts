import axios from 'axios';
import { ArrayShuffler } from '../utils/ArrayShuffler';

type ResponseQuestion = {
  "category": string;
  "type": string;
  "difficulty": string;
  "question": string;
  "correct_answer": string;
  "incorrect_answers": string[];
  "allAnswers": string[];
};

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  allAnswers: string[];
  isAnswered: boolean;
  selectedAnswer: string;
};

export type GameReport = {
  questionsData: Question[];
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
};

export type GameService = {
  generateGameReport: (questionsData: Question[]) => GameReport;
  getQuestions: (quantity: number) => Promise<Question[]>;
  save: (questionData: Question[]) => void;
  getSave: () => Question[];
  getHistory: () => GameReport[];
  finish: (questionsData: Question[]) => number;
  getReport: (number: number) => GameReport;
};

export const QUESTIONS_API_URL = 'https://opentdb.com/api.php?amount=';

export const gameService: GameService = {
  generateGameReport: (questionsData) => {
    const totalQuestions = questionsData.length;
    const correctAnswers = questionsData.filter(
      ({ selectedAnswer, correctAnswer }) => selectedAnswer === correctAnswer).length;
    const incorrectAnswers = totalQuestions - correctAnswers;
  
    return {
      questionsData,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
    };
  },
  
  getQuestions: async (quantity) => {
    const response = await axios.get(`${QUESTIONS_API_URL}${quantity}`);
    const questionsData = response.data.results.map((questionData: ResponseQuestion) => {
      return {
        category: questionData.category,
        type: questionData.type,
        difficulty: questionData.difficulty,
        question: questionData.question,
        correctAnswer: questionData.correct_answer,
        incorrectAnswers: questionData.incorrect_answers,
        allAnswers: questionData.type === 'multiple'
          ? ArrayShuffler([...questionData.incorrect_answers, questionData.correct_answer])
          : ['True', 'False'],
        isAnswered: false,
        selectedAnswer: '',
      };
    })

    return questionsData;
  },
  
  save: (questionsData) => {
    localStorage.setItem('savedGame', JSON.stringify(questionsData));
  },

  getSave: () => {
    const savedGameString = localStorage.getItem('savedGame');
    return savedGameString
      ? JSON.parse(savedGameString)
      : [];
  },
  
  getHistory: () => {
    const gameHistoryString = localStorage.getItem('gameHistory');
    if (!gameHistoryString) return [];
    return JSON.parse(gameHistoryString);
  },
  
  finish: (questionsData: Question[]) => {
    const gameHistory = gameService.getHistory();
    const gameReport = gameService.generateGameReport(questionsData);
    const newGameHistory = [...gameHistory, gameReport];
    localStorage.setItem('gameHistory', JSON.stringify(newGameHistory));
    localStorage.removeItem('savedGame');
    return newGameHistory.length;
  },
  
  getReport: (number: number, gameServiceModule = gameService) => {
    const gameHistory = gameServiceModule.getHistory();
    return gameHistory[number - 1];
  },
};
