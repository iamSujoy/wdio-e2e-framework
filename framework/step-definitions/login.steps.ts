import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import loginPage from '../pages/login.page.js';
import dashboardPage from '../pages/dashboard.page.js';


Given(`User is on Login page`, async () => {
    await loginPage.open()
    await expect(await loginPage.getHeaderText()).toEqual("Login")
});

When(`User logs in with {string} and {string}`, async (username: string, password: string) => {
    await expect(await loginPage.login(username, password)).toBeTruthy()
});

Then(`User should be on Dashboard page`, async () => {
    await expect(await dashboardPage.getHeaderText()).toEqual("Dashboard")
});

Then(`User should be able to logout by clicking on Logout from profile options`, async () => {
    await expect(await dashboardPage.logout()).toBeTruthy()
});