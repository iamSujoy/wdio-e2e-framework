import { $, $$ } from '@wdio/globals'
import { browser } from '@wdio/globals';

import Page from './page.js';
import ElementUtils from '../utils/ElementUtils.js'


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
            if (nationality === 'IN') {
                // click 3 times I in keyboard
                await browser.action('key')
                    .down('i')
                    .down('i')
                    .down('i')
                    .up('i')
                    .up('i')
                    .up('i')
                    .perform()

            } else {
                // click 1 times O in keyboard
                await browser.action('key')
                    .down('o')
                    .up('o')
                    .perform()
            }
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    public async updateEmployeeId(employeeId: string): Promise<string | number | undefined> {
        try {
            return await ElementUtils.setValue(this.employeeIdInput, employeeId)
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    public async updateLastName(lastName: string): Promise<string | number | undefined> {
        try {
            return await ElementUtils.setValue(this.lastNameInput, lastName)
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    public async updateFirstName(firstName: string): Promise<string | number | undefined> {
        try {
            return await ElementUtils.setValue(this.firstNameInput, firstName)
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    public async save(): Promise<boolean> {
        try {
            await ElementUtils.click(this.saveButton1)
            await ElementUtils.waitForElementToExist(this.successText)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

}


export default new MyInfoPage();