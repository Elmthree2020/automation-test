import { Given, When, Then } from 'cucumber';
import nav from '../support/pages/Nav';
import mortgagesNavComponent from '../support/pages/MortgagesNavComponent';
import ourMortgageRatesPage from '../support/pages/OurMortgageRatesPage';
import readyToApplyPage from '../support/pages/ReadyToApplyPage';
import { expect } from 'chai';

const timeout = 10000;

Given(/^I open the url "(.*)"$/, function(url) {
    browser.url(url);
    // browser.windowHandleMaximize();
});

When(/^I navigate to Mortgage rates page$/, function() {
    nav.hoverMortgagesLink();
    mortgagesNavComponent.clickMortgagesRates();
});


When(/^I search for the mortgage rates with the following details:/, function(table) {
    const mortgageDetails = table.hashes()[0];
    if (mortgageDetails['Nationwide mortgage'] === 'No') {
        ourMortgageRatesPage.dontHaveMortgageButton.waitForVisible(timeout);
        ourMortgageRatesPage.dontHaveMortgageButton.click();
    }
    // not handling other cases here for now

    if (mortgageDetails['Type of mortgage'] === 'Changing lender') {
        ourMortgageRatesPage.changingLenderButton.waitForVisible(timeout);
        ourMortgageRatesPage.changingLenderButton.click();
    }
    // not handling other cases here for now

    ourMortgageRatesPage.propertyValueTextField.waitForVisible(timeout);
    ourMortgageRatesPage.propertyValueTextField.addValue(mortgageDetails['Property value']);

    ourMortgageRatesPage.mortgageAmountTextField.waitForVisible(timeout);
    ourMortgageRatesPage.mortgageAmountTextField.addValue(mortgageDetails['Mortgage amount']);

    ourMortgageRatesPage.mortgageTermTextField.waitForVisible(timeout);
    ourMortgageRatesPage.mortgageTermTextField.addValue(mortgageDetails['Term']);

    ourMortgageRatesPage.findMortgageRateButton.waitForVisible(timeout);
    ourMortgageRatesPage.findMortgageRateButton.click();
});

Then(/^the following Mortgage rates results should be returned:$/, function(table) {
    for (let expectedResult of table.hashes()) {
        ourMortgageRatesPage.assertSearchRowExists(expectedResult['Expected Results']);    
    }
});

When(/^I select apply for 5yr fixed product$/, function() {
    ourMortgageRatesPage.clickMoreInfoAndApplyForFiveYrFixedMortgageRate();
    ourMortgageRatesPage.applyForFiveYrFixedMortgageRate();
});

Then(/^I should progress to the Ready to Apply page$/, function() {
    expect(readyToApplyPage.assertHeadingText('Start your Remortgage application')).to.be.true;
});