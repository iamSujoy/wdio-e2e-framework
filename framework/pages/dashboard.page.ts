import { $ } from '@wdio/globals'

import Page from './page.js';
import ElementUtils from '../utils/ElementUtils.js'


class DashboardPage extends Page {

    public get header() { return $("//h6") }
    public get myInfo() { return $("//span[text()='My Info']") }
    public get helpButton() { return $("//button[@title='Help']") }
    public get profileName() { return $("//p[@class='oxd-userdropdown-name']") }
    public get logoutButton() { return $("//a[text()='Logout']") }

    public async getHeaderText(): Promise<string> {
        return await ElementUtils.getText(this.header)
    }

    public async logout(): Promise<boolean> {
        try {
            await ElementUtils.click(this.profileName)
            await ElementUtils.click(this.logoutButton)
            return true
        } catch (error) {
            this.raiseError(error.message ?? 'Error in DashboardPage.logout()')
        }
    }

    public async clickHelpIcon(): Promise<boolean> {
        try {
            await ElementUtils.click(this.helpButton)
            return true
        } catch (error) {
            this.raiseError(error.message ?? 'Error in DashboardPage.logout()')
        }
    }

    public async navigateToMyInfo(): Promise<boolean> {
        try {
            await ElementUtils.click(this.myInfo)
            return true
        } catch (error) {
            this.raiseError(error.message ?? 'Error in DashboardPage.navigateToMyInfo()')
        }
    }

}

export default new DashboardPage();
