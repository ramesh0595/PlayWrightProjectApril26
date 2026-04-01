const { format } = require("node:path");

module.exports={
    default:{
        paths:[
            "tests/**/*.feature"
        ],
        require:[
           "tests/**/*.js"
        ],
        format:[
           // "progress",
            "json:reports/cucumber-JsonReport.json"
          // "html:reports/cucumber-HtmlReport.html",
          // "junit:reports/cucumber-JunitReport.xml"
        ]
    }
};