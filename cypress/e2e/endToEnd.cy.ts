describe('E2E testing', () => {
  it('basic test', () => {
    cy.visitSite();
    cy.contains('REACT BOILER');
  });
});
