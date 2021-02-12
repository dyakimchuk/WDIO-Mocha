// const assert = require('assert')

describe('Suite 1 With performance.', () => {
    before(() => {
        browser.enablePerformanceAudits();
    });

    it('Checking Browser.', () => {
        browser.url('https://automationteststore.com');
        console.log('Browse check passed');
    });

    it('Check Wikipedia Perfomance.', () => {
        browser.url('https://wikipedia.org');
        console.log('Browse check passed');
        let metrics = browser.getMetrics();
        let score = browser.getPerformanceScore(); // get Lighthouse Performance score


        metrics = browser.getMetrics();
        score = browser.getPerformanceScore();
        console.log('Page Score is:', score);
        console.log('Extendet Metrics:', metrics);
    });

    after(() => {
        browser.disablePerformanceAudits()
    })

});