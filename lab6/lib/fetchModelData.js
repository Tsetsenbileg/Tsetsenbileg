var Promise = require("Promise");

/**
 * FetchModel - Fetch a model from the web server.
 *     url - string - The URL to issue the GET request.
 * Returns: a Promise that should be filled
 * with the response of the GET request parsed
 * as a JSON object and returned in the property
 * named "data" of an object.
 * If the requests has an error the promise should be
 * rejected with an object contain the properties:
 *    status:  The HTTP response status
 *    statusText:  The statusText from the xhr request
 *
 */

function fetchModel(url) {
  return new Promise(function (resolve, reject) {
    // console.log(url);
    // setTimeout(() => reject({ status: 501, statusText: "Not Implemented" }), 0);
    // // On Success return:
    // resolve({ data: getResponseObject });
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onreadystatechange = function () {
      if (this.readyState != 4) {
        return;
      }
      if (this.status != 200) {
        return reject({ status: this.status, statusText: this.statusText });
      }
      return resolve({ data: this.response });
    };
    xhr.open("GET", url);
    xhr.send();
  });
}

export default fetchModel;
