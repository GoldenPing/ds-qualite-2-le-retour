import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('test sousctatrion calculator',()=>{

  test('test sousctatrion easy', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: 'soustraction' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '=' }).click();
    const resultat = await page.waitForSelector('#screen');
    const resultatStr = await resultat.innerText()
  
    expect(resultatStr).toBe(1);
  });

  
test('test sousctatrion hard', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: '43' }).click();
  await page.getByRole('button', { name: 'soustraction' }).click();
  await page.getByRole('button', { name: '19' }).click();
  await page.getByRole('button', { name: '=' }).click();
  const resultat = await page.waitForSelector('#screen');
  const resultatStr = await resultat.innerText()

  expect(resultatStr).toBe(24);
});

test('test sousctatrion hard negative', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: '0' }).click();
  await page.getByRole('button', { name: 'soustraction' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '=' }).click();
  const resultat = await page.waitForSelector('#screen');
  const resultatStr = await resultat.innerText()

  expect(resultatStr).toBe(-1);
});
})