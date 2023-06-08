import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


describe('Test multiply calculator',()=>{

  test('Test multiply easy', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: 'multiplication' }).click();
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: '=' }).click();
  
    const resultat = await page.waitForSelector('#screen');
    const resultatStr = await resultat.innerText()
  
    expect(resultatStr).toBe(2);
  });


  test('Test multiply hard', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: '27' }).click();
    await page.getByRole('button', { name: 'multiplication' }).click();
    await page.getByRole('button', { name: '42' }).click();
    await page.getByRole('button', { name: '=' }).click();
  
    const resultat = await page.waitForSelector('#screen');
    const resultatStr = await resultat.innerText()
  
    expect(resultatStr).toBe(1134);
  });
})
