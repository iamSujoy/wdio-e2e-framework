import { browser } from '@wdio/globals'
import { Key } from 'webdriverio'

import { GUIDE_WINDOW, MAIN_WINDOW } from '../constants/constants.js'

export default class BrowserUtils {

    public static async clearValueManually(): Promise<void> {
        await browser.action('key')
            .down(Key.Ctrl)
            .down('a')
            .down(Key.Backspace)
            .up(Key.Backspace)
            .up('a')
            .up(Key.Ctrl)
            .perform()
    }

    public static async selectIndia(): Promise<void> {
        // click 3 times 'I' in keyboard
        await browser.action('key')
            .down('i')
            .down('i')
            .down('i')
            .up('i')
            .up('i')
            .up('i')
            .perform()
    }

    public static async selectOtherCountry(): Promise<void> {
        // click 1 times 'O' in keyboard
        await browser.action('key')
            .down('o')
            .up('o')
            .perform()
    }

    public static async switchToGuideTab(): Promise<void> {
        await browser.switchWindow(GUIDE_WINDOW)
    }

    public static async switchToMainTab(): Promise<void> {
        await browser.switchWindow(MAIN_WINDOW)
    }
}
