const axios = require("axios");
let fs = require("fs");
let Queries = require('./queries/index');

Queries.forEach(item => {

axios
  .post("https://api.thegraph.com/subgraphs/name/lilendian97/fin-p", {
    query:item.query
  })
  .then((res) => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log(JSON.stringify(res.data));
    let jsondata = JSON.stringify(res.data);
    fs.writeFile(`./data/${item.f_name}`, jsondata, function (err) {
      if (err) {
        console.log(err);
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
});