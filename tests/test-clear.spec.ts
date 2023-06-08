import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


// ce test a écrit sans le code 
describe('Test clear calculator', ()=>{
  test('clear',async({page})=>{

    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: '0' }).click();
    await page.getByRole('button', { name: 'clear' }).click();

    const resultat = await page.waitForSelector('#screen');
    const resultatStr = await resultat.innerHTML()
  
    expect(resultatStr).toBe('');
  })
})