import { fstat } from "fs";

describe('Based on HeisenBug lections. Buy red duck.', () => {
    before(() => {
        //browser.url('http://dyetetica.net/en');
    });
    it('Should be able to buy item.', () => {
        browser.url('/rubber-ducks-c-1/red-duck-p-3');
        //browser.pause(3000);
    });
    after(() => {

        browser.saveScreenshot('./screenshots/heisen/duck_' + browser.sessionId + '.png');
        //console.log('BROWSER SESSION ID: ', browser.sessionId);
        console.log('BROWSER CAPABILITIES: ', browser.capabilities);
        // console.log('BROWSER OPTIONS: ', browser.options);
    });
});