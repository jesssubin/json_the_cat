
const fetchBreedDescription = function(breedName, callback) {
  
  const request = require('request');
  const urlAddress = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedName}`;

  request(urlAddress, function(error, response, body) {

    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed Not Found", null);
    } else {
      const breed = data[0].breeds[0];
      console.log(breed);
      callback(null, breed.description);
    }
  });
};

module.exports = { fetchBreedDescription };