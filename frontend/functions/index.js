const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const request = require("request");
const API_KEY = process.env.REACT_APP_DATA4LIBRARY_KEY;
exports.apicall = functions.https.onRequest((req, response) => {
  cors(req, response, () => {
    request(
      `http://data4library.kr/api/loanItemSrchByLib?authKey=${API_KEY}&region=31&startDt=2022-01-01&endDt=2022-03-30&format=json`,
      function (error, res, body) {
        response.send(res);
      }
    );
  });
});
