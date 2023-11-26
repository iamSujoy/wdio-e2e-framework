import { WaitOptions } from "../types/types";

export default class ElementUtils {

    static async getText(element: Promise<WebdriverIO.Element>): Promise<string> {
        return (await element).getText();
    }

    static async setValue(element: Promise<WebdriverIO.Element>, value: string | number): Promise<void> {
        (await element).setValue(value)
    }

    static async click(element: Promise<WebdriverIO.Element>): Promise<void> {
        (await element).click()
    }

    static async waitForElementToExist(element: Promise<WebdriverIO.Element>, options?: WaitOptions): Promise<void> {
        if (!options) {
            (await element).waitForExist()
        } else {
            (await element).waitForExist(options)
        }

    }
}