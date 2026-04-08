module.exports = {
  default: {
    require: ["tests/**/*.js"],
    format: [
      "json:reports/cucumber-JsonReport.json",
      "html:reports/cucumber-HtmlReport.html",
      "junit:reports/cucumber-JunitReport.xml",
    ],
  },
};
