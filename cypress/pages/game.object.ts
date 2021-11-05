export default class GameObject {
  cy: Cypress.cy & EventEmitter;

  constructor(cy: Cypress.cy & EventEmitter) {
    this.cy = cy;
    this.cy.url().should('include', '/game');
    this.cy.get('#logo').should('be.visible');
    this.cy.get('#question-card').should('be.visible');
    this.cy.get('#stats-card').should('be.visible');
  }

  clickNext() {
    this.cy.get('button[name="finish"]').should('not.exist');
    this.cy.get('button[name="next"]').should('be.visible').click();
    return this;
  }
  
  selectAnswer() {
    this.cy.get('button[name="answer"]')
      .then(answers => {
        expect(answers.length === 2 || answers.length === 4, 'Number of answer options').to.equal(true);
        return answers[0];
      }).click();

    return this;
  }

  clickFinish() {
    this.cy.get('button[name="next"]').should('not.exist');
    this.cy.get('button[name="finish"]').should('be.visible').click();
    
    return this;
  }
}