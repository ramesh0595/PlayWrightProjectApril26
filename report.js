const reporter=require("cucumber-html-reporter");

const options={
    theme:'bootstrap',
    jsonFile:'reports/cucumber-JsonReport.json',
    output:'reports/custom-report.html',
    reportSuiteAsScenarios:true,
    launchReport:true,
    metadata:{
        "Tester Nmae":"Ramesh",
        "Test Environment":"QA",
        "Browser":"Chromium",
        "Platform":"Windows",
        "Executed":"Local"
    }
};

reporter.generate(options);