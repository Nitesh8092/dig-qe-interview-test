import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    async waitAndClick(element) {
        await element.waitForDisplayed({ timeout: 5000 })
        await element.click()
    }

    async waitAndType(element, value) {
        await element.waitForDisplayed({ timeout: 5000 })
        await element.setValue(value)
    }
}