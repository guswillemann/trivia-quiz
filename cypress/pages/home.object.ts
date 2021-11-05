export default class HomeObject {
  cy: Cypress.cy & EventEmitter;
  questionsAmount: string;

  constructor(cy: Cypress.cy & EventEmitter, questionsAmount: number) {
    this.questionsAmount = questionsAmount.toString();
    
    this.cy = cy;
    this.cy.visit('/');
    this.cy.get('#logo').should('be.visible');
    this.cy.get('#setup-card').should('be.visible');
    this.cy.get('#extra-options-card').should('be.visible');
  }

  setQuestionsAmount() {
    const amountNumberInput = this.cy.get('input[name="quantity"]');
    amountNumberInput
      .type('{backspace}' + this.questionsAmount)
      .invoke('val')
      .then(inputVal => expect(inputVal, 'Typed number').to.equal(this.questionsAmount));
    
    return this;
  }

  clickContinue() {
    this.cy.get('button[name="continue"]').click();
    
    const textInfo = this.questionsAmount;

    this.cy.get('#info-question-amount')
      .invoke('text')
      .then(text => expect(text.match(textInfo)).to.not.equal(null));
    
    this.cy.get('button[type="submit"]').should('be.visible');

    return this;
  }

  clickStart() {
    this.cy.get('button[type="submit"]').should('be.visible').click();
    
    return this;
  }
}