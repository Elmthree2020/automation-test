class ReadyToApplyPage {
    get heading() {
        return browser.element('h1.headingSize02');
    }

    assertHeadingText(expectedValue) {
        this.heading.waitForVisible();
        return this.heading.getText().includes(expectedValue);
    }
}

export default new ReadyToApplyPage();