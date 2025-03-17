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
  await page.getByRole('cell', { name: '.net c# asp.net' }).click(); // Must save with this name
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Run this search' }).click();
  const page1 = await page1Promise;
  
  // Pause here

  await page1.waitForTimeout(1000);

  // Iterate over all h3 headings under #jsJobResContent
  const headings = await page1.locator('#jsJobResContent h3').elementHandles();
  for (const heading of headings) {
    await page1.waitForTimeout(1000);
    await heading.click();
    await page1.waitForTimeout(2000); // wait for 2 seconds
    // Log the job title from the heading
    const jobTitle = await heading.textContent();
    console.log(`Applying for job: ${jobTitle?.trim()}`);
    const applyBtn = await page1.$('#td_apply_btn');
    if (!applyBtn) continue;
    await page1.locator('#td_apply_btn').click();
    
    // Proceed with application process
    const appFrame = await page1.locator('#appFrame').contentFrame();
    //await appFrame.locator('#filCV').click();
    await appFrame.locator('#filCV').setInputFiles('P:/App Software/Contractor CVs/AppSoftware_Limited_Software_Engineer_CV_Gareth_Brown_Contract.docx');
    await appFrame.getByText('Dear Sir/Madam').click();
    await appFrame.getByText('Dear Sir/Madam').press('ControlOrMeta+a');
    await appFrame.getByText('Dear Sir/Madam').fill('Please see my CV attached. I would like to put myself forward for the advertised role. I\'m available for a new contract and the spec on the job posting looks like a a good match for my skill set and recent experience.\n\nContact me at gareth.brown@appsoftware.com or on +44(0)7730 590785.\n\nMany thanks,\n\nGareth Brown (Software Engineer)');
    
    // Just so I can see

    await page1.waitForTimeout(1000);
    
    await appFrame.getByRole('link', { name: 'Apply' }).first().click();
    await page1.getByRole('button', { name: 'close' }).click();
  }

  // Wait to see what browser was last working on

  await page1.waitForTimeout(10000);
});

