class MortgagesNavComponent {
    get container() {
        return browser.element('#MortgagesNavItem');
    }
    
    get mortgagesRatesLink() {
        return this.container.element('a[href="/products/mortgages/our-mortgage-rates"]');
    }

    clickMortgagesRates() {
        this.mortgagesRatesLink.waitForVisible(30000);
        this.mortgagesRatesLink.click();
    }
}

export default new MortgagesNavComponent();