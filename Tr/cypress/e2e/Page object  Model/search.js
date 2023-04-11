class SearchFunctionalities {
  SearchIconVerify() {
    cy.get(".mat-search_icon-search").should("be.visible");
    cy.get(
      '.mat-search_icons mat-icon[data-mat-icon-type="font"][aria-hidden="true"]:last-child'
    ).click();
    cy.get("#mat-input-0").type("apple{enter}");
  }

  VerifyTwoApple(){
    cy.get('.mat-grid-tile-content mat-card').should('have.length', 2).each(($product) => {
        cy.wrap($product).contains('Apple')
      })
  }

  BananaProduct(){
    cy.get('.mat-grid-tile-content mat-card').each(($product) => {
        cy.wrap($product).should('not.contain', 'Banana')
      })
  }

}

export const SearchObj = new SearchFunctionalities();
