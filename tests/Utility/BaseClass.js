const{chromium,firefox,webkit}=require("@playwright/test")

class CommonUtility{

async  launchBrowser(browsername="chromium",headless=false){
         switch(browsername.toLowerCase()){
            case "firefox":
                return await firefox.launch({headless});
            case "webkit":
                return await webkit.launch({headless});  
               
             default:
                   return await chromium.launch({headless});  
               
         }
}

async launchContext(browser){
    return await browser.newContext();
}

async launchPage(context){
    return await context.newPage();
}

async launchUrl(page,url){
    await page.goto(url,{waitUntil:"networkidle"})
}

async getPageTitle(page){
    return await page.title();
}

async waitForVisible(page,locator,timeout=5000){
await page.waitForSelector(locator,{state:"visible",timeout})
}

async fill(page,locator,value){
    await this.waitForVisible(page,locator);
    await page.fill(locator,value);
}

async click(page,locator){
    await this.waitForVisible(page,locator);
    await page.click(locator);
}

async waitForPage(page,timeValue){
    await page.waitForTimeout(timeValue);
}


}

module.exports=new CommonUtility();