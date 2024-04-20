/* eslint-disable camelcase */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-alert */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */
/* Updated pom file */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */


class SignUp {


    baseurl(pack, id) {
        cy.log(pack)
        cy.visit(Cypress.env('flex_link') + `${id}&productId=10`)
    }
    Button(button) {
        cy.contains(button).click()
    }
    userNameFieldValidation() {
        cy.get("button[type='submit']").click();
        cy.get("p[id='user_name']").should('have.text', 'Email address is required')
        cy.get("p[id='user_name']").should('have.css', 'color', 'rgb(255, 51, 51)')
    }

    passwodFieldValidation() {
        cy.get("button[type='submit']").click();
        cy.get('p[id="password"]').should('have.text', "Password is required")
        cy.get('p[id="password"]').should('have.css', 'color', 'rgb(255, 51, 51)')
    }

    userName() {
        const emails = Cypress.env("email")
        cy.get("#user_name").type(emails)
        cy.get("button[type='submit']").click();


    }
    password() {
        const Passwords = Cypress.env("password")
        cy.get("#password").type(Passwords)
        cy.get("button[type='submit']").click({ timeout: 2000 });
       
    }
    signUp() {

        cy.createRandomEmail().then((email_Id) => {
            const emailId = email_Id

            // assert.isOk(`User:${user} not exist`)
            // refresh the Data Base 
            cy.DB(emailId)
        })
        cy.readFile(
            "cypress/testdata/marketplace/data.json"
        ).then((data) => {
            const Data = data
            // Get DB data
            const user = Data.Email
            const accountType = Data.Account_type
            const signupComplete = Data.Signup_complete
            const agreedTerm = Data.agreed_term
            const stripeCustomerId = Data.Stripe_customer_id
            const isActive = Data.Is_active
            const isDelete = Data.Is_delete
            cy.log(accountType, signupComplete, isActive, isDelete, stripeCustomerId, agreedTerm)
            // Use Custom Commad from unity-common/command.js
            cy.log(user)
            cy.sign_In(user);
        })
    }

    selectPackages(pack, pack_name, index) {

        cy.xpath("//a[@class='btn-get btn-sign']").click();
        console.log(pack, pack_name, index)
        cy.xpath(`//h2[normalize-space()='${pack_name}']`).then(($e) => {
            const text = $e.text()
            assert.equal(text, pack_name)
        })

        cy.xpath(`(//a[normalize-space()='${pack}'])[${index}]`).click()


    }
    signUpFormFieldValidation() {
        cy.get("button[type='submit']").click();
        cy.get("p[id='first_name']").should('have.text', 'First Name is required')
        cy.get("p[id='password']").should('have.text', 'Password is required')
        cy.get("p[id='confirmPassword']").should('have.text', 'Confirm Password is required')
    }

    formSignUp() {
        cy.readFile(
            "cypress/testdata/appex-now/market.json"
        ).then((obj) => {
            cy.get('#first_name').type(obj.Marketplace.full_name)
            cy.get('#last_name').type(obj.Marketplace.last_name)
            cy.get('#password').type(obj.Marketplace.pass)
            cy.get('#confirmPassword').type(obj.Marketplace.pass)
            cy.get("button[type='submit']").click();
        })
    }


    termAndConditions() {

        cy.xpath(`//div[@class='viewport MuiBox-root css-0']`).scrollTo('bottom')
        cy.get('form > .MuiButtonBase-root').click()
    }

    footerTermAndCondition() {
        cy.xpath("//a[normalize-space()='Terms and Conditions']").click()
        cy.get('.MuiButton-root > svg').click()
        cy.xpath("//li[normalize-space()='Print']").then(($l) => {
            const text = $l.text()
            cy.log(text)
            assert.equal(text, ' Print', 'Print button exist')
        })
        cy.xpath("//li[normalize-space()='Download']").then(($M) => {

            const text = $M.text()
            cy.log(text)
            assert.equal(text, ' Download', 'Download button exist')

        })
        cy.xpath("//span[normalize-space()='M inzamam akbar']").click()
    }
    productSubcribtion(accountType) {
        if (accountType == 'paid') {
            cy.xpath("//button[text()='Subscribed Products']").click()
        }
        if (accountType == 'free') {

            cy.xpath("//button[@class='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButtonBase-root subscribe-btn-2 btn className btn-secondary css-8uppd5']").click()
        }
    }


    trailProduct() {
        cy.xpath("//button[text()='Free Trial Products']").click()
        cy.get('.css-178yklu > .MuiButton-root').click();
    }

    subcribeProduct() {
        cy.get('.prd-img > img').click()
        cy.xpath("//button[text()='Subscribed Products']").click()
    }


    privacyPolicy() {

        cy.visit(Cypress.env("marketplace-url"))

        // click on Privacy and Policy button
        cy.xpath("//a[normalize-space()='Privacy Policy']").click()
        // Get text dynamically from privacy and policy 
        cy.get('.main-content > .MuiContainer-root').then(($read) => {
            const text = $read.text()
            console.log(text)
            // Assertion read text from privacy &policy file.txt
            cy.readFile('privacy&policy.txt').should('eq', text)

        })

    }

    // Add bit More(Company Profile) Screen Logout and Login Check
    addBitMoreLogoutAndLoginOnSamePage() {
        // cy.wait(8000)
        // cy.readFile("cypress/testdata/marketplace/market.json").then((obj) => {
        //     cy.get('.nav-right > .profile-link > .nav-link > .MuiAvatar-root').click()
        //     cy.xpath("//li[normalize-space()='Logout']").click()
        //     cy.wait(5000)
        //     cy.get('.nav-right > .profile-link > .nav-link > svg').click()
        //     cy.xpath("//li[normalize-space()='Login']").click()
        //     cy.get('#user_name').click().type(obj.login)
        //     cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()
        //     cy.get('#password').click().type(obj.Marketplace.pass)
        //     cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()
        //     cy.wait(5000)
        //     cy.get('.MuiTypography-h2').should('have.text', '...And A Bit   More')


        // })

    }

      // Add bit More(Company Profile) Screen Field Valdations
      addBitMoreFieldValidation() {

        cy.readFile("cypress/testdata/appex-now/market.json").then(() => {

            cy.get(':nth-child(1) > .MuiFormControlLabel-root').click()

            cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()

            cy.get('.MuiGrid-container > :nth-child(1) .MuiFormHelperText-root').should('have.text', 'Company Name is required')

            cy.get('.u-custom-autocomplete > .MuiFormHelperText-root').should('have.text', 'Country is required')

            cy.get('.contact-input-wrap > .u-form-group > .MuiFormControl-root > .MuiFormHelperText-root').should('have.text', 'Contact Number is required')

            cy.get("input[name='name']").click().type('Netsol')

            cy.get('#select-simple').click()

            cy.xpath("//li[normalize-space()='Others']").click()

            cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()

            cy.get('.MuiGrid-grid-sm-12 > .u-form-group > .MuiFormControl-root').click().type('Software')

            cy.get('.contact-input-wrap > .u-form-group > .MuiFormControl-root > .MuiFormHelperText-root').should('have.text', 'Contact Number is required')

            cy.get('.u-custom-autocomplete > .MuiFormHelperText-root').should('have.text', 'Country is required')

            cy.get('[data-testid="ArrowDropDownIcon"]').click()

            cy.xpath("//li[normalize-space()='Pakistan']").click()

            cy.get('.contact-input-wrap > .u-form-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('352065132065')

            cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()
        })

    }
         // Add bit More(Company Profile) Screen Field Valdations
    addBitMoreeFieldValidation(string) {
        cy.readFile("cypress/testdata/appex-now/market.json").then(() => {
            cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
            cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()
            cy.get('.MuiGrid-container > :nth-child(1) .MuiFormHelperText-root').should('have.text', 'Company Name is required')
            cy.get('.u-custom-autocomplete > .MuiFormHelperText-root').should('have.text', 'Country is required')
            cy.get('.contact-input-wrap > .u-form-group > .MuiFormControl-root > .MuiFormHelperText-root').should('have.text', 'Contact Number is required')
            const rand = Math.floor((Math.random() * 1000) + 1);
            const company  = string+rand
            cy.log(company)
            cy.get("input[name='name']").click().type(company)
            cy.get('#select-simple').click()
            cy.xpath("//li[normalize-space()='Others']").click()
            cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()
            cy.get('.MuiGrid-grid-sm-12 > .u-form-group > .MuiFormControl-root').click().type('Software')
            cy.get('.u-custom-autocomplete > .MuiFormHelperText-root').should('have.text', 'Country is required')
            cy.xpath("//div[@class='MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root u-form-group capitalize-label css-feqhe6']//input[@id='free-solo-demo']").click()
            cy.xpath("//li[normalize-space()='Pakistan']").click()
            cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()
            cy.get('.contact-input-wrap > .u-form-group > .MuiFormControl-root > .MuiFormHelperText-root').should('have.text', 'Contact Number is not valid')
            cy.get('.contact-input-wrap > .u-form-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('352065132065')
            cy.get('.css-h5fkc8 > .MuiButtonBase-root').click()

            cy.xpath("//span[normalize-space()='Subscribed Products']").should('be.visible')
        })
    }

    

    popus() {
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click();
    }

    vadilationButtons(packages, packagename) {
        cy.xpath("//a[normalize-space()='Sign In']").should('have.text', 'Sign In')
        cy.xpath("//a[@class='btn-get btn-sign']").should('have.text', 'GET STARTED').click();
        for (let i = 0; i < packages; i++) {
            cy.xpath(`//h2[normalize-space()='${packagename[i]}']`).then(($el) => {
                const text = $el.text()
                assert.equal(text, packagename[i])
            })


        }
    }

    flexEngine() {

        cy.flex("//button[normalize-space()='Playground']")
    }

    logoutFromFlex() {
        cy.xpath("//span[normalize-space()='Logout']").should('have.text', 'Logout').click()
    }

    cretaeInbox() {
        cy.createInbox().then((inbox) => {
            console.log(inbox)
            cy.get("#user_name").type(inbox.emailAddress)
            cy.get("button[type='submit']").click();
            // cy.writeDataInFile("cypress/testdata/marketplace/market.json",  "login", inbox.emailAddress )
            cy.writeFile('cypress/testdata/appex-now/mailSlurp.json', { inboxID: inbox.id, email: inbox.emailAddress })
            cy.writeDataInFile("cypress/testdata/appex-now/market.json", "login", inbox.emailAddress)
          //  cy.xpath("(//div[@class='MuiSnackbarContent-message css-1w0ym84'])[1]").should('have.text', 'Verification email has been sent')
            cy.waitForLatestEmail(inbox.id, inbox.emailAddress).then((obj) => {
                console.log(obj)
                const div = document.createElement('html');
                div.innerHTML = obj.body.trim();
                const getverificationLink = div.getElementsByClassName('email-button')[0].getAttribute('href');
                cy.visit(getverificationLink)
            })
        });
    }
    getAppexNow() {
        cy.visit(Cypress.env('appex-now'))
    }
    verifyHeaderButton(string) {
        cy.xpath(`//span[normalize-space()='${string}']`).should('have.text', 'Home')
    }
    accountButton() {
        cy.wait(2000)
        cy.xpath("(//*[name()='svg'])[1]").should('be.visible').click({ force: true })
    }
    createAccount(signup) {

        cy.xpath(`//li[normalize-space()='${signup}']`).click({ force: true })

    }
    getEmailForLogin() {
        cy.readFile('cypress/testdata/appex-now/market.json').then((obj) => {
            cy.get("#user_name").type(obj.login)
            cy.get("button[type='submit']").click()
        })
    }

  


    profileeButton() {
        cy.wait(4000)
        cy.get('.nav-right > .profile-link > .nav-link > .MuiAvatar-root').click({ force: true })

    }

    validateNoProductScreen() {
        cy.get('.MuiTypography-root.MuiTypography-body2.text-muted.text-body2.css-ugyqs7').should('have.text', 'You have not subscribed free trial. Go to the homepage to browse products.')
    }

    routeBackToHoomePageButton() {
        return cy.xpath("//span[@class='text-primary link']")
    }

    ssoLogout() {
        cy.get('.user-icon > .MuiButtonBase-root > img').click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
        cy.get('.control-wrap > .MuiTypography-root').should('have.text', 'Get Started    Now! ')
    }
    getAllFileFromFolder(path) {
        return cy.task('getAllFIleFromFloder', {
            filePath: path
        })
    }

} export default SignUp;