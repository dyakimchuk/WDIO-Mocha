describe('Testing Connection with Selenoid browser 3', () => {
    before(() => {

    });

    it('Checking Browser 3.', () => {
        browser.url('http://duckduckgo.com');
        browser.pause(20 * 1000)
        console.log('Browse check passed');
    });
})