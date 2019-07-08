export class DoctorLookup {

  getDoctor(search, name) {
    if (name === true) {
      var query = `name=${search}`;
    } else {
      var query = `query=${search}`
    }
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?limit=10&location=45.512,-122.658,100&${query}&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
