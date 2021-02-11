import { truncate } from "fs";

export const report_portal_conf = {
    reportPortalClientConfig: {
        // report portal settings
        token: '93c5698c-f56d-4c3a-939d-d2eaf5c9ca33',
        endpoint: 'http://192.168.88.230:8085/api/v1',
        launch: 'superadmin_TEST_EXAMPLE_macbook',
        project: 'superadmin_personal',
        mode: 'DEFAULT',
        debug: false,
        description: 'Launch description text',
        attributes: [{ key: 'tag', value: 'foo' }],
        headers: { foo: 'bar' }, // optional headers for internal http client
    },
    reportSeleniumCommands: true, // add selenium commands to log
    seleniumCommandsLogLevel: 'debug', // log level for selenium commands
    autoAttachScreenshots: true, // automatically add screenshots
    screenshotsLogLevel: 'info', // log level for screenshots
    parseTagsFromTestTitle: true, // parse strings like `@foo` from titles and add to Report Portal
    cucumberNestedSteps: false, // report cucumber steps as Report Portal steps
    autoAttachCucumberFeatureToScenario: false, // requires cucumberNestedSteps to be true for use
};