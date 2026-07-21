const { test, expect } = require('@playwright/test');

test.describe('Checkbox tests - skeleton', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
  });

  test('checks the registration checkbox', async ({ page }) => {
    const checkbox = page.locator('//input[@type="checkbox"]');
    const isChecked = await checkbox.isChecked();

    if (!isChecked) {
      await checkbox.check();
    }

    await expect(checkbox).toBeChecked();
  });
});

test('checks the registration checkbox', async ({ page, browserName}) => {
    if(browserName == 'chromium'){
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    await page.locator('//input[@type="checkbox"]').check();
    await expect(page.locator('//input[@type="checkbox"]')).toBeChecked({timeout: 5000});
    await expect(page.locator('//input[@type="checkbox"]')).toBeEnabled();
    await page.waitForTimeout(2000);

    }


});

test('unchecks the registration checkbox', async ({ page}) => {
        await page.goto('https://the-internet.herokuapp.com/')
        await page.locator('//a[text()="A/B Testing"]').click();

});
