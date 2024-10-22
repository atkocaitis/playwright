import { test, expect } from '@playwright/test';

const testData = [
  {
    country: 'Japan',
    simPackageText: '1 GB',
    operatorTitle: 'Moshi Moshi',
    dataValue: '1 GB',
    validity: '7 Days',
    price: '$4.50 USD'
  },
  {
    country: 'Lithuania',
    simPackageText: '3 GB',
    operatorTitle: 'Lila Mobile',
    dataValue: '3 GB',
    validity: '30 Days',
    price: '$9.50 USD'
  },
];

test.describe.parallel('Airalo SIM package tests', () => {
  for (const data of testData) {
    test(`Verify SIM package details for ${data.country}`, async ({ page }) => {
      await page.context().addCookies([{
        name: 'Airalo.currency',
        value: 'USD',
        domain: 'www.airalo.com',
        path: '/',       
      }]);
      await page.goto('https://www.airalo.com/');
      await page.getByTestId('search-input').fill(data.country);
      await page.getByTestId(`${data.country}-name`).click();
      await page.getByTestId('sim-package-item').filter({ hasText: data.simPackageText }).click();

      // Verify that the popup appears and the details are correct
      let popup = page.getByTestId('sim-detail-header');
      await expect(popup).toBeVisible();
      await expect(popup.getByTestId('sim-detail-operator-title')).toHaveText(data.operatorTitle);
      await expect(popup.getByTestId('COVERAGE-value')).toHaveText(data.country);
      await expect(popup.getByTestId('DATA-value')).toHaveText(data.dataValue);
      await expect(popup.getByTestId('VALIDITY-value')).toHaveText(data.validity);
      await expect(popup.getByTestId('PRICE-value')).toHaveText(data.price);
    });
  }
});