Feature: User Management System - flex. Calculation Engine

    Background:  Access the url And Sign with Email

        Given  Set Login & Signup Joureny




    @UserManagement @flexCalculationRegressions
    Scenario: Create, Update and Delete a new user in UMS screen
        When Select the UMs Screen
        And  Check the all if it is not verified then delete it
        And  Add new user and verify the email also
        And  After click on verify link land on Change password screen
        Then verify the user email for NewUserCredentials
        And  verify flex screen and perform transcation
        Given Annuity-actual365 Rental Calculation method available for Rental Calculation
        When Read the combinations for Annuity-actual365 Rental Calculation
        Then Input the financial details for the verification of Annuity-actual365 for Advance_mode_without_RV_with_APr_no_sturctured
        And  user click on  logout and verify the subuser form the admin User


    Scenario: Login with admin user and check the unverified  sub user
    When Select the UMs Screen
    And  Add new user without verification
    Then Verify the user exist or not in the list of admin user
    And  verify the email should be edit successfully
    And  Verify the resend the verification email

    Scenario: If i disable the user from the admin user system should block
        When Select the UMs Screen
        And Search the user from the search bar
        And i disable the user form the list of user
        And  user click on  logout and verify the subuser form the admin User
        Then Verify disable the user from the admin usm dashboard of flex are not performed transcation
     
