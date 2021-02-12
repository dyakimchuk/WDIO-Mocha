describe('Google.', () => {
    before(() => {
        browser.url('https://github.com');
        browser.pause(3000)
    });
    it('Checking Browser.', () => {
        browser.url('https://www.googlezaqwerty.com');
        console.log('Browse check passed');
        browser.pause(3000)
    });
});