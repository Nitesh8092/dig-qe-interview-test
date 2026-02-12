import Page from './page.js'

class DropdownPage extends Page {
    get dropdown () { return $('#dropdown') }

    async select(option) {
        await this.dropdown.waitForDisplayed()
        await this.dropdown.selectByVisibleText(option)
    }

    open () {
        return super.open('dropdown')
    }
}

export default new DropdownPage()