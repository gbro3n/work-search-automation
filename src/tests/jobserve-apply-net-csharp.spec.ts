import { test, expect } from '@playwright/test';

// Test will open up the saved .NET / C# Job Search and apply for matching jobs that have not been applied for with a standard covering letter

test('jobserve-apply-net-csharp', async ({ page }) => {
  await page.goto('https://www.jobserve.com/gb/en/Job-Search/');
  await page.getByRole('link', { name: 'Sign In/Register' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Job Seekers$/ }).getByRole('link').click();
  await page.locator('#RightSide').getByRole('link', { name: 'Allow cookies' }).click();
  await page.locator('#txbEmail').click();
  await page.locator('#txbEmail').fill('gb@appsoftware.com');
  await page.locator('#txbPassword').click();
  await page.locator('#txbPassword').fill('jobsjobs1');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'My Account' }).click();
  await page.getByRole('link', { name: 'Job Searches & Alerts' }).click();
  await page.getByRole('cell', { name: '.net c# asp.net Updated 6 Mar' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Run this search' }).click();
  const page1 = await page1Promise;
  await page1.locator('#jsJobResContent').getByRole('heading', { name: 'C# .NET RX Developer - SOA' }).click();
  await page1.locator('#td_apply_btn').click();
  await page1.locator('#appFrame').contentFrame().locator('#filCV').click();
  await page1.locator('#appFrame').contentFrame().locator('#filCV').setInputFiles('AppSoftware_Limited_Software_Engineer_CV_Gareth_Brown_Contract.docx');
  await page1.locator('#appFrame').contentFrame().getByText('Dear Sir/Madam, Re: JSADL3274').click();
  await page1.locator('#appFrame').contentFrame().getByText('Dear Sir/Madam, Re: JSADL3274').press('ControlOrMeta+a');
  await page1.locator('#appFrame').contentFrame().getByText('Dear Sir/Madam, Re: JSADL3274').fill('Please see my CV attached. I would like to put myself forward for the advertised role. I\'m available for a new contract and the spec on the job posting looks like a a good match for my skill set and recent experience.\n\nContact me at gareth.brown@appsoftware.com or on +44(0)7730 590785.\n\nMany thanks,\n\nGareth Brown (Software Engineer)');
  await page1.locator('#appFrame').contentFrame().getByRole('link', { name: 'Apply' }).first().click();
  await page1.getByRole('button', { name: 'close' }).click();
  await page1.getByRole('heading', { name: 'Risk C# Agile Developer -' }).click();
  await page1.locator('#td_apply_btn').click();
  await page1.locator('#appFrame').contentFrame().locator('#filCV').click();
  await page1.locator('#appFrame').contentFrame().locator('#filCV').setInputFiles('AppSoftware_Limited_Software_Engineer_CV_Gareth_Brown_Contract.docx');
  await page1.locator('#appFrame').contentFrame().getByText('Dear Sir/Madam, Re: JSADL3272').click();
  await page1.locator('#appFrame').contentFrame().getByText('Dear Sir/Madam, Re: JSADL3272').press('ControlOrMeta+a');
  await page1.locator('#appFrame').contentFrame().getByText('Dear Sir/Madam, Re: JSADL3272').fill('Please see my CV attached. I would like to put myself forward for the advertised role. I\'m available for a new contract and the spec on the job posting looks like a a good match for my skill set and recent experience.\n\nContact me at gareth.brown@appsoftware.com or on +44(0)7730 590785.\n\nMany thanks,\n\nGareth Brown (Software Engineer)');
  await page1.locator('#appFrame').contentFrame().getByRole('link', { name: 'Apply' }).first().click();
  await page1.getByRole('button', { name: 'close' }).click();
  await page1.getByRole('button', { name: 'close' }).click();
});