class OurMortgageRatesPage {
    get dontHaveMortgageButton() {
        return browser.element('#selectorItemHaveNationwideMortgage1');
    }
    
    get changingLenderButton() {
        return browser.element('#selectorItemNationwideMortgageTypeNo2');
    }
    
    get propertyValueTextField() {
        return browser.element('#SearchPropertyValue');
    }
    
    get mortgageAmountTextField() {
        return browser.element('#SearchMortgageAmount');
    }
    
    get mortgageTermTextField() {
        return browser.element('#SearchMortgageTerm');
    }
    
    get findMortgageRateButton() {
        return browser.element('#myButton');
    }

    get fiveYrFixedMortgageRateResultRow() {
        const selector = '[data-product-name="5 yr  Fixed "]';
        browser.waitForVisible(selector, 10000);
        return $$(selector);
    }

    clickMoreInfoAndApplyForFiveYrFixedMortgageRate() {
        this.fiveYrFixedMortgageRateResultRow[0].click('a.toggleMoreDetails');
    }

    applyForFiveYrFixedMortgageRate() {
        const selector = 'a[data-productname^="5 yr Fixed"]';
        browser.waitForVisible(selector);    
        browser.moveToObject(selector);    
        browser.click(selector);    
    }

    assertSearchRowExists(mortgageRateText) {
        browser.waitUntil(() => $$('table tbody tr').some(element => element.getText().includes(mortgageRateText)), 
            10000, `did not find row with rate ${mortgageRateText}`, 250
        );     
    }
}

export default new OurMortgageRatesPage();