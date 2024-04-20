class CreatingQuotPage {
  visit() {
    cy.visit("./");
  }

  assestCost() {
    return cy.get("#txtassetcost");
  }

  depositAmount() {
    return cy.get("#txtdepositamount");
  }

  commission() {
    return cy.get("#txtcommission");
  }

  rates() {
    return cy.get("#txtrates");
  }
}
export default CreatingQuotPage;
