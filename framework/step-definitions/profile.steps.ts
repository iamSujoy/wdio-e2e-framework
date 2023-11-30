import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import loginPage from '../pages/login.page.js';
import dashboardPage from '../pages/dashboard.page.js';
import guidePage from '../pages/guide.page.js';
import myinfoPage from '../pages/myinfo.page.js';
import user from '../data/userInfo.js'

Given(`User opens login page on browser`, async () => {
    await loginPage.open()
});

When(`User enters valid credentials and clicks on Login`, async () => {
    await expect(await loginPage.login(user.username, user.password)).toBeTruthy()
});

When(`User is on Dashboard page`, async () => {
    await expect(await dashboardPage.getHeaderText()).toEqual("Dashboard")
});

When(`User navigates to MyInfo page`, async () => {
    await expect(await dashboardPage.navigateToMyInfo()).toBeTruthy()
    await expect(await myinfoPage.getHeaderText()).toEqual("PIM")
});

When(`User updates First Name`, async () => {
    await expect(await myinfoPage.updateFirstName(user.firstName)).toEqual(user.firstName)
});

When(`User updates Last Name`, async () => {
    await expect(await myinfoPage.updateLastName(user.lastName)).toEqual(user.lastName)
});

When(`User updates Employee ID`, async () => {
    await expect(await myinfoPage.updateEmployeeId(user.employeeId)).toEqual(user.employeeId)
});

When(`User updates Nationality`, async () => {
    await expect(await myinfoPage.updateNationality(user.nationality)).toBeTruthy()
});

Then(`User should be able to save the informations successfully`, async () => {
    await expect(await myinfoPage.save()).toBeTruthy()
});

When(`User clicks on Help icon`, async () => {
    await expect(await dashboardPage.clickHelpIcon()).toBeTruthy()
});

Then(`User should be redirected to a new OrangeHRM Guide tab`, async () => {
    await expect(await guidePage.getTotalGuides()).toBe(4)
});