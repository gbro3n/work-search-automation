import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.linkedin.com/');
  await page.waitForTimeout(500);
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('gareth.brown@appsoftware.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Linklink462*');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('link', { name: 'Photo of Gareth Brown,#' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Edit intro' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(500);
});
