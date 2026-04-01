const { Before, After, Status } = require("@cucumber/cucumber");
const utilis = require("../Utility/BaseClass");

Before(async function () {
  console.log("----------Before Scenario-------------");

  this.browser = await utilis.launchBrowser("chromium", false);
  this.context = await utilis.launchContext(this.browser);
  this.page = await utilis.launchPage(this.context);
  await utilis.launchUrl(this.page, "https://www.facebook.com/");
});

After(async function (Scenario) {
  //   await this.page.screenshot({
  //     path: "tests/Screenshots/" + Date.now() + ".png",
  //     fullPage:true
  //   });

  // get screenshot all passed and Failed scenarios
  //      const scenarioName=Scenario.pickle.name.trim().replace(/[^a-zA-Z0-9]/g,"_");
  //      const filePth=`tests/Screenshots/${scenarioName}.png`;

  //      const screenshot=await this.page.screenshot({
  //       path:filePth,
  //       fullPage:true
  //      })

  //      await this.attach(screenshot,'image/png');

  if (Scenario.result.status === Status.FAILED) {
    const scenarioName = Scenario.pickle.name
      .trim()
      .replace(/[^a-zA-Z0-9]/g, "_");
    const filePth = `tests/Screenshots/${scenarioName}.png`;

    const screenshot = await this.page.screenshot({
      path: filePth,
      fullPage: true,
    });

    await this.attach(screenshot, "image/png");
  }

  await this.browser.close();
  console.log("----------After Scenario-------------");
});

//Ordered Hooks
// Before ({order:0},async function(){
//       console.log("----------Before Scenario-------------1")
// })

// After ({order:1},async function(){

//       console.log("----------After Scenario-------------1")
// })

// Before ({order:1},async function(){
//       console.log("----------Before Scenario-------------2")
// })

// After ({order:0},async function(){

//       console.log("----------After Scenario-------------2")
// })

//Tagged Hooks
// Before ({tags:"@smoke or @retest"},async function(){
//       console.log("----------Before Scenario-------------1")
// })

// After ({tags:"@smoke or @retest"},async function(){

//       console.log("----------After Scenario-------------1")
// })

// Before (async function(){
//       console.log("----------Before Scenario-------------2")
// })

// After (async function(){

//       console.log("----------After Scenario-------------2")
// })

//Ordered and Tagged Hooks
// Before ({tags:"@smoke",order:1},async function(){
//       console.log("----------Before Scenario-------------1")
// })

// After ({tags:"@smoke",order:1},async function(){

//       console.log("----------After Scenario-------------1")
// })

// Before ({order:2},async function(){
//       console.log("----------Before Scenario-------------2")
// })

// After ({order:2},async function(){

//       console.log("----------After Scenario-------------2")
// })
