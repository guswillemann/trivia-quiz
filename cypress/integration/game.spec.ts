/// <reference types="cypress" />

import GameObject from '../pages/game.object';
import HomeObject from '../pages/home.object';
import ReportObject from '../pages/report.object';

describe('The game', () => {
  it('loop', () => {
    const questionAmount = 5;
    
    cy.intercept(`https://opentdb.com/api.php?amount=${questionAmount}`)
      .as('questionsData');

    const homePage = new HomeObject(cy, questionAmount);
    homePage
      .setQuestionsAmount()
      .clickContinue()
      .clickStart();
      
    cy.wait('@questionsData');
    const gamePage = new GameObject(cy);
    for (let i = 0 ; i < questionAmount - 1 ; i++) {
      gamePage
        .selectAnswer()
        .clickNext()
    };
    gamePage
      .selectAnswer()
      .clickFinish();

    const reportPage = new ReportObject(cy, questionAmount);
    reportPage
      .clickHome();
  });
});