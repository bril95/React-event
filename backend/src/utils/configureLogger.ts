import log4js from "log4js";

export default function loggerSetup() {
    log4js.configure({
        appenders: {
            console: {
                type: 'console'
            }
        },
        categories: {
            default: { appenders: ['console'], level: 'info' }
        }
    });
}