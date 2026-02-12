import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/login.page.js'

Given('I am on the login page', async () => {
    await LoginPage.open()
})

When('I login with {string} and {string}', async (user, pass) => {
    await LoginPage.login(user, pass)
})

Then('I should see a flash message', async () => {
    await LoginPage.flash.waitForDisplayed()
})