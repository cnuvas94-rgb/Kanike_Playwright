
import { test, expect } from '@playwright/test';

const credentials = {
  set1: { username: "Admin", password: "admin123" },
  set2: { username: "InvalidUser", password: "InvalidPass" },
}

for(let data in credentials) {
  test(`Verify login Functionality -${data}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await page.locator('input[name="username"]').fill(credentials[data].username);
    await page.locator('input[name="password"]').fill(credentials[data].password);
    await page.getByRole('button', { name: 'Login' }).click();
  
});
}
