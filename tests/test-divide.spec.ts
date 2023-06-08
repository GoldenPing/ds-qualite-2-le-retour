import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


describe("test deivide calculator", ()=>{

  test('test divide easy', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: 'divide' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '=' }).click();
  
    const resultat = await page.waitForSelector('#screen');
    const resultatStr = await resultat.innerText()
  
    expect(resultatStr).toBe(2);
  });

  
test('test divide with b = 0', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'divide' }).click();
  await page.getByRole('button', { name: '0' }).click();
  await page.getByRole('button', { name: '=' }).click();

  const resultat = await page.waitForSelector('#screen');
  const resultatStr = await resultat.innerText()

  expect(resultatStr).toBe('err');
});

test('test divide with virgule', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'divide' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('button', { name: '=' }).click();

  const resultat = await page.waitForSelector('#screen');
  const resultatStr = await resultat.innerText()

  expect(resultatStr).toBe('0');
});
})