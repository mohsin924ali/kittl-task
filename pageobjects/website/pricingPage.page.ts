import { expect } from "@playwright/test";
import { Page, Locator } from "playwright-core";

export default class PricingPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Elements
  //-------------------------------------------------------------------------------------------------------------------
  private get yearlyProPrice(): Locator {
    return this.page.locator(
      '//*[contains(@class, "styles__PriceLabel-sc-2bcfdeba-2")]//*[contains(text(), "10")]'
    );
  }

  private get monthlyProPrice(): Locator {
    return this.page.locator(
      '//*[contains(@class, "styles__PriceLabel-sc-2bcfdeba-2")]//*[contains(text(), "15")]'
    );
  }

  private get yearlyExpertPrice(): Locator {
    return this.page.locator(
      '//*[contains(@class, "styles__PriceLabel-sc-2bcfdeba-2")]//*[contains(text(), "24")]'
    );
  }

  private get monthlyExpertPrice(): Locator {
    return this.page.locator(
      '//*[contains(@class, "styles__PriceLabel-sc-2bcfdeba-2")]//*[contains(text(), "30")]'
    );
  }

  private get planToggleButton(): Locator {
    return this.page.locator(
      '//*[contains(@id, "__next")]//*[contains(text(), "Monthly")]'
    );
  }

  private get createAccountButton(): Locator {
    return this.page
      .locator(
        '//*[contains(@id, "pricingplans-top")]//*[contains(text(), "Start Free Trial") or contains(text(), "Get Pro")]'
      )
      .first();
  }

  private get nameField(): Locator {
    return this.page.getByPlaceholder("Name");
  }

  private get emailField(): Locator {
    return this.page.getByPlaceholder("E-Mail");
  }

  private get passwordField(): Locator {
    return this.page.getByPlaceholder("Password");
  }

  private get crossButton(): Locator {
    return this.page.getByTestId("round-close-button");
  }

  private get subscribeButton(): Locator {
    return this.page.getByTestId("signup");
  }
  // Actions
  //-------------------------------------------------------------------------------------------------------------------

  // Switch the price plan from yearly to monthly
  async planToggle() {
    await this.page.goto("https://www.kittl.com/pricing");
    await expect(this.yearlyProPrice).toBeVisible();
    await expect(this.yearlyExpertPrice).toBeVisible();
    await this.planToggleButton.click();
    await expect(this.monthlyProPrice).toBeVisible();
    await expect(this.monthlyExpertPrice).toBeVisible();
  }

  // Create a new account
  async createAccount() {
    await this.page.goto("https://www.kittl.com/pricing");
    await this.createAccountButton.click();
    await this.nameField.fill("John Player");
    await this.emailField.fill("test@test.com");
    await this.passwordField.fill("test1234");
    await this.crossButton.click();
  }

  // Assert mandatory fields
  async assertMandatoryFields() {
    await this.page.goto("https://www.kittl.com/pricing");
    await this.createAccountButton.click();
    await this.subscribeButton.click();
    const actualText = await this.page
      .locator('//*[contains(@class, "styles__InfoText-sc-9627b609-9 dTCepy")]')
      .allTextContents();
    expect(actualText).toContain("Name field is required");
    expect(actualText).toContain("E-Mail field is required");
    expect(actualText).toContain("Password field is required");
  }
}
