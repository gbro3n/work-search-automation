import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.reed.co.uk/');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'I Accept' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('Reed.co.uk');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('gb@appsoftware.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('reedreed1');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('link', { name: 'Edit profile & CV' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Update', exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(500);

  // Use file chooser 

  const fileChooserPromise = page.waitForEvent('filechooser');

  await page.getByRole('button', { name: 'Choose file' }).click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('P:/App Software/Contractor CVs/AppSoftware_Limited_Software_Engineer_CV_Gareth_Brown_Contract.docx');

  await page.waitForTimeout(15000); // CV processing can take a long time

  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto('https://www.reed.co.uk/candidate-profile');
});