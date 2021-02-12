describe('Testing Connection with Selenoid browser 2', () => {
    before(() => {

    });

    it('Checking Browser 2.', () => {
        browser.url('http://google.com');
        browser.pause(20 * 1000)
        console.log('Browse check passed');
    });
})