class confirmationPage {
    verifySuccessMessage() {
      cy.contains('.complete-header', 'Thank you for your order!').should('be.visible');
    }
  }
  
  export default new confirmationPage();

  