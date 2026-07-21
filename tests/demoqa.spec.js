import { test, expect } from '@playwright/test';
import addvalue from '../test-data/addvalue.json';
import { faker } from '@faker-js/faker';

test('Verify login Functionality', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.waitForLoadState('networkidle');

  const userNameInput = page.locator('#userName');
  await userNameInput.waitFor({ state: 'visible' });
  await expect(userNameInput).toBeVisible();
  await userNameInput.fill('srinu');

  const userEmailInput = page.locator('#userEmail');
  await userEmailInput.waitFor({ state: 'visible' });
  await userEmailInput.fill('srinu@example.com');

  const currentAddressInput = page.locator('#currentAddress');
  await currentAddressInput.waitFor({ state: 'visible' });
  await currentAddressInput.fill('main address');

  const submitButton = page.locator('#submit');
  await submitButton.waitFor({ state: 'visible' });
  await submitButton.click();
  await page.waitForTimeout(1000);

  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#email')).toHaveText('Email:srinu@example.com');
});

test('Verify add functionality', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.waitForLoadState('networkidle');

  const userNameInput = page.locator('#userName');
  await userNameInput.waitFor({ state: 'visible' });
  await userNameInput.fill(addvalue.fullname);

  const userEmailInput = page.locator('#userEmail');
  await userEmailInput.waitFor({ state: 'visible' });
  await userEmailInput.fill(addvalue.Email);

  const currentAddressInput = page.locator('#currentAddress');
  await currentAddressInput.waitFor({ state: 'visible' });
  await currentAddressInput.fill(addvalue.Address);

  const permanentAddressInput = page.locator('#permanentAddress');
  await permanentAddressInput.waitFor({ state: 'visible' });
  await permanentAddressInput.fill(addvalue['Permenant Address']);

  const submitButton = page.locator('#submit');
  await submitButton.waitFor({ state: 'visible' });
  await submitButton.click();
  await page.waitForTimeout(1000);

  await expect(submitButton).toBeEnabled();
});
test('Verify add functionality1', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').fill(faker.fullName.fullName());
    await page.locator('#userEmail').fill(faker.Email.email());
    await page.locator("//textarea[@id='currentAddress']").fill(addvalue.Address);
    await page.locator("//textarea[@id='permanentAddress']").fill(addvalue['Permenant Address']);
    await page.locator('#submit').click();


});