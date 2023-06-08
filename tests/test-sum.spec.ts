import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


describe('test addition calculator', ()=>{

  test('test addition easy', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: '0' }).click();
    await page.getByRole('button', { name: 'sum' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '=' }).click();
  
    const resultat = await page.waitForSelector('#screen');
    const resultatStr = await resultat.innerHTML()
  
    expect(resultatStr).toBe(1);
  });


 test('test addition hard', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: 'sum' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '=' }).click();
  
    const resultat = await page.waitForSelector('#screen');
    const resultatStr = await resultat.innerText()
  
    expect(resultatStr).toBe(222);
  });


  test('test addition hard with retenu', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: 'sum' }).click();
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: '=' }).click();
  
    const resultat = await page.waitForSelector('#screen');
    const resultatStr = await resultat.innerText()
  
    expect(resultatStr).toBe(1998);})
})