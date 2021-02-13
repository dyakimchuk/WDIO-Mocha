import { join } from 'path';
import { report_portal_conf } from './credentials/reportportal.conf';
const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./dist/**/*.spec.js'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    // '--headless=true'
                ]
            },

            'selenoid:options': {
                enableVNC: true
            }
        },
    ],
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    //baseUrl: 'http://automationpractice.com',
    baseUrl: 'http://dyetetica.net/en/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        timeout: 30000,
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
        [reportportal, report_portal_conf], 'dot',
    ],
    services: [
        [
            'image-comparison',
            {
                baselineFolder: join(process.cwd(), './screenshots/reference/'),
                formatImageName: '{tag}-{logName}-{width}x{height}',
                screenshotPath: join(process.cwd(), './screenshots/'),
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,
            },
        ],
        'chromedriver', //need to be comment out for use on remote machine
        [RpService, {}],
    ],
    beforeSession() {
        require('expect-webdriverio').setOptions({ wait: 5000 });
    },
    before() {
        browser.setWindowSize(1280, 720);
    },
    afterTest: function (test: any, context: any, { error }: any) {
        if (error) {
            browser.takeScreenshot();
        }
    },
};
