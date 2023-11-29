import { WaitOptions } from "../types/types";
import { browser } from '@wdio/globals'
import { Key } from 'webdriverio'

export default class ElementUtils {

    static async getText(element: Promise<WebdriverIO.Element>): Promise<string> {
        return await (await element).getText();
    }

    static async getValue(element: Promise<WebdriverIO.Element>): Promise<string | number> {
        return await (await element).getValue();
    }

    /**
    * clear existing value manually, then set value and also return the value
    * of that element
    */
    static async setValue(element: Promise<WebdriverIO.Element>, value: string | number): Promise<string | number> {
        await this.click(element)
        await browser.action('key')
            .down(Key.Ctrl)
            .down('a')
            .down(Key.Backspace)
            .up(Key.Backspace)
            .up('a')
            .up(Key.Ctrl)
            .perform()
        await (await element).setValue(value)
        return await this.getValue(element)
    }

    static async click(element: Promise<WebdriverIO.Element>): Promise<void> {
        await (await element).click()
    }

    static async waitForElementToExist(element: Promise<WebdriverIO.Element>, options?: WaitOptions): Promise<void> {
        await (await element).waitForExist(options ?? undefined)
    }
}