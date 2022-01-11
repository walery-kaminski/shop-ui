import puppeteer from "puppeteer";

describe('App.js', () => {
  let browser;
  let page;

  let galaxy = puppeteer.devices['Galaxy S9+'];

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it('contains the nav', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('.navLinks');
    const text = await page.$eval('.navLinks', (e) => e.textContent);
    expect(text).toContain('Home');
  });

  it('contains the homepage', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector("[data-testid='home-wrapper']");
    const wrapper = await page
      .$eval("[data-testid='home-wrapper']", () => true)
      .catch(() => false);

    expect(wrapper).toBe(true);
  });

  it('contains the footer', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#footer-wrapper');
    const text = await page.$eval('#footer-wrapper', (e) => e.textContent);
    expect(text).toContain('© 2022 Shop & Buy Stuff');
  });

  it('searches & gives results', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#search-input');

    await page.click('#search-input');
    await page.type('#search-input', 'coffee');
    await page.keyboard.press('Enter');
    await page.waitForSelector('#search-results-title');
    const text = await page.$eval('#search-results', (e) => e.textContent);
    expect(text).toContain('coffee');
  });

  it('searches & gives message when there is no items', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#search-input');

    await page.click('#search-input');
    await page.type('#search-input', 'blah blah blah');
    await page.keyboard.press('Enter');
    await page.waitForSelector('#search-results');
    const text = await page.$eval('#search-results', (e) => e.textContent);
    expect(text).toContain(
      'Sorry, your search term did not match any results...'
    );
  });

  it('adds items to cart', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#product');

    await page.click('.add-to-cart');
    await page.waitForSelector("[data-testid='cart-home']");
    const text = await page.$eval(
      "[data-testid='cart-home']",
      (e) => e.textContent
    );
    expect(text).toContain('Cart [ 1 ]');
  });

  it('can navigate to cart page', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#product');

    await page.click("[data-testid='cart-home']");
    await page.waitForSelector("[data-testid='cart-wrapper']");
    const text = await page.$eval(
      "[data-testid='product-table']",
      (e) => e.textContent
    );
    expect(text).toContain('NamePrice(€)QuantityTotal(€)Total00');
  });

  it('is shows menu on smaller devices', async () => {
    await page.emulate(galaxy);
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#menu');
    const text = await page.$eval('#menu', (e) => e.textContent);
    expect(text).toContain('≡ Menu');
  });

  it('menu is clickable & it shows the nav items', async () => {
    await page.emulate(galaxy);
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#menu');
    await page.click('#menu');
    await page.waitForSelector('#popup-links');
    const text = await page.$eval('#popup-links', (e) => e.textContent);
    expect(text).toContain('Home');
  });

  afterAll(() => browser.close());
});
