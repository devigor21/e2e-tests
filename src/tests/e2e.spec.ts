import 'expect-puppeteer';

const puppeteer = require('puppeteer');

jest.setTimeout(50000);

describe('E2E Tests', () => {
  let browser: any;
  let page: any;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://6168719eb424090007f78fa1--kind-roentgen-3e48c2.netlify.app/', {
      waitUntil: ['domcontentloaded'],
    });
  });

  it('should create list-view.png', async () => {
    await expect(page).toClick('button', { text: 'List view' });
    await page.screenshot({ path: './src/tests/list-view.png' });
  }, 5000);

  it('should create cards-view.png', async () => {
    await expect(page).toClick('button', { text: 'Cards view' });
    await page.screenshot({ path: './src/tests/cards-view.png' });
  }, 5000);

  it('should contain text on start Home page', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('sunt aut facere');
  });

  it('should show more cards', async () => {
    await expect(page).toClick('button', { text: 'Show more' });
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('eum et est occaecati');
  });

  it('should show content on about page', async () => {
    await page.waitForSelector('a[href="/about"]');
    await page.click('a[href="/about"]');
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Lorem ipsum dolor sit amet');
  });

  afterAll(async () => {
    await browser.close();
  });
});
