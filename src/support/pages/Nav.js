class Nav {
    get mortgagesLink() {
        return browser.element('#MortgagesNavItem');
    }

    hoverMortgagesLink() {
        this.mortgagesLink.waitForVisible(40000);
        this.mortgagesLink.moveToObject();
    }
}

export default new Nav();