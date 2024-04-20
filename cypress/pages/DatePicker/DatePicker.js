
import moment from "moment";

class Datepicker {

    getDatePicker() {
        return cy.get('.MuiIconButton-edgeEnd')
    }

    getNevigateBack() {
        return cy.get("svg[data-testid='ArrowLeftIcon']")
    }

    getNevigateForward() {
        return cy.get("svg[data-testid='ArrowRightIcon']")
    }

    getMonthName() {
        return cy.get(':nth-child(1) > .css-1v994a0')
    }

    getYearName() {
        return cy.get(':nth-child(2) > .css-1v994a0')
    }

    selectYearName(year) {
        console.log(year, 'this is year')
        return cy.xpath(`//button[normalize-space()='${year}']`)
    }

    getClenderGridLength() {
        return cy.get("div[role='grid']")
    }

    getClenderDays(day) {
        return cy.xpath(`//button[normalize-space()=${day}]`)
        // cy.get("div[role='cell']")
    }

    getMonthNameindex(monthName) {
        var months = {
            'January': '1',
            'February': '2',
            'March': '3',
            'April': '4',
            'May': '5',
            'June': '6',
            'July': '7',
            'August': '8',
            'September': '9',
            'October': '10',
            'November': '11',
            'December': '12',

        }
        return months[monthName]

    }
    getMonth(date) {
        const getMonth = moment(date).format('MMMM')
        return getMonth
    }
    getYear(date) {
        const getyear = moment(date).format('YYYY')
        return getyear
    }
    getDay(date) {
        const getDay = moment(date).format('DD')
        return getDay
    }

    getsDay(date) {
        const getDay = moment(date).format('D')
        return getDay
    }

    setDatefromat(getyear, getMonth, getDay) {
        cy.selectYear(getyear)
        cy.selectMonth(getMonth, getyear)
        cy.selectDay(getDay)
    }

    // setDatefromat(getyear, getMonth, getDay) {
    //     cy.selectYear(getyear)
    //     cy.selectMonth(getMonth, getyear)
    //     cy.selectDay(getDay)
    // }
    dateFromat(getyear, getMonth, getDay) {
        cy.chooseYear(getyear)
        cy.chooseMonth(getMonth, getyear)
        cy.selectDay(getDay)
    }

    datePickers(date) {
        this.getDatePicker().click()
        this.setDatefromat(
            this.getYear(date),
            this.getMonth(date),
            this.getDay(date)
        )

    }
    DatePicker(date) {
        this.dateFromat(this.getYear(date), this.getMonth(date), this.getDay(date))
    }

    getQuotationToolMonth() {
        return cy.xpath("(//div[@id=':r3:-grid-label'])[1]")
    }

    getQuotationToolYear(getyear) {
        cy.xpath("(//div[@id=':r3:-grid-label'])[1]").then(($e1) => {
            const text = $e1.text()
            cy.log(text)
        }).click()
        cy.xpath(`//button[normalize-space()='${getyear}']`).click()


    }



    getQuotationToolDay(getDay) {
        cy.wait(1000)

        cy.xpath(`(//button[normalize-space()='${getDay}'])[1]`).click()

    }
    getMfeDay(getDay) {

        cy.wait(1000)
        cy.get("button[role$='gridcell']").eq(getDay - 1).click()

    }



    setQuotationToolDateFormat(getyear, getMonth, getDay) {
        cy.log(getyear, getMonth, getDay)
        this.getQuotationToolYear(getyear)
        cy.QuotationToolMonth(getMonth)
        this.getQuotationToolDay(getDay)


    }

    quotationToolDatePicker(date) {
        this.setQuotationToolDateFormat(this.getYear(date), this.getMonth(date), this.getsDay(date))


    }

    getMfeYear(getyear) {
        cy.wait(1000)
        cy.get(".MuiPickersCalendarHeader-label.css-1v994a0").click()
        cy.log(getyear)
        cy.xpath(`//button[normalize-space()='${getyear}']`).click()
    }
    getMfeMonth() {
        return cy.get(".MuiPickersCalendarHeader-label.css-1v994a0")
    }
    setMfeDateFormat(getyear, getMonth, getDay) {
        cy.log(getyear, getMonth, getDay)
        this.getMfeYear(getyear)
        cy.getMfeMonth(getMonth)
        this.getMfeDay(getDay)


    }


    mfeDatePicker(date) {
        this.setMfeDateFormat(this.getYear(date),
            this.getMonth(date),
            this.getDay(date))
    }

} export default Datepicker;