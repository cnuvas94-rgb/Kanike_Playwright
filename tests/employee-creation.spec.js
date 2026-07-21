const { test, expect } = require('@playwright/test');

test('Create a new employee from PIM add employee flow', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page.locator('input[name="username"]')).toBeVisible();
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
  await page.getByRole('link', { name: 'PIM' }).click();

  await expect(page).toHaveURL(/viewEmployeeList/);
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page).toHaveURL(/addEmployee/);
  await page.getByRole('textbox', { name: 'First Name' }).fill('srinu');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('kanike');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page).toHaveURL(/viewPersonalDetails/);
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});
