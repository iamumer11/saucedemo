class checkoutPage {
    fillCheckoutDetails(firstName, lastName, postalCode) {
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(postalCode);
      cy.get('[data-test="continue"]').click();
    }
  
    verifyOrderSummary(productName) {
      cy.contains('.inventory_item_name', productName).should('be.visible');
    }
  
    completePurchase() {
      cy.get('[data-test="finish"]').click();
    }
  }
  
  export default new checkoutPage();