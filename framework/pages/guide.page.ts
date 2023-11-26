import { $$ } from '@wdio/globals'
import { browser } from '@wdio/globals'

import Page from './page.js';
import { GUIDE_WINDOW, MAIN_WINDOW } from '../constants/constants.js'

class GuidePage extends Page {

    public get guides() { return $$("//span[@class='blocks-item-title']") }

    public async getTotalGuides(): Promise<number> {
        try {
            await browser.switchWindow(GUIDE_WINDOW)
            const n: number = (await this.guides).length
            await browser.switchWindow(MAIN_WINDOW)
            return n
        } catch (error) {
            console.log(error)
            return -1
        }
    }

}

export default new GuidePage();