
import { test, expect } from '@playwright/test';

test('Verify methods', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByText('Forgot your password?')).toBeVisible();
    await expect(page.getByText('Forgot your password? ')).toBeEnabled();
    await page.getByText('Forgot your password? ').click();

});
test('Verify methods1', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await expect(page.getByLabel('Username')).toBeVisible();
    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');
    

});