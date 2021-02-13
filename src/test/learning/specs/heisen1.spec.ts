describe('Based on HeisenBug lections.', () => {
    before(() => {

    });
    it('Checking Browser.', () => {
        browser.url('https://www.bing.com');
        console.log('Browse check passed');
        browser.pause(3000)
    });
    after(() => {

    });
});