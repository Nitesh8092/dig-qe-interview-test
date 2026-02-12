import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
import Page from './page.js'

class LoginPage extends Page {
    get username () { return $('#username') }
    get password () { return $('#password') }
    get submit () { return $('button[type="submit"]') }
    get flash () { return $('#flash') }

    async login (user, pass) {
        await this.waitAndType(this.username, user)
        await this.waitAndType(this.password, pass)
        await this.waitAndClick(this.submit)
    }

    open () {
        return super.open('login')
    }
}

export default new LoginPage()