
import { When,Then } from "@badeball/cypress-cucumber-preprocessor";
import UserManagement from "../../../../pages/UserMangementPage/UserMangementPage"

const usermanagement = new UserManagement();

/// <reference types="Cypress" />


// ---------------Adding new User ------------------------

When("Select the UMs Screen", () => {
  // load payload for Rental Calculation Method
  usermanagement.SelectUserManagementTab();
});

When("Check the all if it is not verified then delete it", () => {
  usermanagement.DeleteNewUser();
});

When("Add new user and verify the email also", () => {
  usermanagement.AddNewUser();
});

When("After click on verify link land on Change password screen", () => {
  usermanagement.verifyNewChangepaswordpage();
});

When("Add new user without verification", () => {
  usermanagement.addNewUserWithoutVerification();
});
Then("verify the user email for NewUserCredentials", () => {
  usermanagement.newUserLogin();
});

Then("verify flex screen and perform transcation", () => {
  usermanagement.verifyurl();
});

When("user click on  logout and verify the subuser form the admin User", () => {
  usermanagement.flexLogout();
});

Then("Verify the user exist or not in the list of admin user", () => {
  usermanagement.verifyUserExist();
});

Then("verify the email should be edit successfully", () => {
  usermanagement.EditEmailAddress();
});

Then("Verify the resend the verification email", () => {
  usermanagement.ResendVerificationLink();
});

When('Search the user from the search bar',()=>{
  usermanagement.getsearchUser()
})

When('i disable the user form the list of user',()=>{
  usermanagement.disableTheUser()
})

Then('Verify disable the user from the admin usm dashboard of flex are not performed transcation',()=>{
  usermanagement.loginAgainsubUser()
})