import Page from './page.js'

class InputsPage extends Page {
    get input () { return $('input[type="number"]') }

    async typeNumber(value) {
        await this.input.waitForDisplayed()
        await this.input.setValue(value)
    }

    open () {
        return super.open('inputs')
    }
}

export default new InputsPage()