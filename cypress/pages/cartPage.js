class cartPage {
    verifyProductInCart(productName) {
      cy.contains('.cart_item', productName).should('be.visible');
    }
  
    proceedToCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  }
  
  export default new cartPage();