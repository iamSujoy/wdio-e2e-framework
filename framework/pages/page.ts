import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open(path?: string) {
        let url = browser.options.baseUrl ?? ''
        if (url) {
            url = path ? `${url}/${path}` : url
            await browser.url(url)
            await browser.maximizeWindow()
        } else {
            throw Error('Invalid URL !!!')
        }
    }

}
