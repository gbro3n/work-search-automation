import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cwjobs.co.uk/');
  await page.waitForTimeout(500);
  await page.locator('#ccmgt_explicit_accept').click();
  await page.waitForTimeout(500);
  await page.getByTestId('menu-item-sign-in-menu').click();
  await page.waitForTimeout(500);
  await page.getByTestId('sign-in').click();
  await page.waitForTimeout(500);
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('gb@appsoftware.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('cwjocwjo1');
  await page.getByTestId('login-submit-btn').click();
  await page.waitForTimeout(500);
  await page.getByTestId('menu-item-profile').click();
  await page.waitForTimeout(500);
  await page.getByTestId('my-profile').click();
  await page.waitForTimeout(500);
  await page.getByRole('tab', { name: 'My documents' }).click();
  await page.waitForTimeout(500);

  // Use file chooser 

  const fileChooserPromise = page.waitForEvent('filechooser');

  await page.getByRole('button', { name: 'Replace CV' }).click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('P:/App Software/Contractor CVs/AppSoftware_Limited_Software_Engineer_CV_Gareth_Brown_Contract.docx');

  await page.waitForTimeout(2000);
  await page.goto('https://www.cwjobs.co.uk/profile');
});