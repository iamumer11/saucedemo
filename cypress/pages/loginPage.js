class loginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/', { timeout: 120000, failOnStatusCode: false });
    }
  
    login(username, password) {
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
    }
  }
  
  export default new loginPage();