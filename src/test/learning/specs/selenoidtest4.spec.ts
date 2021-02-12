describe('Testing Connection with Selenoid browser 4', () => {
    before(() => {

    });

    it('Checking Browser 4.', () => {
        browser.url('http://yahoo.com');
        browser.pause(20 * 1000)
        console.log('Browse check passed');
    });
})