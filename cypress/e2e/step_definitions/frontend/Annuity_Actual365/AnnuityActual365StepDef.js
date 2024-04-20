// import mongoose from "mongoose";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FinancialCalculation from "../../../../pages/AnnuityActual365Page/AnnuityActual365Page";

const financialcalculation = new FinancialCalculation();

/// <reference types="Cypress" />

let responseLength = "";
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  useGrouping: true,
});

let rentalcalculationdatavariations = "";

// ---------------Financial Calculaton for Annuity Actual/365 ------------------------
Given(
  "Annuity-actual365 Rental Calculation method available for Rental Calculation",
  () => {
    console.log(Cypress.env("Access_token"));
    // cy.visit(Cypress.env("calculation-engine-url"));
  }
);

When("Read the combinations for Annuity-actual365 Rental Calculation", () => {
  // load payload for Rental Calculation Method
  cy.fixture(
    "frontend-data-files/Annuity_Actual365/AnnuityActual365.json"
  ).then((obj) => {
    rentalcalculationdatavariations = obj;
  });
});
Then(
    "Input the financial details for the verification of Annuity-actual365 for {word}",
    (scenerio) => {
  
      //  const pickRandomArrayIndex = 0 + Math.floor(Math.random() * 17); 
      responseLength =
        rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio]
          .length;
  
      cy.log(rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio]);
      for (let i = 0; i < 1; i++) {
        cy.reload(true)
        cy.log(responseLength)
        //   cy.visit(Cypress.env("calculation-engine-url"));
        financialcalculation.chooseFinancialCalculationTab();
  
  
        const method =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i]
            .rentalCalculationMethod;
  
        financialcalculation.RentalCalculationMethodSelection(method);
  
        const date =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i]
            .ContractStartDate;
        cy.datePicker(date)
  
        // Rental Mode Selection
        const mode =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i]
            .rentalMode;
  
        financialcalculation.RentalModeSelection(mode);
  
        // Rental Frequency Selection
        const frequency =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i]
            .rentalFrequency;
        financialcalculation.RentalFrequencySelection(frequency);
  
        // Enter Contract Terms
        const terms =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i]
            .contractTerms;
        financialcalculation.ContractTerms(terms);
        const fa =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i]
            .FinancedAmount;
        financialcalculation.FinancedAmount(fa);
  
        // Enter RV
        const rv =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i]
            .RvAmount;
        financialcalculation.RV(rv);
  
        // Enter APR
        // eslint-disable-next-line prefer-destructuring
        const apr =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i].InterestChartParam[0].apr
        financialcalculation.APR(apr);
  
        const extensionDay = rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i].extensionDays
  
        if (extensionDay) {
          financialcalculation.extensionDays(extensionDay)
        }
        const sr =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i]
            .structureRental;
        const rentalstructure =
          rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i].RentalStructure
        financialcalculation.StrCalculation(sr);
        financialcalculation.cross()
  
  
        const Length = rentalstructure.length
        for (let j = 0; j < Length; j++) {
          const termfrom =
            rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i].RentalStructure[j].StartTerm;
          const termto =
            rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i].RentalStructure[j].EndTerm;
          const structurerentalamount =
            rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i].RentalStructure[j].RentalAmount;
          const structurerentaltype =
            rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i].RentalStructure[j].RentalType;
          financialcalculation.Stucturedrentalvalue(sr, j, termfrom, termto, structurerentalamount, structurerentaltype)
        }
  
        const ip = rentalcalculationdatavariations.rentalCaclculationAnnuityActual365[scenerio][i].IncomePosting
        financialcalculation.IncomePosting(ip)
        financialcalculation.ClickCalculateButton();
    }
    });