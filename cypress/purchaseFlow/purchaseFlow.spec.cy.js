import loginPage from '../pages/loginPage';
import inventoryPage from '../pages/inventoryPage';
import cartPage from '../pages/cartPage';
import checkoutPage from '../pages/checkoutPage';
import confirmationPage from '../pages/confirmationPage';

describe('Product Purchase Flow on SauceDemo', () => {
  const productName = 'Sauce Labs Backpack';

  before(() => {
    cy.fixture('testData').as('user');
  });

  it('should allow a user to purchase a product successfully', function () {
    // Step 1: Log in
    loginPage.visit();
    loginPage.login(this.user.username, this.user.password);

    // Step 2: Add product to the cart
    inventoryPage.addProductToCart(productName);

    // Step 3: Validate cart
    inventoryPage.goToCart();
    cartPage.verifyProductInCart(productName);

    // Step 4: Checkout
    cartPage.proceedToCheckout();
    checkoutPage.fillCheckoutDetails(this.user.firstName, this.user.lastName, this.user.postalCode);

    // Step 5: Validate order summary
    checkoutPage.verifyOrderSummary(productName);

    // Step 6: Complete purchase
    checkoutPage.completePurchase();

    // Step 7: Verify success message
    confirmationPage.verifySuccessMessage();
  });
});