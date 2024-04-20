
Feature: EndPoint(Annuity30_360) : RentalAmountAnnuityV2 
    @mobile
    Scenario: ( Test Case 1 ) create a post request to verify the data
        Given I read the test data to make a request.
        When  I send the paylaod to get reponse.
        Then Verify the given response with test data.