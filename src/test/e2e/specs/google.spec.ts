describe('Google.', () => {
    before(() => {
        browser.url('https://github.com');
        browser.pause(3000)
    });
    it('Checking Browser.', () => {
        browser.url('https://www.google.com');
        console.log('pizdaaaaaaa!!!!!')
    });
});