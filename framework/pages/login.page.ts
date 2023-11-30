import { $ } from '@wdio/globals'

import Page from './page.js';
import ElementUtils from '../utils/ElementUtils.js'

class LoginPage extends Page {

    public get usernameInput() { return $("//input[@name='username']") }
    public get passwordInput() { return $("//input[@name='password']") }
    public get loginButton() { return $("//button[@type='submit']") }
    public get header() { return $("//h5") }

    public async getHeaderText(): Promise<string> {
        return await ElementUtils.getText(this.header)
    }

    public async login(username: string, password: string): Promise<boolean> {
        try {
            await ElementUtils.setValue(this.usernameInput, username)
            await ElementUtils.setValue(this.passwordInput, password)
            await ElementUtils.click(this.loginButton)
            return true
        } catch (error) {
            this.raiseError(error.message ?? 'Error in LoginPage.login()')
        }
    }

}

export default new LoginPage();
