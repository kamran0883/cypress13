import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let requestData = ''
let arrayLength = ''
let endPoint = ''
let getResponse = ''
let verifyResponse = ''
let outputArrayLength = ''
let responseArray = [];

Given("I read the test data to make a request.", () => {
  cy.fixture("backend-data-files/payLoad/Rental_Amount_AnnuityV2/RentalAmountAnnuityV2TestData.json").then(
    (obj) => {
      requestData = obj;
      arrayLength = requestData.length
      cy.log(JSON.stringify(requestData))
    });

  cy.fixture("backend-data-files/endpoint/endpoint.json").then(
    (obj) => {
        endPoint = obj
    }
  );
  cy.fixture("backend-data-files/response/Rental_Amount_AnnuityV2/RentalAmountAnnuityV2Response.json").then(
    (obj) => {
        verifyResponse = obj
        outputArrayLength = verifyResponse.length
    }
  );
});



When("I send the paylaod to get reponse.", () => {

    cy.request(
        {
            method: "POST",
            url: Cypress.env('baseUrl'),
            body: requestData,
            headers: {
                 'x-api-key': Cypress.env("apikey")
                // Authorization: `Bearer ${Cypress.env("Access_token")}`
            }
        }
    ).then((response) => {
        getResponse = response
        cy.log(JSON.stringify(getResponse.body));
        responseArray.push(response.body);
        expect(getResponse.status).to.eq(200);
    })
});

Then("Verify the given response with test data.", () => {
  
    expect(responseArray[0]).to.deep.eq(verifyResponse);


});
