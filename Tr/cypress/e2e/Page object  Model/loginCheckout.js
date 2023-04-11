/* eslint-disable*/
///  <reference types="Cypress" />
// var data= require('../../../../fixtures/createusers.json')
let data= require('../../fixtures/login.json')

class loginCheckout {

  NavigateToUrl(){
    cy.visit('https://juice-shop.herokuapp.com/#/')
    cy.get(':nth-child(3) > .mat-tooltip-trigger').click()
    cy.get('#navbarAccount').click({force:true})
    cy.get('#navbarAccount').click({force:true})
    cy.wait(40)
    cy.get('#navbarLoginButton').click({force:true})
  }

  Username() {
    return cy.get("#email").type(data.users['email']);
  }

  Password() {
    return cy.get("#password").type(data.users["password"]);
  }

  clickAccount() {
    return cy.get("#navbarAccount > .mat-button-wrapper > span");
  }

  ClickLoginButtton() {
    cy.get('.cc-btn').click()
    return cy.get("#loginButton").click();
  }

  AddBasket() {
    return cy.get(
      '[style="left: 0px; width: calc((50% - 15px) * 1 + 0px); margin-top: 0px; padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span'
    ).click({force:true});
  }

  ClickBasket(){
    return cy.get("button[aria-label='Show the shopping cart']").click({force:true})
  }

  CheckOutButton(){
    cy.wait(500)
    return cy.get('button#checkoutButton').click()
  }


  AddNewAddress() {
    return cy
      .get('button.mat-raised-button[routerlink="/address/create"]')
      .click();
  }

  EnterNewAddress() {
    cy.get("#mat-input-3").type(data.users['country']);
    cy.get("#mat-input-4").type("Md");
    cy.get("#mat-input-5").type(data.users["Mobile"]);
    cy.get("#mat-input-6").type(data.users['Postal_code']);
    cy.get("#address").type(data.users['Address']);
    cy.get("#mat-input-8").type(data.users['City']);
    cy.get("#mat-input-9").type(data.users['Address']);
  }

  SubmitButton() {
    return cy.get("#submitButton").click({ force: true });
  }
}

export const Login_Checkout = new loginCheckout();
