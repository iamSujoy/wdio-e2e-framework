import { $, $$ } from '@wdio/globals'

import Page from './page.js';
import ElementUtils from '../utils/ElementUtils.js'
import BrowserUtils from '../utils/BrowserUtils.js';


class MyInfoPage extends Page {

    public get header() { return $("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']") }
    public get firstNameInput() { return $("//input[@name='firstName']") }
    public get lastNameInput() { return $("//input[@name='lastName']") }
    public get nationalitySelect(): any { return $$("//div[@class='oxd-select-text-input']")[0] }
    public get employeeIdInput(): any { return $$("//input[@class='oxd-input oxd-input--active']")[1] }
    public get dateOfBirth(): any { return $$("//input[@placeholder='yyyy-mm-dd']")[1] }
    public get saveButton1(): any { return $$("//button[@type='submit']")[0] }
    public get successText() { return $("//p[text()='Success']") }


    public async getHeaderText(): Promise<string> {
        return await ElementUtils.getText(this.header)
    }

    public async updateNationality(nationality: string): Promise<boolean> {
        try {
            await ElementUtils.click(this.nationalitySelect)
            if (nationality.toLowerCase() === 'india') {
                await BrowserUtils.selectIndia()
            } else {
                await BrowserUtils.selectOtherCountry()
            }
            return true
        } catch (error) {
            this.raiseError(error.message ?? 'Error in MyInfoPage.updateNationality()')
        }
    }

    public async updateEmployeeId(employeeId: string): Promise<string | number | undefined> {
        try {
            return await ElementUtils.setValue(this.employeeIdInput, employeeId)
        } catch (error) {
            this.raiseError(error.message ?? 'Error in MyInfoPage.updateEmployeeId()')
        }
    }

    public async updateLastName(lastName: string): Promise<string | number | undefined> {
        try {
            return await ElementUtils.setValue(this.lastNameInput, lastName)
        } catch (error) {
            this.raiseError(error.message ?? 'Error in MyInfoPage.updateLastName()')
        }
    }

    public async updateFirstName(firstName: string): Promise<string | number | undefined> {
        try {
            return await ElementUtils.setValue(this.firstNameInput, firstName)
        } catch (error) {
            this.raiseError(error.message ?? 'Error in MyInfoPage.updateFirstName()')
        }
    }

    public async save(): Promise<boolean> {
        try {
            await ElementUtils.click(this.saveButton1)
            await ElementUtils.waitForElementToExist(this.successText)
            return true
        } catch (error) {
            this.raiseError(error.message ?? 'Error in MyInfoPage.save()')
        }
    }

}


export default new MyInfoPage();