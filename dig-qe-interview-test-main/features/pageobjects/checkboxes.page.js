import Page from './page.js'

class CheckboxesPage extends Page {
    get checkboxes () {
        return $$('#checkboxes input')
    }

    async check(index) {
        const box = this.checkboxes[index]
        await box.waitForExist()
        if (!await box.isSelected()) {
            await box.click()
        }
    }

    open () {
        return super.open('checkboxes')
    }
}

export default new CheckboxesPage()