import { fixtures as test } from "../../../fixture";

test.describe("Pricing page tests", () => {
  test("Verify that switching between monthly and yearly options updates pricing accordingly", async ({
    pricingPage,
  }) => {
    await pricingPage.planToggle();
  });

  test("Verify that user can create a new account", async ({ pricingPage }) => {
    await pricingPage.createAccount();
  });

  test("Verify that user is unable to proceed without filling the mandatory fields", async ({
    pricingPage,
  }) => {
    await pricingPage.assertMandatoryFields();
  });
});
