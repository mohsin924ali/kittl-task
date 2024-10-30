import { test as base } from "@playwright/test";
import PricingPage from "./pageobjects/website/pricingPage.page";
import LoginModal from "./pageobjects/website/loginModal.page";

const fixtures = base.extend<{
  pricingPage: PricingPage;
  loginModal: LoginModal;
}>({
  pricingPage: async ({ page }, use) => {
    const pricingPage = new PricingPage(page);
    await use(pricingPage);
  },
  loginModal: async ({ page }, use) => {
    const loginModal = new LoginModal(page);
    await use(loginModal);
  },
});

export { fixtures };
