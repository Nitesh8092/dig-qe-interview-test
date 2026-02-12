import { Given, Then } from '@wdio/cucumber-framework'

Given('I authenticate with username {string} and password {string}', async (user, pass) => {
    await browser.url(`https://${user}:${pass}@the-internet.herokuapp.com/basic_auth`)
})

Then('I should be logged in successfully', async () => {
    const text = await $('p').getText()
    expect(text).toContain('Congratulations')
})