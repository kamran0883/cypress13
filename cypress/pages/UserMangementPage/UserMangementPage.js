/// <reference types="Cypress" />
class UserManagement {
  // Select User Management Tab
  SelectUserManagementTab() {
    cy.get(".nav-toggle > .MuiButtonBase-root > img").click();
    cy.xpath("//span[normalize-space()='User Management']").click();
    cy.xpath("//span[normalize-space()='Manage Users']").click();
  }

  flexLogout() {
    cy.get(".user-icon").click();
    cy.get('.MuiList-root > [tabindex="-1"]').click();
  }

  // Add New User
  AddNewUser(useremail) {
    console.log(useremail);
    cy.xpath("//button[normalize-space()='Add New User']").click();
    cy.createInbox().then((inbox) => {
      console.log(inbox);
      cy.get("#user_name").type(inbox.emailAddress);
      cy.writeFile("cypress/testdata/appex-now/mailSlurp.json", {
        inboxID: inbox.id,
        email: inbox.emailAddress,
      });
      cy.get("#select-simple").should("have.text", "Flex User");
      cy.xpath(`//button[normalize-space()='Save User']`).click({
        force: true,
      });
      cy.get(".MuiSnackbarContent-message").should(
        "have.text",
        "The user has been added and verification link has been sent successfully!"
      );
      this.flexLogout();
      cy.waitForLatestEmail(inbox.id, inbox.emailAddress).then((obj) => {
        console.log(obj);
        const div = document.createElement("html");
        div.innerHTML = obj.body.trim();
        const getverificationLink = div
          .getElementsByClassName("email-button")[0]
          .getAttribute("href");
        cy.visit(getverificationLink);
      });
    });
  }

  // Check if he user added to list
  ListingNewUser(usermail) {
    cy.readFile("cypress/testdata/appex-now/mailSlurp.json").then((obj) => {
      cy.xpath(
        `//div[@aria-label='${obj.login}']//..//..//parent::td//following-sibling::td[5]//button`
      ).should("have.text", `${obj.login}`);

      // Check if the user is not verified
      cy.get(":nth-child(1) > .email-cell").should(
        "have.css",
        "color",
        "rgb(81, 84, 102)"
      );
    });
  }

  addNewUserWithoutVerification() {
    cy.xpath("//button[normalize-space()='Add New User']").click();
    cy.createInbox().then((inbox) => {
      console.log(inbox);
      cy.get("#user_name").type(inbox.emailAddress);
      cy.get("#select-simple").should("have.text", "Flex User");
      cy.xpath(`//button[normalize-space()='Save User']`).click({
        force: true,
      });
      cy.get(".MuiSnackbarContent-message").should(
        "have.text",
        "The user has been added and verification link has been sent successfully!"
      );
    });
  }
  verifyNewChangepaswordpage() {
    cy.get(".control-wrap > .MuiTypography-root").should(
      "have.text",
      "Let’s Get To Know   You... "
    );
    cy.get("#first_name").type("Jhon");
    cy.get("#last_name").type("vilan");
    cy.get(".MuiInputBase-root > #password").type("Netsolpk1!");
    cy.get("#confirmPassword").type("Netsolpk1!");
    cy.get(
      ".contact-input-wrap > .u-form-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type(12312651565);
    cy.get(".css-h5fkc8 > .MuiButtonBase-root").click();
  }

  newUserLogin() {
    cy.wait(2000);
    cy.readFile("cypress/testdata/appex-now/mailSlurp.json").then((obj) => {
      cy.log(obj.email);
      cy.get("#user_name").type(obj.email);
      cy.get(".css-h5fkc8 > .MuiButtonBase-root").click();
      cy.get("#password").type("Netsolpk1!");
      cy.get(".css-h5fkc8 > .MuiButtonBase-root").click();
    });
  }

  verifyurl() {
    cy.url().should("eq", Cypress.env("flex"));
  }
  // Resend Veification link
  ResendVerificationLink() {
    cy.get(".action-cell").each(($button) => {
      const buttonExists = $button.find(".icon-only").length > 0;
      if (buttonExists) {
        // Click on the button if it exists
        cy.wrap($button).find(".icon-only").click();

        cy.xpath("//li[normalize-space()='Resend Email Invite']").click();
        cy.get("div[role=presentation]").should(
          "have.text",
          "An email invite has been sent successfully!"
        );
      } else {
        cy.log("Button not found in the current .action-cell");
      }
    });
  }

  // Edit Email Address
  EditEmailAddress(newemail) {
    cy.wait(2000);
    cy.get(".action-cell").each(($button) => {
      // Check if the button exists within the current .action-cell
      const buttonExists = $button.find(".icon-only").length > 0;
      if (buttonExists) {
        // Click on the button if it exists
        cy.wrap($button).find(".icon-only").click();

        cy.xpath("//li[normalize-space()='Edit']").click();
        cy.wait(2000);
        cy.xpath('//label[text()="Email Address"]/..//input')
          .click()
          .clear()
          .type("obj123@gmail.com");
        cy.wait(1500);
        cy.get(".drawer-footer > .MuiButtonBase-root").click({ force: true });
        cy.get("div[role=presentation]").should(
          "have.text",
          "User updated successfully and verification link has been sent"
        );
      } else {
        // Log a message or perform any other action if the button is not found
        cy.log("Button not found in the current .action-cell");
      }
    });
  }

  verifyUserExist() {
    cy.readFile("cypress/testdata/appex-now/mailSlurp.json").then((obj) => {
      cy.get("tbody tr:nth-child(1) td:nth-child(2)").each((emailExist) => {
        if (emailExist === obj.email) {
          DeleteNewUser();
        }
      });
    });
  }

  // Delete the new user
  DeleteNewUser() {
    // Assuming buttons are inside a table with an ID 'myTable'
    cy.wait(2000);

    // Check if the button exists
    cy.get(".action-cell").each(($button) => {
      // Check if the button exists within the current .action-cell
      const buttonExists = $button.find(".icon-only").length > 0;
      if (buttonExists) {
        // Click on the button if it exists
        cy.wrap($button).find(".icon-only").click();
        cy.xpath("//li[normalize-space()='Delete']").click();
        cy.get(".MuiDialogContent-root").should(
          "have.text",
          "Are you sure you want to delete?Once deleted, you cannot undo this action."
        );
        cy.get(".MuiDialogActions-root > .MuiButton-fullWidth").click();
        cy.get("div[role=presentation]").should(
          "have.text",
          "The record has been deleted successfully!"
        );
      } else {
        // Log a message or perform any other action if the button is not found
        cy.log("Button not found in the current .action-cell");
      }
    });
  }
  getsearchUser() {
    cy.readFile("cypress/testdata/appex-now/mailSlurp.json").then((obj) => {
      cy.xpath("(//input[@placeholder='Search'])[2]").type(obj.email);
    });
  }

  disableTheUser() {
    // Scroll the page to the right
    cy.get(".MuiFormControlLabel-root").click();
  }

  loginAgainsubUser() {
  
      
        cy.readFile("cypress/testdata/appex-now/mailSlurp.json").then((obj) => {
        cy.get("#user_name").type(obj.email);
        cy.get(".css-h5fkc8 > .MuiButtonBase-root").click();
        cy.get("#password").type("Netsolpk1!");
        cy.get(".css-h5fkc8 > .MuiButtonBase-root").click();
        cy.get("div[role=presentation]").should(
          "have.text",
          "Your account has been blocked. Please contact your administrator!"
        );
      });
  }
}

export default UserManagement;
