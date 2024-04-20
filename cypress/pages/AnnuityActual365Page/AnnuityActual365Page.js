
/// <reference types="Cypress" />
// eslint-disable-next-line import/order, import/newline-after-import
import moment from "moment";

class FinancialCalculation {

    chooseFinancialCalculationTab() {
        cy.get('.nav-toggle > .MuiButtonBase-root > img').click()
        cy.xpath("//span[normalize-space()='Rental & Repayment Plan']").click()
        cy.get('.nav-open-toggle > .MuiButtonBase-root > img').click()
    }
    // eslint-disable-next-line lines-between-class-members
    RentalVerification(rental, method) {

        cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(3)').then(($el) => {
            const text = $el.text();
            cy.log(text)
            assert.equal(text, rental, `${method} Rental`)

        })

    }

    // eslint-disable-next-line lines-between-class-members
    Repaymentplan(k, rentalNo, rentalDueDate, openingPrincipal, netRentalAmount, rentalPrincipal, rentalInterest, periodicInterest, closingPrincipal, method) {

        cy.log(k)
        cy.get(`.MuiTableBody-root > :nth-child(${k + 1}) > :nth-child(1)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, rentalNo, `${method} Rental`)
        })

        cy.get(`.MuiTableBody-root > :nth-child(${k + 1}) > :nth-child(2)`).then(($el) => {
            const text = $el.text();
            const Convertdates = moment(rentalDueDate).format('DD-MMM-YYYY')
            assert.equal(text, Convertdates, `${method} Rental`)
        })

        cy.get(`.MuiTableBody-root > :nth-child(${k + 1}) > :nth-child(3)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, openingPrincipal, `${method} Rental`)
        })

        cy.get(`.MuiTableBody-root > :nth-child(${k + 1}) > :nth-child(4)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, netRentalAmount, `${method} Rental`)
        })

        cy.get(`.MuiTableBody-root > :nth-child(${k + 1}) > :nth-child(5)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, rentalPrincipal, `${method} Rental`)
        })

        cy.get(`.MuiTableBody-root > :nth-child(${k + 1}) > :nth-child(6)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, rentalInterest, `${method} Rental`)
        })

        cy.get(`.MuiTableBody-root > :nth-child(${k + 1}) > :nth-child(7)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, periodicInterest, `${method} Rental`)
        })

        cy.get(`.MuiTableBody-root > :nth-child(${k + 1}) > :nth-child(8)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, closingPrincipal, `${method} Rental`)
        })

    }

    incomePosting(incomePosting) {

        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click({ force: true })
        for (let i = 0; i < incomePosting.length; i++) {
            cy.get(`.MuiTableBody-root > :nth-child(${i + 1}) > :nth-child(1)`).should('have.text', incomePosting[i].serialNo)
            cy.get(`.MuiTableBody-root > :nth-child(${i + 1}) > :nth-child(2)`).should('have.text', incomePosting[i].rentalNo)
            cy.get(`.MuiTableBody-root > :nth-child(${i + 1}) > :nth-child(3)`).should('have.text', incomePosting[i].postingDate)
            cy.get(`.MuiTableBody-root > :nth-child(${i + 1}) > :nth-child(4)`).should('have.text', incomePosting[i].noOfDays)
            cy.get(`.MuiTableBody-root > :nth-child(${i + 1}) > :nth-child(5)`).should('have.text', incomePosting[i].fromDate)
            cy.get(`.MuiTableBody-root > :nth-child(${i + 1}) > :nth-child(6)`).should('have.text', incomePosting[i].toDate)
            cy.get(`.MuiTableBody-root > :nth-child(${i + 1}) > :nth-child(7)`).should('have.text', incomePosting[i].amount)

        }
    }
    // eslint-disable-next-line lines-between-class-members
    Outputtab(methods) {
        cy.xpath(`//button[text()="${methods}"]`).click()

    }

    RentalCalculationMethodSelection(method) {
        cy.xpath(`//div[@data-testid='cbxRentalCalculationMethod']//div[@id='select-simple']`).click()
        cy.get(`[data-value="${method}"]`).click()
    }

    RepaymentPlanCalculationMethodSelection(method) {
        cy.xpath(`//div[@data-testid='cbxRepaymentPlanCalculation']//div[@id='select-simple']`).click()
        cy.get(`[data-value="${method}"]`).click()
    }

    StartDate() {
        cy.get('[data-testid=:r1b:]').click().clear().type(moment().format("YYYY MM DD")).then(($e1) => {
            const text = $e1.text()

            cy.Mode(moment().format("YYYY MM DD"), text.substring(0, 10))
        })
    }

    RentalModeSelection(mode) {
        cy.get('[data-testid="cbxRentalMode"] > #select-simple').click();
        cy.get(`li[data-value="${mode}"]`).click();
    }

    RentalFrequencySelection(frequency) {

        cy.get('[data-testid="cbxRentalFrequency"] > #select-simple').click({ force: true });
        cy.get(`li[data-value="${frequency}"]`).click({
            multiple: true,
            force: true,
        });
    }

    ContractTerms(terms) {

        cy.get(".MuiOutlinedInput-root > #txtTerms").click({ force: true }).clear().type(terms);
        cy.get('label[for="outlined-adornment-txtTerms"]').then(($el) => {
            const text = $el.text();

          

        })
    }

    FinancedAmount(fa) {

        cy.get(".MuiOutlinedInput-root > #txtFinancedAmount").type(fa);
        cy.get('label[for="outlined-adornment-txtFinancedAmount"]').then(($el) => {
            const text = $el.text()
        })
        cy.get('body').type('{esc}');
    }

    extensionDays(extensionDay) {
        cy.get('#ExtensionDays').type(extensionDay)
    }

    RV(rv) {

        cy.get(".MuiOutlinedInput-root > #txtResidualValue").clear().type(rv);
        cy.get('label[for="outlined-adornment-txtResidualValue"]').then(($el) => {
            const text = $el.text();

            

        })
    }

    benchmarkratesCalculation(sr,) {
        cy.get('.MuiFormGroup-root > :nth-child(1)').click({ multiple: true })
        cy.get(".MuiTypography-root.MuiTypography-subtitle2.css-1lr5p0q").then(($el) => {
            const text = $el.text();
            
        })
    }

    APR(apr) {

        cy.get('[data-testid="txtAPR"] > #txtAPR').focus().clear().type(apr);
        cy.get('label[for="outlined-adornment-txtAPR"]').then(($el) => {
            const text = $el.text();

            cy.Mode(apr, text)

        })

    }

    cross() {

        const Crossicon = '.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.btn.btn-secondary.with-icon.icon-only.css-oktv08';
        cy.get(Crossicon).click();
    }

    StrCalculation(sr,) {
        cy.get('.MuiFormGroup-root > :nth-child(1)').click({ multiple: true })
        cy.get(".MuiTypography-root.MuiTypography-subtitle2.css-1lr5p0q").then(($el) => {
            const text = $el.text();
            cy.Mode(text, sr)
        })
    }

    Stucturedrentalvalue(sr, j, termfrom, termto, structurerentalamount, structurerentaltype) {
        cy.log(sr)
        if (sr == "true") {
            cy.xpath("//button[text()='Add More']", { log: false }).click()

            cy.get(`:nth-child(${j + 1}) > .sub-sections-fields > .MuiGrid-container > :nth-child(1) > .styled-tooltip > [aria-label=""] > .u-form-group > .MuiFormControl-root > [data-testid] > #txtTermFrom`).clear().type(termfrom);

            cy.get(`:nth-child(${j + 1}) > .sub-sections-fields > .MuiGrid-container > :nth-child(2) > .styled-tooltip > [aria-label=""] > .u-form-group > .MuiFormControl-root > [data-testid] > #txtTermTo`).clear().type(termto);

            cy.get(`:nth-child(${j + 1}) > .sub-sections-fields > .MuiGrid-container > :nth-child(3) > .styled-tooltip > [aria-label=""] > .u-form-group > .MuiFormControl-root > [data-testid] > #txtAmount`).clear().type(structurerentalamount);

            cy.xpath(`(//div[@id='select-simple'])[5]`).click();

            cy.get(`li[data-value="${structurerentaltype}"]`).click();
        }
    }

    IncomePosting(ip) {
        if (ip == true) {
            cy.get('[data-testid="txtIncomePosting"] > .MuiBox-root > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        }
        else if (ip == false) {
            cy.get('[data-testid="txtIncomePosting"] > .MuiBox-root > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2)').click()
        }
    }


    Exportfile() {
        cy.xpath("//button[normalize-space()='Repayment Plan']").click()
        // cy.xpath("//button[normalize-space()='Export']").click()
        // cy.verifyDownload('Repayment Plan.xlsx');
    }

    RentalDetailTabSelection(ip) {
        if (ip == true)
            cy.xpath('//button[text()="Rental Detail"]').click()
    }

    RentalDetail(m, startTerm, endTerm, rentalAmount, rentalType, method) {
        cy.get(`.MuiTableBody-root > :nth-child(${m + 1}) > :nth-child(1)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, startTerm, `${method} Rental`)
        })
        cy.get(`.MuiTableBody-root > :nth-child(${m + 1}) > :nth-child(2)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, endTerm, `${method} Rental`)
        })
        cy.get(`.MuiTableBody-root > :nth-child(${m + 1}) > :nth-child(3)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, rentalAmount, `${method} Rental`)
        })
        cy.get(`.MuiTableBody-root > :nth-child(${m + 1}) > :nth-child(4)`).then(($el) => {
            const text = $el.text();
            assert.equal(text, rentalType, `${method} Rental`)
        })
    }

    IncomePostingTabSelection(ip) {
        if (ip == true)
            // cy.xpath('//button[text()="Income Posting"]').click()
            cy.get('.MuiTabs-flexContainer > :nth-child(3)').click({ force: true })
    }

    VerifyIncomePosting(ip, rentalno, postingDate, noOfDays, fromDate, toDate, amount) {
        if (ip == true) {
            for (let x = 0; x < rentalno.length; x++) {
                cy.get(`.MuiTableBody-root > :nth-child(${x + 1}) > :nth-child(2)`).should('have.text', rentalno[x])
                cy.get(`.MuiTableBody-root > :nth-child(${x + 1}) > :nth-child(3)`).should('have.text', postingDate[x])
                cy.get(`.MuiTableBody-root > :nth-child(${x + 1}) > :nth-child(4)`).should('have.text', noOfDays[x])
                cy.get(`.MuiTableBody-root > :nth-child(${x + 1}) > :nth-child(5)`).should('have.text', fromDate[x])
                cy.get(`.MuiTableBody-root > :nth-child(${x + 1}) > :nth-child(6)`).should('have.text', toDate[x])
                cy.get(`.MuiTableBody-root > :nth-child(${x + 1}) > :nth-child(7)`).should('have.text', amount[x])
            }

        }
    }

    Deletefloder() {
        cy.deletFloder()
    }

    ClickCalculateButton() {

        cy.get('[data-testid="btnCalculate"]').trigger("click");
    }


}

export default FinancialCalculation;