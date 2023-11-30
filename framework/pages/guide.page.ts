import { $$ } from '@wdio/globals'

import Page from './page.js';
import BrowserUtils from '../utils/BrowserUtils.js';

class GuidePage extends Page {

    public get guides() { return $$("//span[@class='blocks-item-title']") }

    public async getTotalGuides(): Promise<number> {
        try {
            await BrowserUtils.switchToGuideTab()
            const n = (await this.guides).length
            await BrowserUtils.switchToMainTab()
            return n
        } catch (error) {
            console.log(error)
            return -1
        }
    }

}

export default new GuidePage();