

class AppexNow{
    getBaseUrl(){
       return cy.visit(Cypress.env('appex-now'))
    }

    product(){
      cy.get('span').contains('Products').click()
    }

    contactUsButton(){
        cy.get('span').contains('Contact Us').click()
        cy.url().should('include', '/contact-us')
        cy.xpath("//h2[@class='MuiTypography-root MuiTypography-h2 css-1hx43li']").should('have.text', 'Contact Us')
    }

    validateProductsPage(){
        cy.get('h2').contains('Explore Our Products').should('have.text', 'Explore Our Products')
        cy.get('input[placeholder="Search by keyword..."]').should('be.visible')
        const appexNow = 'cypress/testdata/appex-now/market.json'
        cy.readFile(appexNow).then((obj) => {
            const products = obj.appexNow.productNames
            for(let i =0 ; i<products.length; i++){
                cy.log(products[i])
                cy.get('p').contains(products[i]).should('have.text', products[i])
            }
        })
    }

    profileIcon(){
        cy.wait(2000)
        cy.xpath(`(//*[name()='svg'])[1]`).click()
        cy.get('li').contains('Login').should('be.visible')
        cy.get('li').contains('Create Account').should('be.visible')
    }

    validateSubscribedApps(){
        cy.wait(10000)
        cy.get(".logged-in-dropdown").first().click()
    //    cy.xpath("//li[normalize-space()='My Profile']").click()
       // cy.get('.collapse-icon > svg').click()
        // cy.get('span').contains('Playground').should('be.visible')
        // cy.get('span').contains('Documentation').should('be.visible')
       // cy.get('div').contains('JW').should('have.text', 'JW')
        cy.get('li').contains('My Profile').should('be.visible')
        cy.get('li').contains('Logout').should('be.visible')
    }

    myProfile(){
        cy.get('li').contains('My Profile').click()
    }

    validatePlayground(){
        // cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1)').click()
        cy.get('.MuiList-padding > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').should('be.visible').click()
        const playgroundDropDown = "(//span[normalize-space()='Playground'])[1]"
        cy.flex(playgroundDropDown)
    }



} export default AppexNow;