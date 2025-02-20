const { test, expect } = require('@playwright/test');
require("dotenv").config({ path: ".env.local" });

test('Mailto Link Test', async ({ page }) => {
    await page.goto('/');

    const mailtoLink = page.locator('#contact');

    await expect(mailtoLink).toBeVisible();

    // Step 4: Verify the href attribute of the link
    const href = await mailtoLink.getAttribute('href');
    expect(href).toBe('mailto:xplrcthng@gmail.com'); // Replace with the expected email address

    // Additional checks (if needed)
    // For example, checking the text of the link:
    await expect(mailtoLink).toHaveText('Contact Us');
});