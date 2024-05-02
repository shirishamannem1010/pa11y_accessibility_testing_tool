const pa11y = require('pa11y');
const fs = require('fs');
const pa11yHtmlReporter = require('pa11y-reporter-html');

 
exports.reportgeneration = async (url,standardname,reportname,customTitle) => {
 
    const results = await pa11y(url , {
        standard: standardname
      });

      const htmlReportOptions = {
        title: customTitle   // Use custom title if provided, otherwise use the URL as the title
    };
      const htmlReport =await pa11yHtmlReporter.results(results,htmlReportOptions);
      if (!fs.existsSync("reports/"+ reportname +".html")) {
        fs.mkdirSync("reports", {
          recursive: true,
        });
      }
      fs.writeFileSync("reports/"+ reportname +".html", htmlReport);
}