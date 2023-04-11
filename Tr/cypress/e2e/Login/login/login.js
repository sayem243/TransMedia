/// <reference types= "Cypress" />
import { Login_Checkout } from "../../Page object  Model/loginCheckout";
// import { authLogin } from "../../../../../../../../support/login";

Given(/^Navigate to the url$/, () => {
  Login_Checkout.NavigateToUrl();
});

And(/^Enter username$/, () => {
  Login_Checkout.Username();
});
And(/^Enter password$/, () => {
  Login_Checkout.Password();
});
And(/^Click login button$/, () => {
  Login_Checkout.ClickLoginButtton();
});
And(/^Add one item to basket$/, () => {
  Login_Checkout.AddBasket();
  cy.wait(500);
});

And(/^Click your basket$/, () => {
  Login_Checkout.ClickBasket();
  cy.wait(500);
});

And(/^Click Checkout Button$/, () => {
  Login_Checkout.CheckOutButton();
});
And(/^Click Add new address button$/, () => {
  Login_Checkout.AddNewAddress();
});

And(/^Enter the Address$/, () => {
  Login_Checkout.EnterNewAddress();
});

Then(/^Click submit button$/, () => {
  Login_Checkout.SubmitButton();
});
