describe('Testing Connection with Selenoid browser 1', () => {
    before(() => {

    });

    it('Checking Browser 1.', () => {
        browser.url('http://bing.com');
        browser.pause(20 * 1000)
        console.log('Browse check passed');
    });
})