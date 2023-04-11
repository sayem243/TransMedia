/// <reference types= "Cypress" />
import { Login_Checkout } from "../../Page object  Model/loginCheckout";
import { SearchObj } from "../../Page object  Model/search";

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

And(/^CLick Search Icon$/, () => {
  SearchObj.SearchIconVerify();
});
Then(/^verify that 2 apple products show up$/, () => {
  SearchObj.VerifyTwoApple();
});

And(/^Banana product doesn't show up$/, () => {
  SearchObj.BananaProduct();
});
