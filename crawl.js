const axios = require("axios");
let fs = require("fs");
let Queries = require("./queries/index");
var cron = require("node-cron");
cron.schedule("*/30 * * * *", () => {
  console.log("running a task every 30 minute");
  Queries.forEach((item) => {
    axios
      .post("https://api.thegraph.com/subgraphs/name/lilendian97/fin-p", {
        query: item.query,
      })
      .then((res) => {
        console.log("Hacking !");

        let jsondata = JSON.stringify(res.data);
        let ts = new Date();
        let folder_name = ts.toISOString();
        folder_name = folder_name.replace(/:/g, "-");
        let index = folder_name.lastIndexOf("-");
        folder_name = folder_name.substring(0, index);

        if (!fs.existsSync(`./${folder_name}`)) {
          fs.mkdirSync(`./${folder_name}`);
          fs.writeFile(
            `./${folder_name}/${item.f_name}`,
            jsondata,
            function (err) {
              if (err) {
                console.log(err);
              }
            }
          );
        } else {
          fs.writeFile(
            `./${folder_name}/${item.f_name}`,
            jsondata,
            function (err) {
              if (err) {
                console.log(err);
              }
            }
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
