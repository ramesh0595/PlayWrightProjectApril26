module.exports={
    default:{
       
        require:[
           "tests/**/*.js"
        ],
        format:[
          
          "html:reports/cucumber-HtmlReport.html",
          "junit:reports/cucumber-JunitReport.xml"
        ]
    }
};