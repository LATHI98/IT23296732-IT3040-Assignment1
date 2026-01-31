const { test, expect } = require('@playwright/test');

const url = 'https://www.swifttranslator.com/';

const positiveTests = [
  'mama peeraadheNiyata yanavaa.',
  'ee maamaa mootar raTha alevisaelakata gos sudhu mootar raTha dhekak saha kaLu mootar raTha dhekak miladhii gaththeeya. ee saDHAhaa rupiyal 10,75,000k geviya.',
  'magee yaaluvaa paadam karanavaanam, mama pusthakaalayata yannam, naethnam gedhara yanna venavaa.',
  'api panthi kaamarayata yannadha?',
  'Oyaagee satahan tika mata evanna!',
  'Mama ee  panthiyata yanne naehae.',
  'Aayuboovan, suba saendhaeevak !',
  'karuNaakaralaa Mata poth tika dhenna.',
  'ov, mama ehema karannam.',
  'mata hoDHAtama siithalayi.',
  'kurulu paetiyaa tika tika piyaaBAnavaa.',
  'eyaa iiyee rata giyaa.',
  'api labana maasee siriipaadhee yamu.',
  'eyaalaa iiyee maathara giyaa.',
  'Mama YouTube channel ekak subscribe kalaa.',
  ' Eyaagee laptop ekee RAM eka 8GB, SSD eka 256GB thiyenavaa.',
  'ayiyaa colombo yanavaa.',
  'magee NIC eka illanna bae.',
  'mokadha vune? kiyannako!',
  'adha udhee 8:00 AM ta raesviimak thiyenavaa.',
  'mata Rs. 2500.00 k dhenna.',
  'Machan, Mehema igenaganna eka pahasu naee.',
  'apita adha office yanna baee mokadha bus eka late unaa. Meeting eka Zoom valin attend karannam kiyala team eka ta  message ekak dhaanna.',
  'mama    gedharata    yanavaa.'
];

const negativeTests = [
  '	Eyathodatamalakunune',
  'natanavaaaaa.',
  'ohu!!!?? Cadet karanava.',
  'mama hamadhaama puhuNuviim karnava&&',
  'oya badu (man kiva tika)gaththada?',
  'brown sugar and white milk.',
  'aaaamaaamaaa',
  'ayya game (((()))))) inne.',
  '	mama 😊 gedhara yanavaa #happy',
  '	m23567a'
];

test.beforeEach(async ({ page }) => {
  await page.goto(url);
});

positiveTests.forEach((text, i) => {
  test(`Pos_Fun_${(i+1).toString().padStart(4,'0')}`, async ({ page }) => {
    await page.fill('textarea', text);
    await page.waitForTimeout(2000);
    // Wait for output to have content
    await page.waitForFunction(() => {
      const outputDiv = document.querySelector('div.whitespace-pre-wrap.h-80');
      return outputDiv && outputDiv.textContent.trim().length > 0;
    }, { timeout: 5000 });
    const output = await page.locator('div.whitespace-pre-wrap.h-80').textContent();
    expect(output.length).toBeGreaterThan(0);
  });
});

negativeTests.forEach((text, i) => {
  test(`Neg_Fun_${(i+1).toString().padStart(4,'0')}`, async ({ page }) => {
    await page.fill('textarea', text);
    await page.waitForTimeout(2000);
    // Wait for output to have content
    await page.waitForFunction(() => {
      const outputDiv = document.querySelector('div.whitespace-pre-wrap.h-80');
      return outputDiv && outputDiv.textContent.trim().length > 0;
    }, { timeout: 5000 });
    const output = await page.locator('div.whitespace-pre-wrap.h-80').textContent();
    expect(output.length).toBeGreaterThan(0);
  });
});

test('Pos_UI_0001_Real_Time_Update', async ({ page }) => {
  // Test real-time incremental updates
  await page.locator('textarea').pressSequentially('ma', { delay: 100 });
  await page.waitForTimeout(1500);
  const output1 = await page.locator('div.whitespace-pre-wrap.h-80').textContent();
  expect(output1.length).toBeGreaterThan(0);
  
  // Continue typing and verify output updates
  await page.locator('textarea').pressSequentially('ma', { delay: 100 });
  await page.waitForTimeout(1500);
  const output2 = await page.locator('div.whitespace-pre-wrap.h-80').textContent();
  expect(output2.length).toBeGreaterThan(output1.length);
  expect(output2).not.toBe(output1);
});
