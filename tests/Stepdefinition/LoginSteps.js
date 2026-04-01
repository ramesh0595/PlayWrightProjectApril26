const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const assert = require("assert");
const utilis = require("../Utility/BaseClass");
const LoginPage = require("../Pages/LoginPage");
const RegistrationPage = require("../Pages/RegistrationPage");


let loginpage;
let registrationpage;
Given("The user should be in faceBook Page", async function () {
    console.log("User handled the Facebook Page using Hooks")
});
When(
  "The user has to fill the userName {string} and Password {string}",
  async function (user, pass) {
    loginpage = new LoginPage(this.page);
    await loginpage.enterUsername(user);
    await loginpage.enterPassword(pass);
  },
);

When("The user has to click the login button", async function () {
  await loginpage.clickLogin();
});

Then("The user should navigate the invalid Page", async function () {
  await utilis.waitForPage(this.page,5000);
  const title = await utilis.getPageTitle(this.page);
  assert.ok(title.includes("Facebook"));
  console.log("User in Invalid Page");
  
});



When("The user has to click the create new account button", async function () {
  registrationpage = new RegistrationPage(this.page);
  await registrationpage.clickCreateAccount();
});

When(
  "The user has to fill the firstname,lastname and other details",
  async function () {
    await registrationpage.enterFirstName("ramesh");
    await registrationpage.enterLastName("kumar");
  },
);

When("The user has to click the submit button", async function () {
  await registrationpage.clickSubmit();
});

Then("The user should be get successfully Registered", async function () {
  console.log("User Successfully Registered");
  
});
