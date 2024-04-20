// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import AppexNow from "../pages/AppexNowPage/AppexNowPage"
import moment from "moment";
import Datepicker from "../pages/DatePicker/DatePicker";
import SignUp from "../pages/SignUpPage/SignUpPage"
const appexNow = new AppexNow()
const marketplace = new SignUp()
const datePicker = new Datepicker();

Cypress.Commands.add('getPageData', (filePath) => {
    cy.readFile('cypress/pages/1-CreatingQuotePage/PageData.json').then((pageData)=>{
       
        return pageData
    })
    })
    Cypress.Commands.add("flex", (playground) => {
      cy.window()
        .then((win) => {
          cy.stub(win, "open", (url) => {
            /* eslint-disable no-param-reassign */
            win.location.href = Cypress.env("calculation-engine-url");
          });
        })
        .as("Flex");
      cy.xpath(playground)
      .click();
      cy.get("@Flex");
      cy.url().should("eq", Cypress.env("calculation-engine-url"));
    });
Cypress.Commands.add('getPageLocator', (filePath) => {
        cy.readFile('cypress/pages/1-CreatingQuotePage/PageData.json').then((pagelocator)=>{
            return pagelocator
        })
        })

        const {
          MailSlurp,
          PhoneNumberProjectionPhoneCountryEnum,
        } = require("mailslurp-client");
        // set your api key with an environment variable `CYPRESS_APIKEY` or configure using `env` property in config file
        // (cypress prefixes environment variables with CYPRESS)
        const apiKeys = [
          "8ec42bac83c5ebc48bcdd437f11ff698003f100eafefa1139b85218f8122e597",
          "08da35785f583aa48fabbe9d729e051f306e2771854f08de2ed87fee0135db38",
          "96ecac52dc0957a83dfcfb90551e134dcd4c000f375c495bb0fbf4bf24ac758b",
          "100ba786e814a50ef10e6f134429c443dbae69c2d869b72183b43b11776d5552",
          "fbe8d6aaa5e35bc75429e92276bae6d362e1b7d076b539a5e5e8e33a32bdb3a3",
          "e77d09a1fe4811353fdb5af8ef90ed70c12323d8588671e188857547d7807960",
          "7fd08ee362e2674c660ca12e45b522620f546e4f5bdc579948c592a2dfc6fb97",
          "4593792303efcb1208e8b8d82880ce0706982f12363517a256f73357b55656a1",
          "4948c1e764dad38d4ab4332a07330cce29c74c8905417c6029b221b57bb9777c",
          "2bc52e8dd7c168700d360cdc9cd55f1c90383ee142d43c8677ae208072e923c4",
          "8884b8435ec9f0813b6b04b6ddc45201f184aa1534129106e7934a1cb74ea548",
          "eb6009c513d4d6d9fb05019cc8c87c0affe3ff3af827ca584555f87f9c2071c1",
          "3bb302a15d0b7c4c6c85b6610b7321f7d2d5373be93a35052aa1a97129d2b1ab",
          "bfed3edfa940d0cf98b428f756acf0804c28d953d05f082939e372dee8ccb2e2",
          "4948c1e764dad38d4ab4332a07330cce29c74c8905417c6029b221b57bb9777c",
          "bbdb7863b389ece2bd35f11fa157cbdb37c662b4c26898e235874a996c0abcb8",
          "f82b58f85726b9fdbe2f2f2e1604b0b84d20c4ae652e6456932e25688142a101",
          "894d22712dd368481bb60946671d2270e2a6f15cebb74ebb25be952d3a78df26",
          "684a35bab6b7e60fa83a80dba1831de2ba2dcb216c46cc87aaf7f567c1287dfc",
          "1c2994f61e705989dca9e870b8b5b8dc028e0db0f2c6d11831146bddd5a61fee",
          "f55789d46df2ca674d105127939faf9a3f5e77f042f01596b365cf43b1e6ca7c",
        ];
        const externalRefrenceId = 0 + Math.floor(Math.random() * 22);
        const apiKey = apiKeys[externalRefrenceId];
        const mailslurp = new MailSlurp({ apiKey });
        
        Cypress.Commands.add("createInbox", () => {
          return mailslurp.createInbox();
        });
        
        Cypress.Commands.add("waitForLatestEmail", (inboxId) => {
          // how long we should hold connection waiting for an email to arrive
          const timeoutMillis = 30000;
          const DESC = true;
          return mailslurp.waitForLatestEmail(inboxId, timeoutMillis, DESC);
        });
        
        Cypress.Commands.add("waitForNthEmail", (inboxId) => {
          // how long we should hold connection waiting for an email to arrive
          const timeoutMillis = 30000;
          const index = 1;
          return mailslurp.waitForNthEmail(inboxId, index);
        });
        
// cypress/support/commands.js

Cypress.Commands.add('loadDataFromFiles', (dataFiles) => {
    const loadedData = {};
  
    return Cypress.Promise.all(
      dataFiles.map((filePath) => {
        return cy.fixture(filePath).then((data) => {
          const key = Cypress._.last(filePath.split('/')).replace('.json', '');
          loadedData[key] = data;
        });
      })
    ).then(() => loadedData);
  });
  Cypress.Commands.add("Login", (uName, pwd) => {
    cy.session([uName, pwd], () => {
      appexNow.getBaseUrl();
      marketplace.accountButton();
      marketplace.createAccount("Login");
      marketplace.userName();
      marketplace.password();
      appexNow.validateSubscribedApps();
      appexNow.validatePlayground();
    });
    cy.visit(Cypress.env("flex"));
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Disable Cypress automatic test failure for uncaught exceptions
    return false;
  });


  Cypress.Commands.add("selectYear", (yearName) => {
    const currentYear = new Date().getFullYear();
    datePicker.getYearName().then(($year) => {
      if ($year.text() === yearName) {
        cy.log(yearName, "year name is selected");
        return;
      } else {
        if (yearName < currentYear) {
          datePicker.getNevigateBack().click();
        } else if (yearName > currentYear) {
          datePicker.getNevigateForward().click();
        }
      }
      cy.selectYear(yearName);
    });
  });
  Cypress.Commands.add("chooseYear", (yearName) => {
    datePicker.getYearName().click();
    datePicker.selectYearName(yearName).click();
    cy.wait(1000);
  });
  Cypress.Commands.add("selectMonth", (MontName, yearName) => {
    // eslint-disable-next-line prefer-const
    let currentMonth = new Date().getMonth() + 1;
    // eslint-disable-next-line prefer-const
    const currentYear = new Date().getFullYear();
  
    datePicker.getMonthName().then(($month) => {
      if ($month.text().includes(MontName)) {
        cy.log(MontName, "month name is selected");
        return;
      } else {
        datePicker.getMonthName().then(($mon) => {
          const givenMonth = datePicker.getMonthNameindex(MontName);
          const getMonth = moment($mon).format("MMMM");
          const actualMonth = datePicker.getMonthNameindex(getMonth);
          console.log(
            givenMonth,
            "greter",
            actualMonth,
            "and",
            currentYear,
            "gretaerthen",
            yearName
          );
          if (givenMonth >= actualMonth && currentYear <= yearName) {
            datePicker.getNevigateForward().click();
          } else if (givenMonth >= actualMonth && currentYear >= yearName) {
            datePicker.getNevigateBack().click();
          }
        });
      }
      cy.selectMonth(MontName, yearName);
    });
  });
  Cypress.Commands.add("selectDay", (DayName) => {
    cy.wait(1000);
    datePicker.getClenderDays(DayName).click();
    cy.log(DayName);
  });
  Cypress.Commands.add("chooseMonth", (MontName, yearName) => {
    datePicker.getMonthName().then(($month) => {
      if ($month.text().includes(MontName)) {
        cy.log(MontName, "month name is selected");
        return;
      } else {
        datePicker.getMonthName().then(($mon) => {
          const givenMonth = datePicker.getMonthNameindex(MontName);
          const getMonth = moment($mon).format("MMMM");
          const actualMonth = datePicker.getMonthNameindex(getMonth);
          debugger;
          if (givenMonth < actualMonth) {
            datePicker.getNevigateBack().click();
          } else if (givenMonth > actualMonth) {
            datePicker.getNevigateForward().click();
          }
        });
      }
      cy.chooseMonth(MontName, yearName);
    });
  });
  
  Cypress.Commands.add("QuotationToolMonth", (MontName) => {
    datePicker.getQuotationToolMonth().then(($month) => {
      const text = $month.text();
      const getMonthFromClender = text.substring(0, text.indexOf(" "));
      cy.log(getMonthFromClender);
      if (getMonthFromClender.includes(MontName)) {
        cy.log(MontName, "month name is selected");
        return;
      } else {
        datePicker.getQuotationToolMonth().then(($mon) => {
          const text = $month.text();
          const getMonthFromClender = text.substring(0, text.indexOf(" "));
          cy.log(getMonthFromClender);
          const givenMonth = datePicker.getMonthNameindex(MontName);
          const getMonth = moment($mon).format("MMMM");
          const actualMonth = datePicker.getMonthNameindex(getMonth);
  
          if (givenMonth > actualMonth) {
            datePicker.getNevigateForward().click();
          } else if (givenMonth < actualMonth) {
            datePicker.getNevigateBack().click();
          }
        });
      }
      cy.QuotationToolMonth(MontName);
    });
  });
  // used for Mfe Date Picker //
  Cypress.Commands.add("getMfeMonth", (MontName) => {
    datePicker.getMfeMonth().then(($month) => {
      const text = $month.text();
      const getMonthFromClender = text.substring(0, text.indexOf(" "));
      cy.log(getMonthFromClender);
      if ($month.text().includes(MontName)) {
        cy.log(MontName, "month name is selected");
        return;
      } else {
        datePicker.getMfeMonth().then(($mon) => {
          const text = $month.text();
          const getMonthFromClender = text.substring(0, text.indexOf(" "));
          cy.log(getMonthFromClender);
          const givenMonth = datePicker.getMonthNameindex(MontName);
          const getMonth = moment($mon).format("MMMM");
          const actualMonth = datePicker.getMonthNameindex(getMonth);
  
          if (givenMonth < actualMonth) {
            datePicker.getNevigateForward().click();
          } else if (givenMonth > actualMonth) {
            datePicker.getNevigateBack().click();
          }
        });
      }
      cy.getMfeMonth(MontName);
    });
  });
  Cypress.Commands.add("DatePickers", (date) => {
    datePicker.DatePicker(date);
  });
  
  Cypress.Commands.add("QuotationToolDatePicker", (date) => {
    datePicker.quotationToolDatePicker(date);
  });
  
  Cypress.Commands.add("mfeDatePicker", (date) => {
    datePicker.mfeDatePicker(date);
  });
  Cypress.Commands.add("datePicker", (date) => {
    datePicker.datePickers(date);
  });

  Cypress.Commands.add("Mode", (mode, text) => {
    const log = Cypress.log({
      name: "Mode",
      // shorter name for the Command Log
      displayName: "Step",
      message: `Enter ${mode} ${text}`,
      consoleProps: () => {
        return {
          mode: mode,
  
          // 'Session Storage': window.sessionStorage,
        };
      },
    });
  });