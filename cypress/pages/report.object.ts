export default class ReportObject {
  cy: Cypress.cy & EventEmitter;

  constructor(cy: Cypress.cy & EventEmitter, questionAmount: number) {
    this.cy = cy;
    this.cy.url().should('include', '/report');
    this.cy.get('#logo').should('be.visible');
    this.cy.get('#report-card').should('be.visible');
    this.cy.get('div[role="question-report"]')
      .then(answers => {
        expect(answers.length, 'Number of reports').to.equal(questionAmount);
      });
  }

  clickHome() {
    this.cy.get('#report-card #home-btn').should('be.visible').click();
    this.cy.url().should('match', RegExp(`${Cypress.config().baseUrl}/`))
    return this;
  }
};
